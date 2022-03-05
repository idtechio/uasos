import React, { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ScrollView, StyleSheet } from "react-native";
import { FormType } from "../../helpers/FormTypes";
import { ButtonCta } from "../Buttons";
import FormDropdown from "../Inputs/FormDropdown";
import { CompositionSection } from "../Compositions";
import {
  InputControl,
  InputCotrolLabel,
  ChoiceButton,
  RadioButtons,
} from "../Forms";
import FormNumericInput from "../Inputs/FormNumericInput";
import FormRadioGroup from "../Inputs/FormRadioGroup";
import FormTextInput from "../Inputs/FormTextInput";
import FormButtonsVertical, { Data } from "../Inputs/FormButtonsVertcal";
import AnimalsIcon from "../../style/svgs/animals.svg";
import KidsIcon from "../../style/svgs/kids.svg";
import ElderIcon from "../../style/svgs/elder.svg";
import DisabilityIcon from "../../style/svgs/disability.svg";
import PregnantIcon from "../../style/svgs/pregnant.svg";
import AdGuestToApi from "../../helpers/AdGuestToApi";
import { Boolean } from "../../../pages/api/guests/add";

const enum Location {
  Any,
  Preffered,
}

export default function FormAdGuest() {
  const { t } = useTranslation();

  const formFields = useForm<FormType>({
    defaultValues: {
      advancedRefugee: {
        fullBedCount: 1,
        childBedCount: 0,
        age: 18,
      },
    },
  });

  const [location, setLocation] = useState<Location>(Location.Any);

  const refugeeDetailsOptions: Data[] = useMemo(
    () => [
      {
        id: "advancedRefugee.preferences.peopleDetails.animals",
        label: t("refugeeForm.refugeeDetailsOptions.animals"),
        icon: <AnimalsIcon width="30" height="25" />,
        extra: (
          <FormTextInput
            name="advancedRefugee.preferences.animal"
            label={t("refugeeForm.labels.refugeesAnimal")}
          />
        ),
      },
      {
        id: "advancedRefugee.preferences.peopleDetails.pregnant",
        label: t("refugeeForm.refugeeDetailsOptions.pregnant"),
        icon: <PregnantIcon width="26" height="25" />,
      },
      {
        id: "advancedRefugee.preferences.peopleDetails.toddler",
        label: t("refugeeForm.refugeeDetailsOptions.toddler"),
        icon: <KidsIcon width="26" height="25" />,
      },
      {
        id: "advancedRefugee.preferences.peopleDetails.oldPerson",
        label: t("refugeeForm.refugeeDetailsOptions.oldPerson"),
        icon: <ElderIcon width="26" height="25" />,
      },
      {
        id: "advancedRefugee.preferences.peopleDetails.disability",
        label: t("refugeeForm.refugeeDetailsOptions.disability"),
        icon: <DisabilityIcon width="26" height="25" />,
      },
    ],
    [t]
  );

  const {
    handleSubmit,
    formState: { errors },
  } = formFields;

  const onSubmit = (data) => {
    const guest = data.advancedRefugee;
    console.log(guest);

    AdGuestToApi({
      name: guest.name,
      country: guest.country,
      phone_num: guest.phoneNumber,
      email: guest.email,
      city: guest.town,
      is_children: guest.preferences.peopleDetails.toddler
        ? Boolean.TRUE
        : Boolean.FALSE,
      is_pet: guest.preferences.peopleDetails.animals
        ? Boolean.TRUE
        : Boolean.FALSE,
      is_handicapped: guest.preferences.peopleDetails.disability
        ? Boolean.TRUE
        : Boolean.TRUE,
      num_people: guest.fullBedCount + guest.childBedCount,
      period: guest.overnightDuration,
      listing_country: "poland",
      acceptable_shelter_types: guest.accommodationType,
      beds: guest.fullBedCount,
      is_pregnant: guest.preferences.peopleDetails.pregnant
        ? Boolean.TRUE
        : Boolean.TRUE,
      is_with_disability: guest.preferences.peopleDetails.disability
        ? Boolean.TRUE
        : Boolean.TRUE,
      is_with_animal: guest.preferences.peopleDetails.animals
        ? Boolean.TRUE
        : Boolean.TRUE,
      is_with_elderly: guest.preferences.peopleDetails.oldPerson
        ? Boolean.TRUE
        : Boolean.TRUE,
      is_ukrainian_nationality:
        guest.nationality === "ukraine" ? Boolean.TRUE : Boolean.TRUE,
    });
  };

  const onError = (error) => {
    console.log("error:", error);
  };

  const GROUP_RELATIONS = [
    { label: t("staticValues.groupRelations.single_man"), value: "single_man" },
    {
      label: t("staticValues.groupRelations.single_woman"),
      value: "single_woman",
    },
    { label: t("staticValues.groupRelations.spouses"), value: "spouses" },
    {
      label: t("staticValues.groupRelations.mother_with_children"),
      value: "mother_with_children",
    },
    {
      label: t("staticValues.groupRelations.family_with_children"),
      value: "family_with_children",
    },
    {
      label: t("staticValues.groupRelations.unrelated_group"),
      value: "unrelated_group",
    },
  ];

  const ACCOMMODATION_TYPES = [
    { label: t("staticValues.accommodationTypes.bed"), value: "bed" },
    { label: t("staticValues.accommodationTypes.room"), value: "room" },
    { label: t("staticValues.accommodationTypes.flat"), value: "flat" },
    { label: t("staticValues.accommodationTypes.house"), value: "house" },
    {
      label: t("staticValues.accommodationTypes.public_shared_space"),
      value: "public_shared_space",
    },
  ];

  const OVERNIGHT_DURATION_TYPES = [
    {
      label: t("staticValues.timePeriod.lessThanAWeek"),
      value: 10,
    },
    { label: t("staticValues.timePeriod.week"), value: 20 },
    {
      label: t("staticValues.timePeriod.twoWeeks"),
      value: 30,
    },
    { label: t("staticValues.timePeriod.month"), value: 40 },
    { label: t("staticValues.timePeriod.longer"), value: 50 },
  ];

  const DUMMY_DROPDOWN_ITEMS = [
    { label: "Item 1", value: "Item 1" },
    { label: "Item 2", value: "Item 2" },
    { label: "Item 3", value: "Item 3" },
    { label: "Item 4", value: "Item 4" },
    { label: "Item 5", value: "Item 5" },
    { label: "Item 6", value: "Item 6" },
    { label: "Item 7", value: "Item 7" },
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
              errorMsg={t("refugeeAddForm.errors.name")}
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
              errorMsg={t("refugeeAddForm.errors.email")}
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
              error={errors?.advancedRefugee?.phoneNumber}
              errorMsg={t("refugeeAddForm.errors.phoneNumber")}
            />
          </InputControl>
        </CompositionSection>
        <CompositionSection
          zIndex={5}
          padding={[35, 30, 8, 30]}
          header={t("refugeeAddForm.placeOfRefuge")}
          backgroundColor="#F5F4F4"
        >
          <InputControl zIndex={13}>
            <InputCotrolLabel>
              {t("refugeeAddForm.countryOfRefugeLabel")}
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
          </InputControl>

          {location === Location.Preffered && (
            <InputControl>
              {/* <InputCotrolLabel>{t("hostAdd.country")}</InputCotrolLabel>
              <FormDropdown
                zIndex={14}
                data={[{ label: t("hostAdd.countries.poland"), value: "poland" }]}
                placeholder={t("hostAdd.country")}
                name="refugeeAddForm.country"
                rules={{
                  required: true,
                }}
                error={errors?.advancedHost?.country}
                errorMsg={t("hostAdd.errors.country")}
              /> */}
              <InputCotrolLabel>{t("hostAdd.town")}</InputCotrolLabel>
              <FormDropdown
                zIndex={13}
                data={DUMMY_DROPDOWN_ITEMS} // todo: google places api
                name="advancedRefugee.town"
                placeholder={t("hostAdd.town")}
                rules={{
                  required: true,
                }}
                error={errors?.advancedHost?.town}
                errorMsg={t("validations.requiredTown")}
              />
            </InputControl>
          )}
          <InputControl>
            <InputCotrolLabel>
              {t("refugeeAddForm.overnightDurationLabel")}
            </InputCotrolLabel>
            <FormRadioGroup<string | string>
              name="advancedRefugee.overnightDuration"
              rules={{
                required: true,
              }}
              data={OVERNIGHT_DURATION_TYPES}
              error={errors?.advancedRefugee?.overnightDuration}
              errorMsg={t("refugeeAddForm.errors.overnightDuration")}
            />
          </InputControl>
        </CompositionSection>
        {/* TODO: Image Picker usage here */}
        {/* <CompositionSection
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
        </CompositionSection> */}
        {/* <CompositionSection
          padding={[35, 30, 8, 30]}
          zIndex={3}
          backgroundColor="#F5F4F4"
          header={t("refugeeAddForm.accompanyingPerson")}
        >
          <InputControl>
            <InputCotrolLabel>
              {t("refugeeAddForm.genderLabel")}
            </InputCotrolLabel>
            <FormTextInput
              name="advancedRefugee.gender"
              label={t("refugeeAddForm.genderPlaceholder")}
              rules={{
                required: true,
              }}
              error={errors?.advancedRefugee?.gender}
              errorMsg={t("refugeeAddForm.errors.gender")}
            />
          </InputControl>
          <InputControl>
            <InputCotrolLabel>{t("refugeeAddForm.ageLabel")}</InputCotrolLabel>
            <FormNumericInput
              name="advancedRefugee.age"
              rules={{
                required: true,
              }}
              min={0}
              max={150}
              error={errors?.advancedRefugee?.childBedCount}
              errorMsg={t("hostAdd.errors.childBedCount")}
            />
          </InputControl>
        </CompositionSection> */}
        <CompositionSection
          zIndex={2}
          padding={[35, 30, 8, 30]}
          header={t("hostAdd.additionalInformationHeader")}
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
              error={errors?.advancedRefugee?.groupRelations}
              errorMsg={t("refugeeAddForm.errors.groupRelations")}
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
              multiSelect
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
              error={errors?.advancedRefugee?.nationality}
              errorMsg={t("refugeeAddForm.errors.accommodationType")}
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
              onPress={handleSubmit(onSubmit, onError)}
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
