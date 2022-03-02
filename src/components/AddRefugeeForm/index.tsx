import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useForm, Controller, useWatch } from "react-hook-form";
import { useState, useMemo } from "react";
import { useTranslation } from "next-i18next";

import { CompositionSection } from "../Compositions";
import {
  Input,
  ChoiceButton,
  InputControl,
  InputCotrolLabel,
  RadioButtons,
} from "../Forms";
import { ButtonCta } from "../Buttons";
import AnimalsIcon from "../../style/svgs/animals.svg";
import KidsIcon from "../../style/svgs/kids.svg";
import FoodIcon from "../../style/svgs/food.svg";
import DisabilityIcon from "../../style/svgs/disability.svg";
import CheckboxField from "../Forms/CheckboxField";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
  },
  error: {
    color: "#D8000C",
    marginTop: 10,
  },
  containerWraper: {
    width: "100%",
  },
  input: {
    marginTop: 20,
  },
  submitButton: {
    textAlign: "center",
  },
});

type Options = {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
};

const enum Location {
  Any,
  Preffered,
}

const AddRefugeeForm = () => {
  const { t } = useTranslation();

  const refugeesCountOptions: Options[] = useMemo(
    () => [
      { label: t("refugeeForm.refugeesCountOptions.alone"), value: 1 },
      { label: "1", value: 2 },
      { label: "2", value: 3 },
      { label: "3", value: 4 },
      { label: t("refugeeForm.refugeesCountOptions.more"), value: 5 },
    ],
    [t]
  );

  const refugeeDetailsOptions: Options[] = useMemo(
    () => [
      {
        value: "animals",
        label: t("refugeeForm.refugeeDetailsOptions.animals"),
        icon: <AnimalsIcon width="30" height="25" />,
      },
      {
        value: "toddler",
        label: t("refugeeForm.refugeeDetailsOptions.toddler"),
        icon: <KidsIcon width="26" height="25" />,
      },
      {
        value: "oldPerson",
        label: t("refugeeForm.refugeeDetailsOptions.oldPerson"),
        icon: <FoodIcon width="26" height="25" />,
      },
      {
        value: "disability",
        label: t("refugeeForm.refugeeDetailsOptions.disability"),
        icon: <DisabilityIcon width="26" height="25" />,
      },
    ],
    [t]
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      refugeesCount: 1,
      city: "",
      refugeesAnimal: "",
      isGDPRAccepted: false,
      refugeesDetails: {
        animals: false,
        toddler: false,
        oldPerson: false,
        disability: false,
      },
    },
  });

  const [location, setLocation] = useState<Location>(Location.Any);

  const refugeesCount = useWatch({
    control,
    name: "refugeesCount",
  });

  const refugeesInfoArray = useMemo(
    () => [...Array(refugeesCount - 1).keys()],
    [refugeesCount]
  );

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      style={styles.containerWraper}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <CompositionSection padding={[35, 30, 8, 30]}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputControl>
                <Input
                  placeholder={t("refugeeForm.labels.name")}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.name}
                />
                {errors.name && (
                  <Text style={styles.error}>
                    {t("refugeeForm.errors.name")}
                  </Text>
                )}
              </InputControl>
            )}
            name="name"
          />

          <Controller
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: t("refugeeForm.errors.email"),
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputControl>
                <Input
                  placeholder={t("refugeeForm.labels.email")}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.email}
                />
                {errors.email && (
                  <Text style={styles.error}>
                    {t("refugeeForm.errors.email")}
                  </Text>
                )}
              </InputControl>
            )}
            name="email"
          />
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                message: t("refugeeForm.errors.phone"),
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputControl>
                <Input
                  placeholder={t("refugeeForm.labels.phone")}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.phone}
                />
                {errors.phone && (
                  <Text style={styles.error}>
                    {t("refugeeForm.errors.phone")}
                  </Text>
                )}
              </InputControl>
            )}
            name="phone"
          />
        </CompositionSection>
        <CompositionSection backgroundColor="#F5F4F4" padding={[35, 30, 0, 30]}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value: fieldValue } }) => (
              <InputControl>
                <InputCotrolLabel>
                  {t("refugeeForm.labels.refugeesCount")}
                </InputCotrolLabel>
                <RadioButtons>
                  {refugeesCountOptions.map(({ value, label }) => (
                    <ChoiceButton
                      key={value}
                      text={label}
                      isSmall
                      onPress={() => onChange(value)}
                      isSelected={fieldValue === value}
                    />
                  ))}
                </RadioButtons>
              </InputControl>
            )}
            name="refugeesCount"
          />
          {refugeesCount > 1 &&
            refugeesInfoArray.map((_, index) => (
              <Controller
                key={index}
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputControl>
                    <Input
                      placeholder={t("refugeeForm.labels.refugee", {
                        number: index + 1,
                      })}
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      error={errors[`refugee${index + 1}`]}
                    />
                    {errors.email && (
                      <Text style={styles.error}>
                        {t("refugeeForm.errors.required")}
                      </Text>
                    )}
                  </InputControl>
                )}
                //@ts-ignore
                name={`refugee${index + 1}`}
              />
            ))}
          <InputControl>
            <InputCotrolLabel>
              {t("refugeeForm.labels.location")}
            </InputCotrolLabel>
            <RadioButtons>
              <ChoiceButton
                text={t("refugeeForm.labels.anyLocation")}
                isSmall
                onPress={() => setLocation(Location.Any)}
                isSelected={location === Location.Any}
              />
              <ChoiceButton
                text={t("refugeeForm.labels.prefferedLocation")}
                isSmall
                onPress={() => setLocation(Location.Preffered)}
                isSelected={location === Location.Preffered}
              />
            </RadioButtons>
            {location === Location.Preffered && (
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder={t("refugeeForm.labels.anyLocation")}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    error={errors.city}
                  />
                )}
                name="city"
              />
            )}
          </InputControl>
        </CompositionSection>

        <CompositionSection padding={[35, 30, 8, 30]}>
          <Controller
            control={control}
            render={({ field: { onChange, value: fieldValue } }) => (
              <InputControl>
                <InputCotrolLabel>
                  {t("refugeeForm.labels.refugeeDetails")}
                </InputCotrolLabel>
                {refugeeDetailsOptions.map(({ value, label, icon }) => {
                  return (
                    <View key={value}>
                      <ChoiceButton
                        text={label}
                        isSmall
                        onPress={() =>
                          onChange({
                            ...fieldValue,
                            [value]: !fieldValue[value],
                          })
                        }
                        isSelected={fieldValue[value]}
                        icon={icon}
                      />
                      {value === "animals" && fieldValue.animals && (
                        <Controller
                          control={control}
                          render={({ field: { onChange, onBlur, value } }) => (
                            <InputControl>
                              <Input
                                placeholder={t(
                                  "refugeeForm.labels.refugeesAnimal"
                                )}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                              />
                            </InputControl>
                          )}
                          name="refugeesAnimal"
                        />
                      )}
                    </View>
                  );
                })}
              </InputControl>
            )}
            name="refugeesDetails"
          />

          <InputControl>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <CheckboxField
                  text={t("refugeeForm.labels.isGDPRAccepted")}
                  isChecked={value}
                  onChange={onChange}
                />
              )}
              name="isGDPRAccepted"
            />
            <ButtonCta
              style={styles.submitButton}
              onPress={handleSubmit(onSubmit)}
              anchor={t("refugeeForm.labels.submitButton")}
            />
          </InputControl>
        </CompositionSection>
      </form>
    </ScrollView>
  );
};

export default AddRefugeeForm;
