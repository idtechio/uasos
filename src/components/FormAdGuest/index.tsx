import { useMemo, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import type { GuestProps } from "../../../pages/api/guests/add";
import { FormType } from "../../helpers/FormTypes";
import { useAddGuestToApi } from "../../queries/useRequestsList";
import AnimalsIcon from "../../style/svgs/animals.svg";
import DisabilityIcon from "../../style/svgs/disability.svg";
import ElderIcon from "../../style/svgs/elder.svg";
import PregnantIcon from "../../style/svgs/pregnant.svg";
import { ButtonCta } from "../Buttons";
import CardModal from "../CardModal";
import { CompositionSection } from "../Compositions";
import { ChoiceButton, InputControl, InputCotrolLabel } from "../Forms";
import { Buttons } from "../Forms/RadioButtons/style";
import FormButtonsVertical, { Data } from "../Inputs/FormButtonsVertcal";
import FormCityDropdown from "../Inputs/FormCityDropdown";
import FormCountryDropdown from "../Inputs/FormCountryDropdown";
import FormDropdown from "../Inputs/FormDropdown";
import FormNumericInput from "../Inputs/FormNumericInput";
import FormRadioGroup from "../Inputs/FormRadioGroup";
import FormTextInput from "../Inputs/FormTextInput";
import { Error } from "../Inputs/style";
import { ThankfulnessModal } from "../ThankfulnessModal";
import { Tooltip } from "../Tooltip";

enum Boolean {
  FALSE = "FALSE",
  TRUE = "TRUE",
}

const enum Location {
  Any,
  Preffered,
}

type SubmitRequestState = {
  loading: boolean;
  error: Error | null | unknown;
  succeeded: boolean;
};
const submitRequestDefualtState = {
  loading: false,
  error: null,
  succeeded: false,
};

type FormAdGuestProps = {
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
};

export default function FormAdGuest({
  name,
  email,
  phoneNumber,
}: FormAdGuestProps) {
  const { t } = useTranslation();
  const formFields = useForm<FormType>({
    defaultValues: {
      advancedRefugee: {
        name: name ? name.split(" ")[0] : "",
        email: email ?? "",
        phoneNumber: phoneNumber ?? "",
        fullBedCount: 1,
        childBedCount: 0,
        age: 18,
        accommodationType: [],
      },
    },
  });
  const { mutate } = useAddGuestToApi();

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
    watch,
    formState: { errors, isValid, isSubmitted },
  } = formFields;

  const watchCountry = watch("advancedRefugee.country", "");

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    const guest = data.advancedRefugee;

    let apiObject: GuestProps = {
      // name: guest.name,
      phone_num: `${guest.phonePrefix}${guest.phoneNumber}`,
      email: guest.email,
      acceptable_shelter_types: guest.accommodationType,
      beds: guest.fullBedCount,
      group_relation: [guest.groupRelations],
      is_pregnant: guest.preferences.peopleDetails.pregnant
        ? Boolean.TRUE
        : Boolean.FALSE,
      is_with_disability: guest.preferences.peopleDetails.disability
        ? Boolean.TRUE
        : Boolean.FALSE,
      is_with_animal: guest.preferences.peopleDetails.animals
        ? Boolean.TRUE
        : Boolean.FALSE,
      is_with_elderly: guest.preferences.peopleDetails.oldPerson
        ? Boolean.TRUE
        : Boolean.FALSE,
      is_ukrainian_nationality:
        guest.nationality === "ukraine" ? Boolean.TRUE : Boolean.FALSE,
      duration_category: [guest.overnightDuration],
      country: guest.country,
    };

    if (guest.town) {
      apiObject = {
        ...apiObject,
        city: guest.town,
      };
    }

    setSubmitRequstState((state) => ({ ...state, loading: true }));

    mutate(apiObject, {
      onSuccess: () => {
        setSubmitRequstState((state) => ({ ...state, succeeded: true }));
      },
      onError: (error) => {
        setSubmitRequstState((state) => ({ ...state, error }));
      },
      onSettled: () => {
        setSubmitRequstState((state) => ({ ...state, loading: false }));
      },
    });
  };

  const onError = (_error: unknown) => {
    // TODO: handle error case
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
          onClose={() => setSubmitRequstState(submitRequestDefualtState)}
          headerText={t("thankfulnessModal.thankYou")}
          subHeaderText={t("thankfulnessModal.applicationSent")}
          contentText={t("thankfulnessModal.informWhenAccomodationFound")}
        />
      )}

      <CompositionSection
        zIndex={5}
        padding={[35, 30, 8, 30]}
        header={t("refugeeAddForm.placeOfRefuge")}
        backgroundColor="#F5F4F4"
      >
        <SectionContent>
          <View style={{ zIndex: 14 }}>
            <InputCotrolLabel>
              {t("others:forms.createRefuge.shelter.whatIsTargetCountry")}
            </InputCotrolLabel>
            <FormCountryDropdown
              zIndex={14}
              placeholder={t("refugeeAddForm.countryOfRefugePlaceholder")}
              name="advancedRefugee.country"
              rules={{
                required: true,
              }}
              error={errors?.advancedRefugee?.country}
              errorMsg={t("hostAdd.errors.country")}
            />
          </View>
          <View style={{ zIndex: 13, marginTop: 10 }}>
            <InputCotrolLabel>
              {t("others:forms.createRefuge.shelter.targetCityAndSurroundings")}
              <View style={styles.tooltipText}>
                <Tooltip>
                  <Text style={{ zIndex: 99 }}>
                    {t("refugeeAddForm.cityTooltipText")}
                  </Text>
                </Tooltip>
              </View>
            </InputCotrolLabel>
            <Buttons style={{ justifyContent: "space-between" }}>
              <ChoiceButton
                text={t("others:forms.createRefuge:shelter.anyCity")}
                isSmall
                onPress={() => setLocation(Location.Any)}
                isSelected={location === Location.Any}
              />
              <ChoiceButton
                text={t("others:forms.match.specificCity")}
                isSmall
                onPress={() => setLocation(Location.Preffered)}
                isSelected={location === Location.Preffered}
              />
            </Buttons>
          </View>
          {location === Location.Preffered && (
            <View style={{ zIndex: 13 }}>
              <FormCityDropdown
                country={watchCountry}
                name="advancedRefugee.town"
                placeholder={t("refugeeAddForm.cityPlaceholder")}
                rules={{
                  required: true,
                }}
                error={errors?.advancedRefugee?.town}
                errorMsg={t("validations.requiredTown")}
              />
            </View>
          )}
          <View style={{ zIndex: 12 }}>
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
          </View>
        </SectionContent>
      </CompositionSection>
      <CompositionSection
        zIndex={2}
        padding={[35, 30, 8, 30]}
        header={t("others:forms.createRefuge:shelter.groupDetails")}
      >
        <SectionContent>
          <View style={{}}>
            <InputCotrolLabel>
              {t("refugeeAddForm.fullBedCountLabel")}
            </InputCotrolLabel>
            <FormNumericInput
              name="advancedRefugee.fullBedCount"
              rules={{
                required: true,
              }}
              min={1}
              error={errors?.advancedRefugee?.fullBedCount}
              errorMsg={t("refugeeAddForm.errors.fullBedCount")}
            />
          </View>
          <FormButtonsVertical data={refugeeDetailsOptions} />
          <View style={{ zIndex: 11 }}>
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
          </View>
          <View style={{ zIndex: 10 }}>
            <InputCotrolLabel>
              {t("refugeeAddForm.accommodationType")}
            </InputCotrolLabel>
            <FormDropdown<string>
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
          </View>

          <View style={{}}>
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
          </View>
        </SectionContent>
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
            style={styles.addButton}
          />
          {isSubmitted && !isValid ? (
            <Error>{t("refugeeAddForm.addButtomErrorMessage")}</Error>
          ) : null}
        </InputControl>
      </CompositionSection>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  addButton: {
    marginBottom: 5,
  },
  tooltipText: { marginHorizontal: 10 },
});

export const SectionContent = styled.View`
  display: flex;
  gap: 30px 0px;
  max-width: 400px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;
