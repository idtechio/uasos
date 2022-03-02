import { ScrollView, TouchableOpacity } from "react-native";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { useState, useMemo } from "react";
import { useTranslation } from "next-i18next";

import { CompositionSection } from "../Compositions";
import {
  ChoiceButton,
  InputControl,
  InputCotrolLabel,
  RadioButtons,
} from "../Forms";
import { ButtonCta } from "../Buttons";
import AnimalsIcon from "../../style/svgs/animals.svg";
import DisabilityIcon from "../../style/svgs/disability.svg";
import CrossIcon from "../../style/svgs/cross.svg";
import ElderIcon from "../../style/svgs/elder.svg";
import FormTextInput from "../Inputs/FormTextInput";
import KidsIcon from "../../style/svgs/kids.svg";
import { FormKey, FormType } from "../../helpers/FormTypes";
import FormRadioGroup from "../Inputs/FormRadioGroup";
import FormCheckbox from "../Inputs/FormCheckbox";
import FormButtonsVertical, { Data } from "../Inputs/FormButtonsVertcal";
import { ThankfulnessModal } from "../ThankfulnessModal";

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

  const refugeeDetailsOptions: Data[] = useMemo(
    () => [
      {
        id: "refugee.preferences.peopleDetails.animals",
        label: t("refugeeForm.refugeeDetailsOptions.animals"),
        icon: <AnimalsIcon width="30" height="25" />,
        extra: (
          <FormTextInput
            name="refugee.preferences.animal"
            label={t("refugeeForm.labels.refugeesAnimal")}
          />
        ),
      },
      {
        id: "refugee.preferences.peopleDetails.toddler",
        label: t("refugeeForm.refugeeDetailsOptions.toddler"),
        icon: <KidsIcon width="26" height="25" />,
      },
      {
        id: "refugee.preferences.peopleDetails.oldPerson",
        label: t("refugeeForm.refugeeDetailsOptions.oldPerson"),
        icon: <ElderIcon width="26" height="25" />,
      },
      {
        id: "refugee.preferences.peopleDetails.disability",
        label: t("refugeeForm.refugeeDetailsOptions.disability"),
        icon: <DisabilityIcon width="26" height="25" />,
      },
    ],
    [t]
  );

  const formFields = useForm<FormType>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formFields;

  const [location, setLocation] = useState<Location>(Location.Any);

  const { fields, append, remove } = useFieldArray({
    control,
    //@ts-ignore
    name: "refugee.preferences.people" as unknown as FormKey,
  });

  const [showModal, setShowModal] = useState(false);

  const onSubmit = (data: FormType) => {
    console.log(data);
    fetch("/api/guests/add", {
      method: "post",
      body: JSON.stringify({
        name: data.refugee.core.name,
        phone_num: data.refugee.core.phoneNumber,
        status: 1,
        email: data.refugee.core.email,
        city: data.refugee.core.location,
        children_allowed: data.refugee.preferences.peopleDetails.toddler,
        pet_allowed: data.refugee.preferences.peopleDetails.animals,
        handicapped_allowed: data.refugee.preferences.peopleDetails.disability,
        num_people: data.refugee.preferences.peopleQuantity,
        period: data.refugee.preferences.forHowLong,
      }),
    }).then(function (res) {
      if (res.status === 200) {
        setShowModal(true);
      }
      return console.log();
    });
  };

  const onError = (error) => {
    console.log("error:", error);
  };

  return (
    <FormProvider {...formFields}>
      {showModal ? (
        <ThankfulnessModal />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
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
          </CompositionSection>
          <CompositionSection
            backgroundColor="#F5F4F4"
            padding={[35, 30, 0, 30]}
          >
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
                  rules={{
                    required: true,
                    pattern: {
                      value: /\S{3,30}/,
                      message: t("refugeeForm.errors.required"),
                    },
                  }}
                  labelsBackgroundColor="#F5F4F4"
                  name={`refugee.preferences.people.refugee${index}`}
                  label={t("refugeeForm.labels.refugee", {
                    number: index + 1,
                  })}
                  error={
                    errors.refugee?.preferences?.people?.[`refugee${index}`]
                  }
                  errorMsg={t("refugeeForm.errors.required")}
                  extra={
                    <TouchableOpacity onPress={() => remove(index)}>
                      <CrossIcon width="25" height="25" />
                    </TouchableOpacity>
                  }
                />
              ))}
              <ButtonCta
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
                  labelsBackgroundColor="#F5F4F4"
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
            <FormButtonsVertical
              label={t("refugeeForm.labels.refugeeDetails")}
              data={refugeeDetailsOptions}
            />
            <FormCheckbox
              rules={{
                required: true,
              }}
              error={errors?.refugee?.isGDPRAccepted}
              errorMsg={t("refugeeForm.errors.required")}
              name="refugee.isGDPRAccepted"
              label={t("refugeeForm.labels.isGDPRAccepted")}
            />
            <InputControl>
              <ButtonCta
                onPress={handleSubmit(onSubmit, onError)}
                anchor={t("refugeeForm.labels.submitButton")}
              />
            </InputControl>
          </CompositionSection>
        </ScrollView>
      )}
    </FormProvider>
  );
};

export default AddRefugeeForm;
