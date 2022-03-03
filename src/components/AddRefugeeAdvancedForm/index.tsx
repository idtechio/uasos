import React, { useState, useMemo } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FormType } from "../../helpers/FormTypes";
import { ButtonCta } from "../Buttons";

import FormDropdown from "../Inputs/FormDropdown";
import FormCityDropdown from "../Inputs/FormCityDropdown";
import FormCountryDropdown from "../Inputs/FormCountryDropdown";
import { CompositionSection } from "../Compositions";
import { InputControl, InputCotrolLabel } from "../Forms";
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
      advancedRefugee: {
        fullBedCount: 0,
        childBedCount: 0,
        age: 0,
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

  const GROUP_RELATIONS = [
    { label: "Singiel", value: "single_man" },
    { label: "Singielka", value: "single_woman" },
    { label: "Małżonkowie", value: "spouses" },
    { label: "Rodzina z dziećmi", value: "family_with_children" },
    { label: "Niepowiązana grupa", value: "unrelated_group" },
  ];

  const ACCOMMODATION_TYPES = [
    { label: "Łóźko w współdzielonym pokoju", value: "1" },
    { label: "Pokój w współdzielonym mieszkaniu/domu", value: "2" },
    { label: "Mieszkanie na wyłączność", value: "3" },
    { label: "Dom na wyłączność", value: "4" },
    { label: "Pokój zbiorowy (np. szkolna sala)", value: "5" },
  ];

  return (
    <FormProvider {...formFields}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        style={styles.containerWraper}
      >
        <CompositionSection
          padding={[35, 30, 8, 30]}
          zIndex={6}
          header={t("refugeeAddForm.basicInfoHeader")}
        >
          <InputControl>
            <InputCotrolLabel>{t("refugeeAddForm.nameLabel")}</InputCotrolLabel>
            <FormTextInput
              name="advancedRefugee.name"
              label={t("refugeeAddForm.namePlaceholder")}
              rules={{
                required: true,
              }}
              error={errors?.advancedRefugee?.name}
              errorMsg={t("validations.requiredName")}
            />
          </InputControl>
          <InputControl>
            <InputCotrolLabel>
              {t("refugeeAddForm.emailLabel")}
            </InputCotrolLabel>
            <FormTextInput
              name="advancedRefugee.email"
              label={t("refugeeAddForm.emailPlaceholder")}
              rules={{
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: t("validations.invalidEmail"),
                },
              }}
              error={errors?.advancedRefugee?.email}
              errorMsg={t("validations.invalidEmail")}
            />
          </InputControl>
          <InputControl>
            <FormTextInput
              name="advancedRefugee.phoneNumber"
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
          </InputControl>
        </CompositionSection>
        <CompositionSection
          zIndex={5}
          padding={[35, 30, 8, 30]}
          header={t("refugeeAddForm.placeOfRefuge")}
        >
          <InputControl zIndex={13}>
            <InputCotrolLabel>
              {t("refugeeAddForm.countryOfRefugeLabel")}
            </InputCotrolLabel>
            <FormCountryDropdown
              name="advancedRefugee.country"
              placeholder={t("refugeeAddForm.countryOfRefugePlaceholder")}
              rules={{
                required: true,
              }}
              error={errors?.advancedRefugee?.country}
              errorMsg={t("hostAdd.errors.rcountry")}
            />
          </InputControl>
          <InputControl zIndex={12}>
            <InputCotrolLabel>
              {t("refugeeAddForm.cityOfRefugeLabel")}
            </InputCotrolLabel>
            <FormCityDropdown
              name="advancedRefugee.cityOfRefuge"
              placeholder={t("refugeeAddForm.cityOfRefugePlaceholder")}
              rules={{
                required: true,
              }}
              error={errors?.advancedRefugee?.cityOfRefuge}
              errorMsg={t("hostAdd.errors.cityOfRefuge")}
            />
          </InputControl>
          <InputControl>
            <InputCotrolLabel>
              {t("refugeeAddForm.overnightTimeLabel")}
            </InputCotrolLabel>
            <FormRadioGroup<string | string>
              name="advancedRefugee.nationality"
              rules={{
                required: true,
              }}
              data={[
                {
                  label: t("staticValues.timePeriod.lessThanAWeek"),
                  value: "lessThanAWeek",
                },
                { label: t("staticValues.timePeriod.week"), value: "week" },
                {
                  label: t("staticValues.timePeriod.twoWeeks"),
                  value: "twoWeeks",
                },
                { label: t("staticValues.timePeriod.month"), value: "month" },
                { label: t("staticValues.timePeriod.longer"), value: "longer" },
              ]}
              errorMsg={t("validations.nationalityError")}
            />
          </InputControl>
        </CompositionSection>
        {/* TODO: Image Picker usage here */}
        <CompositionSection
          padding={[35, 30, 8, 30]}
          zIndex={4}
          backgroundColor="#F5F4F4"
          header={t("refugeeAddForm.travelCompanions")}
        >
          <InputControl>
            <InputCotrolLabel>
              {t("refugeeAddForm.fullBedCountLabel")}
            </InputCotrolLabel>
            <FormNumericInput
              name="advancedRefugee.fullBedCount"
              rules={{
                required: true,
              }}
              error={errors?.advancedRefugee?.fullBedCount}
              errorMsg={t("refugeeAddForm.errors.fullBedCount")}
            />
          </InputControl>
          <InputControl>
            <InputCotrolLabel>
              {t("refugeeAddForm.childBedCountLabel")}
            </InputCotrolLabel>
            <FormNumericInput
              name="advancedRefugee.childBedCount"
              rules={{
                required: true,
              }}
              error={errors?.advancedRefugee?.childBedCount}
              errorMsg={t("refugeeAddForm.errors.childBedCount")}
            />
          </InputControl>
        </CompositionSection>
        <CompositionSection
          padding={[35, 30, 8, 30]}
          zIndex={3}
          backgroundColor="#F5F4F4"
          header={t("refugeeAddForm.accompanyingPerson")}
        >
          <InputControl>
            <InputCotrolLabel>{t("refugeeAddForm.sexLabel")}</InputCotrolLabel>
            <FormTextInput
              name="advancedRefugee.sex"
              label={t("refugeeAddForm.sexPlaceholder")}
              rules={{
                required: true,
              }}
              error={errors?.advancedRefugee?.fullBedCount}
              errorMsg={t("hostAdd.errors.fullBedCount")}
            />
          </InputControl>
          <InputControl>
            <InputCotrolLabel>{t("refugeeAddForm.ageLabel")}</InputCotrolLabel>
            <FormNumericInput
              name="advancedRefugee.age"
              rules={{
                required: true,
              }}
              error={errors?.advancedRefugee?.childBedCount}
              errorMsg={t("hostAdd.errors.childBedCount")}
            />
          </InputControl>
        </CompositionSection>
        <CompositionSection
          zIndex={2}
          padding={[35, 30, 8, 30]}
          header={t("hostAdd.additionalInformationHeader")}
        >
          <FormButtonsVertical
            label={t("refugeeForm.labels.refugeeDetails")}
            data={refugeeDetailsOptions}
          />
          <InputControl zIndex={11}>
            <InputCotrolLabel>
              {t("refugeeAddForm.groupRelations")}
            </InputCotrolLabel>
            <FormDropdown
              data={GROUP_RELATIONS}
              name="advancedRefugee.groupRelations"
              placeholder={t("refugeeAddForm.selectPlaceholder")}
              rules={{
                required: true,
              }}
              error={errors?.advancedRefugee?.groupsTypes}
              errorMsg={t("hostAdd.errors.groupsTypes")}
            />
          </InputControl>
          <InputControl zIndex={10}>
            <InputCotrolLabel>
              {t("refugeeAddForm.accommodationType")}
            </InputCotrolLabel>
            <FormDropdown
              data={ACCOMMODATION_TYPES}
              name="advancedRefugee.accommodationType"
              placeholder={t("refugeeAddForm.selectPlaceholder")}
              rules={{
                required: true,
              }}
              error={errors?.advancedRefugee?.accommodationType}
              errorMsg={t("refugeeAddForm.errors.accommodationType")}
            />
          </InputControl>

          <InputControl>
            <InputCotrolLabel>{t("hostAdd.nationality")}</InputCotrolLabel>
            <FormRadioGroup<string | string>
              name="advancedRefugee.nationality"
              rules={{
                required: true,
              }}
              data={[
                { label: t("hostAdd.ukraine"), value: "ukraine" },
                { label: t("hostAdd.any"), value: "any" },
              ]}
              errorMsg={t("validations.nationalityError")}
            />
          </InputControl>
        </CompositionSection>
        <CompositionSection
          zIndex={1}
          padding={[35, 30, 8, 30]}
          backgroundColor="#F5F4F4"
        >
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
