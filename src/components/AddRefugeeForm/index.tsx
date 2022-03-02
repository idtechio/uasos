import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useForm,
  Controller,
  FormProvider,
  useFieldArray,
} from "react-hook-form";
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
import CheckboxField from "../Forms/CheckboxField";
import DisabilityIcon from "../../style/svgs/disability.svg";
import CrossIcon from "../../style/svgs/cross.svg";
import FoodIcon from "../../style/svgs/food.svg";
import FormTextInput from "../Inputs/FormTextInput";
import KidsIcon from "../../style/svgs/kids.svg";
import { FormType } from "./types";
import FormRadioGroup from "../Inputs/FormRadioGroup";

const styles = StyleSheet.create({
  button: {
    textAlign: "center",
  },
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

  greyLabel: {
    backgroundColor: "#F5F4F4",
  },
  input: {
    marginTop: 20,
  },
});

const enum Location {
  Any,
  Preffered,
}

const AddRefugeeForm = () => {
  const { t } = useTranslation();

  const refugeesCountOptions = useMemo(
    () => [
      { label: t("refugeeForm.refugeesCountOptions.alone"), value: "1" },
      { label: "1", value: "2" },
      { label: "2", value: "3" },
      { label: "3", value: "4" },
      { label: t("refugeeForm.refugeesCountOptions.more"), value: "5" },
    ],
    [t]
  );

  const refugeeDetailsOptions = useMemo(
    () => [
      {
        id: "animals",
        label: t("refugeeForm.refugeeDetailsOptions.animals"),
        icon: <AnimalsIcon width="30" height="25" />,
      },
      {
        id: "toddler",
        label: t("refugeeForm.refugeeDetailsOptions.toddler"),
        icon: <KidsIcon width="26" height="25" />,
      },
      {
        id: "oldPerson",
        label: t("refugeeForm.refugeeDetailsOptions.oldPerson"),
        icon: <FoodIcon width="26" height="25" />,
      },
      {
        id: "disability",
        label: t("refugeeForm.refugeeDetailsOptions.disability"),
        icon: <DisabilityIcon width="26" height="25" />,
      },
    ],
    [t]
  );

  const formFields = useForm<FormType>({
    defaultValues: {
      refugee: {
        core: {
          name: "",
          email: "",
          phoneNumber: "",
          location: "",
        },
        preferences: {
          peopleQuantity: "1",
          animal: "",
          people: [],
          peopleDetails: {
            animals: false,
            toddler: false,
            oldPerson: false,
            disability: false,
          },
        },
      },
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formFields;

  const [location, setLocation] = useState<Location>(Location.Any);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "refugee.preferences.people",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...formFields}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        style={styles.containerWraper}
      >
        <CompositionSection padding={[35, 30, 8, 30]}>
          <FormTextInput
            name="refugee.core.name"
            label={t("refugeeForm.labels.name")}
            rules={{
              required: true,
            }}
            error={errors?.refugee?.core?.name}
            errorMsg={t("refugeeForm.errors.name")}
          />
          <FormTextInput
            name="refugee.core.email"
            label={t("refugeeForm.labels.email")}
            rules={{
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: t("refugeeForm.errors.email"),
              },
            }}
            error={errors?.refugee?.core?.email}
            errorMsg={t("refugeeForm.errors.email")}
          />

          <FormTextInput
            name="refugee.core.phoneNumber"
            label={t("refugeeForm.labels.phoneNumber")}
            rules={{
              required: true,
              pattern: {
                value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                message: t("refugeeForm.errors.phoneNumber"),
              },
            }}
            error={errors?.refugee?.core?.phoneNumber}
            errorMsg={t("refugeeForm.errors.phoneNumber")}
          />
        </CompositionSection>
        <CompositionSection backgroundColor="#F5F4F4" padding={[35, 30, 0, 30]}>
          <InputControl>
            <InputCotrolLabel>
              {t("refugeeForm.labels.refugeesCount")}
            </InputCotrolLabel>

            <FormRadioGroup<string | number>
              name="refugee.preferences.peopleQuantity"
              rules={{
                required: true,
              }}
              data={refugeesCountOptions}
              errorMsg={t("validations.requiredPeopleQuantity")}
            />

            <InputCotrolLabel>
              {t("refugeeForm.labels.refugeeDetails")}
            </InputCotrolLabel>
            {fields.map((_, index) => (
              <FormTextInput
                key={index}
                labelsStyle={styles.greyLabel}
                name={`refugee.preferences.people.${index}`}
                label={t("refugeeForm.labels.refugee", {
                  number: index + 1,
                })}
                rules={{
                  required: true,
                }}
                error={errors.refugee?.preferences?.[`refugee${index}`]}
                errorMsg={t("refugeeForm.errors.required")}
                extra={
                  <TouchableOpacity onPress={() => remove(index)}>
                    <CrossIcon width="25" height="25" />
                  </TouchableOpacity>
                }
              />
            ))}
            <ButtonCta
              style={styles.button}
              anchor={t("refugeeForm.labels.addRefugee")}
              onPress={() => append("")}
            />
          </InputControl>

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
              <FormTextInput
                name="refugee.core.location"
                label={t("refugeeForm.labels.city")}
                labelsStyle={styles.greyLabel}
                rules={{
                  required: true,
                }}
                error={errors?.refugee?.core?.location}
                errorMsg={t("refugeeForm.errors.location")}
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
                {refugeeDetailsOptions.map(({ id, label, icon }) => {
                  return (
                    <View key={id}>
                      <ChoiceButton
                        text={label}
                        isSmall
                        isVertical
                        onPress={() =>
                          onChange({
                            ...fieldValue,
                            [id]: !fieldValue[id],
                          })
                        }
                        isSelected={fieldValue[id]}
                        icon={icon}
                      />
                      {id === "animals" && fieldValue.animals && (
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
                          name="refugee.preferences.animal"
                        />
                      )}
                    </View>
                  );
                })}
              </InputControl>
            )}
            name="refugee.preferences.peopleDetails"
          />

          <InputControl>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <CheckboxField
                  text={t("refugeeForm.labels.isGDPRAccepted")}
                  isChecked={value}
                  onChange={onChange}
                />
              )}
              name="refugee.isGDPRAccepted"
            />
            <ButtonCta
              style={styles.button}
              onPress={handleSubmit(onSubmit)}
              anchor={t("refugeeForm.labels.submitButton")}
            />
          </InputControl>
        </CompositionSection>
      </ScrollView>
    </FormProvider>
  );
};

export default AddRefugeeForm;
