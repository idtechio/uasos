import React, { useState, useMemo } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FormType } from "../../helpers/FormTypes";
import { ButtonCta } from "../Buttons";

import { CompositionSection } from "../Compositions";
import { ChoiceButton, InputControl, InputCotrolLabel } from "../Forms";
import FormNumericInput from "../Inputs/FormNumericInput";
import FormRadioGroup from "../Inputs/FormRadioGroup";
import FormTextInput from "../Inputs/FormTextInput";
import FormButtonsVertical, { Data } from "../Inputs/FormButtonsVertcal";
import AnimalsIcon from "../../style/svgs/animals.svg";
import KidsIcon from "../../style/svgs/kids.svg";
import ElderIcon from "../../style/svgs/elder.svg";
import DisabilityIcon from "../../style/svgs/disability.svg";
import PregnantIcon from "../../style/svgs/account.svg";

export default function AddAccommodationAdvancedForm() {
  const { t } = useTranslation();

  const formFields = useForm<FormType>({
    defaultValues: {
      advancedHost: {
        fullBedCount: 0,
        childBedCount: 0,
        accommodationTime: 0,
      },
    },
  });

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
        id: "refugee.preferences.peopleDetails.pregnant",
        label: t("refugeeForm.refugeeDetailsOptions.pregnant"),
        icon: <PregnantIcon width="26" height="25" />,
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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formFields;

  const onSubmit = (data) => {
    // TODO: implement
    console.log("Handle submit", data);
  };

  return (
    <FormProvider {...formFields}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        style={styles.containerWraper}
      >
        <CompositionSection
          padding={[35, 30, 8, 30]}
          header={t("refugeeAddForm.basicInfoHeader")}
        >
          <InputCotrolLabel>
            {t("refugeeAddForm.firstnameLabel")}
          </InputCotrolLabel>
          <FormTextInput
            name="refugeeAddForm.firstnamePlaceholder"
            label={t("refugeeAddForm.firstnamePlaceholder")}
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.country}
            errorMsg={t("validations.requiredName")}
          />
          <InputCotrolLabel>{t("refugeeAddForm.emailLabel")}</InputCotrolLabel>
          <FormTextInput
            name="refugeeAddForm.emailPlaceholder"
            label={t("refugeeAddForm.emailPlaceholder")}
            rules={{
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: t("validations.invalidEmail"),
              },
            }}
            error={errors?.advancedHost?.town}
            errorMsg={t("validations.invalidEmail")}
          />
        </CompositionSection>
        <CompositionSection
          padding={[35, 30, 8, 30]}
          header={t("refugeeAddForm.placeOfRefuge")}
        >
          <InputCotrolLabel>
            {t("refugeeAddForm.countryOfRefuge")}
          </InputCotrolLabel>
          <FormTextInput
            name="refugeeAddForm.country"
            label={t("refugeeAddForm.countryOfRefugPlaceholder")}
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.country}
            errorMsg={t("hostAdd.errors.rcountry")}
          />
          <InputCotrolLabel>
            {t("refugeeAddForm.cityOfRefuge")}
          </InputCotrolLabel>
          <FormTextInput
            name="refugeeAddForm.country"
            label={t("refugeeAddForm.cityOfRefugePlaceholder")}
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.country}
            errorMsg={t("hostAdd.errors.rcountry")}
          />
        </CompositionSection>
        {/* TODO: Image Picker usage here */}
        <CompositionSection
          padding={[35, 30, 8, 30]}
          backgroundColor="#F5F4F4"
          header={t("refugeeAddForm.travelCompanions")}
        >
          <InputCotrolLabel>{t("hostAdd.fullBedCount")}</InputCotrolLabel>
          <FormNumericInput
            name="refugeeAddForm.fullBedCount"
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.fullBedCount}
            errorMsg={t("hostAdd.errors.fullBedCount")}
          />
          <InputCotrolLabel>{t("hostAdd.childBedCount")}</InputCotrolLabel>
          <FormNumericInput
            name="refugeeAddForm.childBedCount"
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.childBedCount}
            errorMsg={t("hostAdd.errors.childBedCount")}
          />
        </CompositionSection>
        <CompositionSection
          padding={[35, 30, 8, 30]}
          backgroundColor="#F5F4F4"
          header={t("refugeeAddForm.accompanyingPerson")}
        >
          <InputCotrolLabel>{t("refugeeAddForm.sexLabel")}</InputCotrolLabel>
          <FormTextInput
            name="refugeeAddForm.sex"
            label={t("refugeeAddForm.sexPlaceholder")}
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.fullBedCount}
            errorMsg={t("hostAdd.errors.fullBedCount")}
          />
          <InputCotrolLabel>{t("refugeeAddForm.ageLabel")}</InputCotrolLabel>
          <FormNumericInput
            name="refugeeAddForm.ageLabel"
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.childBedCount}
            errorMsg={t("hostAdd.errors.childBedCount")}
          />
        </CompositionSection>
        <CompositionSection
          padding={[35, 30, 8, 30]}
          header={t("hostAdd.additionalInformationHeader")}
        >
          <FormButtonsVertical
            label={t("refugeeForm.labels.refugeeDetails")}
            data={refugeeDetailsOptions}
          />
        </CompositionSection>

        <InputCotrolLabel>{t("hostAdd.nationality")}</InputCotrolLabel>
        <FormRadioGroup<string | string>
          name="refugeeAddForm.nationality"
          rules={{
            required: true,
          }}
          data={[
            { label: t("hostAdd.ukraine"), value: "ukraine" },
            { label: t("hostAdd.any"), value: "any" },
          ]}
          errorMsg={t("validations.nationalityError")}
        />
        <InputCotrolLabel>
          {t("refugeeAddForm.groupRelations")}
        </InputCotrolLabel>
        <FormTextInput
          name="refugeeAddForm.groupRelations"
          label={t("refugeeAddForm.selectPlaceholder")}
          rules={{
            required: true,
          }}
          error={errors?.advancedHost?.groupsTypes}
          errorMsg={t("hostAdd.errors.groupsTypes")}
        />
        <InputCotrolLabel>
          {t("refugeeAddForm.accommodationType")}
        </InputCotrolLabel>
        <FormTextInput
          name="refugeeAddForm.accommodationType"
          label={t("refugeeAddForm.accommodationType")}
          rules={{
            required: true,
          }}
          error={errors?.advancedHost?.groupsTypes}
          errorMsg={t("hostAdd.errors.groupsTypes")}
        />

        <CompositionSection padding={[35, 30, 8, 30]} backgroundColor="#F5F4F4">
          <InputControl>
            <ButtonCta
              onPress={handleSubmit(onSubmit)}
              anchor={t("refugeeAddForm.addButton")}
            />
          </InputControl>
        </CompositionSection>
      </ScrollView>
    </FormProvider>
  );
}

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
});
