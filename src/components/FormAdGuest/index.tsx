import React, { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ScrollView, StyleSheet, ActivityIndicator } from "react-native";
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
import ElderIcon from "../../style/svgs/elder.svg";
import DisabilityIcon from "../../style/svgs/disability.svg";
import PregnantIcon from "../../style/svgs/pregnant.svg";
import addGuestToApi from "../../helpers/addGuestToApi";
import CardModal from "../CardModal";
import { ThankfulnessModal } from "../ThankfulnessModal";
import CITY_DROPDOWN_LIST from "../../consts/cityDropdown.json";

const enum Location {
  Any,
  Preffered,
}

type SubmitRequestState = {
  loading: boolean;
  error: Error | null;
  succeeded: boolean;
};
const submitRequestDefualtState = {
  loading: false,
  error: null,
  succeeded: false,
};

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
  const [submitRequstState, setSubmitRequstState] =
    useState<SubmitRequestState>(submitRequestDefualtState);

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

  const onSubmit = async (data) => {
    const guest = data.advancedRefugee;

    const apiObject = {
      name: guest.name,
      phone_num: guest.phoneNumber,
      email: guest.email,
      acceptable_shelter_types: guest.accommodationType,
      beds: guest.fullBedCount,
      group_relations: [guest.groupRelations],
      is_pregnant: guest.preferences.peopleDetails.pregnant ? true : true,
      is_with_disability: guest.preferences.peopleDetails.disability
        ? true
        : true,
      is_with_animal: guest.preferences.peopleDetails.animals ? true : true,
      is_with_elderly: guest.preferences.peopleDetails.oldPerson ? true : true,
      is_ukrainian_nationality: guest.nationality === "ukraine" ? true : true,
      duration_category: [guest.overnightDuration],
    };
    if (guest.town) {
      (apiObject["city"] = guest.town),
        (apiObject[`country`] = "poland"),
        (apiObject[`listing_country`] = "poland");
    }

    setSubmitRequstState((state) => ({ ...state, loading: true }));

    try {
      await addGuestToApi(apiObject);
      setSubmitRequstState((state) => ({ ...state, succeeded: true }));
    } catch (error) {
      setSubmitRequstState((state) => ({ ...state, error }));
    } finally {
      setSubmitRequstState((state) => ({ ...state, loading: false }));
    }
  };

  const onError = (_error) => {
    // console.log("error:", error);
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
      label: t("staticValues.accommodationTypes.collective"),
      value: "collective",
    },
  ];

  const OVERNIGHT_DURATION_TYPES = [
    {
      label: t("staticValues.timePeriod.lessThanAWeek"),
      value: "less_than_1_week",
    },
    { label: t("staticValues.timePeriod.week"), value: "1_week" },
    {
      label: t("staticValues.timePeriod.twoWeeks"),
      value: "2_3_weeks",
    },
    { label: t("staticValues.timePeriod.month"), value: "month" },
    { label: t("staticValues.timePeriod.longer"), value: "longer" },
  ];

  return (
    <FormProvider {...formFields}>
      {submitRequstState.loading && (
        <CardModal closeable={false}>
          <ActivityIndicator size="large" />
        </CardModal>
      )}

      {/* TODO: Form error handling submitRequstState.error && ... */}

      {submitRequstState.succeeded && (
        <ThankfulnessModal
          onClose={() =>
            setSubmitRequstState((_state) => submitRequestDefualtState)
          }
        />
      )}

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
            <InputCotrolLabel>
              {t("refugeeAddForm.phoneLabel")}
            </InputCotrolLabel>
            <FormTextInput
              name="advancedRefugee.phoneNumber"
              label={t("refugeeAddForm.phonePlaceholder")}
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
            <InputControl zIndex={13}>
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
              <InputCotrolLabel>
                {t("refugeeAddForm.cityLabel")}
              </InputCotrolLabel>
              <FormDropdown
                data={CITY_DROPDOWN_LIST} // todo: google places api
                name="advancedRefugee.town"
                placeholder={t("refugeeAddForm.cityPlaceholder")}
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
            <FormRadioGroup
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
            <InputCotrolLabel>
              {t("refugeeAddForm.countryOfGroup")}
            </InputCotrolLabel>
            <FormRadioGroup
              name="advancedRefugee.nationality"
              rules={{
                required: true,
              }}
              data={[
                {
                  label: t("refugeeAddForm.countryOfGroupUA"),
                  value: "ukraine",
                },
                {
                  label: t("refugeeAddForm.countryOfGroupOthers"),
                  value: "any",
                },
              ]}
              error={errors?.advancedRefugee?.nationality}
              errorMsg={t("refugeeAddForm.errors.countryOfGroup")}
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
