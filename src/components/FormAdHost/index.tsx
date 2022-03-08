import React, { useState, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Text, ActivityIndicator, View } from "react-native";
import styled from "styled-components/native";
import { AccommodationType, FormType, HostType } from "../../helpers/FormTypes";
import { ButtonCta } from "../Buttons";

import { CompositionSection } from "../Compositions";
import { Tooltip } from "../Tooltip";
import { InputControl, InputCotrolLabel as InputControlLabel } from "../Forms";
import FormTextInput from "../Inputs/FormTextInput";
import FormDropdown from "../Inputs/FormDropdown";
import FormNumericInput from "../Inputs/FormNumericInput";
import FormRadioGroup from "../Inputs/FormRadioGroup";
import FormButtonsVertical from "../Inputs/FormButtonsVertcal";
import {
  accomodationTypeDropdownFields,
  additionalHostsFeats,
  GROUP_RELATIONS,
} from "./FormAddHost.data";
import addHostToApi from "../../helpers/addHostToApi";
import { Boolean } from "../FormAdGuest";
import CardModal from "../CardModal";
import { ThankfulnessModal } from "../ThankfulnessModal";
import CITY_DROPDOWN_LIST from "../../consts/cityDropdown.json";

// const MAX_PHOTOS_COUNT = 3;

// const PreviewsWrapper = styled.View`
//   margin-top: 10px;
//   flex-direction: row;
//   align-items: center;
//   z-index: 10;
//   margin-bottom: 26px;
// `;

export const SectionContent = styled.View`
  max-width: 400px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

// const TooltipIcon = styled.View`
//   background: "black";
//   color: "white";
// `;

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

export default function FormAdHost() {
  const { t } = useTranslation();

  const form = useForm<FormType>({
    defaultValues: {
      advancedHost: {
        guestCount: 1,
        country: "poland",
        volunteerVisitAcceptance: "true",
      },
    },
  });

  const [submitRequstState, setSubmitRequstState] =
    useState<SubmitRequestState>(submitRequestDefualtState);

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const watchAccomodationTypeFieldValue = form.watch(
    "advancedHost.accommodationType"
  );

  // const volunteerVisitAcceptance = form.watch(
  //   "advancedHost.volunteerVisitAcceptance"
  // ) as unknown as boolean;

  const shouldIncludeHostTypeField = useMemo(
    () =>
      watchAccomodationTypeFieldValue === AccommodationType.BED ||
      watchAccomodationTypeFieldValue === AccommodationType.ROOM,
    [watchAccomodationTypeFieldValue]
  );

  const onSubmit = async ({ advancedHost }) => {
    const {
      accommodationTime,
      accommodationType,
      accomodationPhoto: _accomodationPhoto, // present in form but not used
      animalReady,
      country,
      dissabilityReady,
      elderReady,
      groupsTypes, // present in form but not used
      guestCount,
      hostType: _hostType, // present in form but not used
      nationality,
      name,
      email,
      phoneNumber,
      pregnantReady,
      town,
      transportReady: _transportReady, // present in form but not used
    } = advancedHost;

    setSubmitRequstState((state) => ({ ...state, loading: true }));
    try {
      await addHostToApi({
        name: name,
        country: country,
        phone_num: phoneNumber,
        email: email,
        city: town,
        listing_country: country,
        shelter_type: [accommodationType],
        acceptable_group_relations: groupsTypes,
        beds: guestCount,
        ok_for_pregnant: pregnantReady ? Boolean.TRUE : Boolean.FALSE,
        ok_for_disabilities: dissabilityReady ? Boolean.TRUE : Boolean.FALSE,
        ok_for_animals: animalReady ? Boolean.TRUE : Boolean.FALSE,
        ok_for_elderly: elderReady ? Boolean.TRUE : Boolean.FALSE,
        ok_for_any_nationality:
          nationality === "any" ? Boolean.TRUE : Boolean.FALSE,
        duration_category: [accommodationTime],
      });

      setSubmitRequstState((state) => ({ ...state, succeeded: true }));
    } catch (error) {
      setSubmitRequstState((state) => ({ ...state, error }));
    } finally {
      setSubmitRequstState((state) => ({ ...state, loading: false }));
    }
  };

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
    <FormProvider {...form}>
      {submitRequstState.loading && (
        <CardModal closeable={false}>
          <ActivityIndicator size="large" />
        </CardModal>
      )}

      {/* TODO: Form error handling submitRequstState.error && ... */}

      {submitRequstState.succeeded && (
        <ThankfulnessModal
          onClose={() => setSubmitRequstState(submitRequestDefualtState)}
        />
      )}

      <CompositionSection
        padding={[35, 30, 8, 30]}
        zIndex={6}
        header={t("hostAdd.basicInfoHeader")}
      >
        <SectionContent>
          <InputControlLabel>{t("hostAdd.nameLabel")}</InputControlLabel>
          <FormTextInput
            name="advancedHost.name"
            label={t("hostAdd.namePlaceholder")}
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.name}
            errorMsg={t("hostAdd.errors.name")}
          />
          <InputControlLabel>{t("hostAdd.emailLabel")}</InputControlLabel>
          <FormTextInput
            name="advancedHost.email"
            label={t("hostAdd.emailPlaceholder")}
            rules={{
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: t("validations.invalidEmail"),
              },
            }}
            error={errors?.advancedHost?.email}
            errorMsg={t("hostAdd.errors.email")}
          />
          <InputControlLabel>{t("hostAdd.phoneLabel")}</InputControlLabel>
          <FormTextInput
            name="advancedHost.phoneNumber"
            label={t("hostAdd.phonePlaceholder")}
            rules={{
              required: true,
              pattern: {
                value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                message: t("hostAdd.errors.phoneNumber"),
              },
            }}
            error={errors?.advancedHost?.phoneNumber}
            errorMsg={t("hostAdd.errors.phoneNumber")}
          />
        </SectionContent>
      </CompositionSection>
      <CompositionSection
        padding={[35, 30, 8, 30]}
        header={t("hostAdd.refugeInfoHeader")}
        zIndex={3}
      >
        <SectionContent>
          {/* Temporarly disabled 
              <InputControlLabel>{t("hostAdd.country")}</InputControlLabel>
              <FormDropdown
                data={hostCountries.map(({ label, ...rest }) => ({
                  label: t(label),
                  ...rest,
                }))}
                placeholder={t("hostAdd.country")}
                name="advancedHost.country"
                rules={{
                  required: true,
                }}
                error={errors?.advancedHost?.country}
                errorMsg={t("hostAdd.errors.country")}
              />
            */}

          <InputControlLabel>
            {t("hostAdd.cityLabel")}
            <View style={{ marginHorizontal: 10 }}>
              <Tooltip>
                <Text>{t("hostAdd.cityTooltipText")}</Text>
              </Tooltip>
            </View>
          </InputControlLabel>
          <FormDropdown
            zIndex={13}
            data={CITY_DROPDOWN_LIST} // todo: google places api
            name="advancedHost.town"
            placeholder={t("hostAdd.cityPlaceholder")}
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.town}
            errorMsg={t("validations.requiredTown")}
          />
        </SectionContent>
      </CompositionSection>
      <CompositionSection
        padding={[35, 30, 8, 30]}
        backgroundColor="#F5F4F4"
        zIndex={2}
      >
        <SectionContent>
          <InputControlLabel>{t("hostAdd.type")}</InputControlLabel>
          {/* TODO: use Dropdown here */}
          <FormDropdown
            zIndex={12}
            data={accomodationTypeDropdownFields.map(({ label, ...rest }) => ({
              label: t(label),
              ...rest,
            }))}
            name="advancedHost.accommodationType"
            placeholder={t("forms.chooseFromList")}
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.accommodationType}
            errorMsg={t("hostAdd.errors.type")}
          />

          {shouldIncludeHostTypeField && (
            <>
              <InputControlLabel>{t("hostAdd.hostType")}</InputControlLabel>
              <FormDropdown
                data={(Object.keys(HostType) as Array<keyof HostType>).map(
                  (key) => ({
                    value: key,
                    label: t(`hostAdd.hostTypeLabel.${String(HostType[key])}`),
                  })
                )}
                name="advancedHost.hostType"
                placeholder={t("forms.chooseFromList")}
                rules={{
                  required: shouldIncludeHostTypeField,
                }}
                error={errors?.advancedHost?.hostType}
                errorMsg={t("hostAdd.errors.hostType")}
                zIndex={11}
              />
            </>
          )}
          <InputControlLabel>{t("hostAdd.guestCount")}</InputControlLabel>
          <FormNumericInput
            name="advancedHost.guestCount"
            rules={{
              required: true,
            }}
            min={1}
            error={errors?.advancedHost?.guestCount}
            errorMsg={t("hostAdd.errors.guestCount")}
          />

          <InputControlLabel>
            {t("hostAdd.accommodationTime")}
          </InputControlLabel>
          <FormRadioGroup
            name={t("advancedHost.accommodationTime")}
            rules={{
              required: true,
            }}
            data={OVERNIGHT_DURATION_TYPES}
            error={errors?.advancedHost?.accommodationTime}
            errorMsg={t("hostAdd.errors.accommodationTime")}
          />
        </SectionContent>
      </CompositionSection>
      <CompositionSection
        padding={[35, 30, 8, 30]}
        header={t("hostAdd.additionalInformationHeader")}
        zIndex={1}
      >
        <SectionContent>
          <InputControlLabel>{t("hostAdd.nationality")}</InputControlLabel>
          <FormRadioGroup
            name="advancedHost.nationality"
            rules={{
              required: true,
            }}
            data={[
              { label: t("hostAdd.ukraine"), value: "ukraine" },
              { label: t("hostAdd.any"), value: "any" },
            ]}
            errorMsg={t("hostAdd.errors.nationalityError")}
          />
          <InputControlLabel>{t("hostAdd.groupsTypes")}</InputControlLabel>

          <FormDropdown
            multiSelect
            zIndex={11}
            data={GROUP_RELATIONS.map(({ label, value }) => ({
              label: t(label),
              value,
            }))}
            name="advancedHost.groupsTypes"
            placeholder={t("forms.chooseFromListMulti")}
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.groupsTypes}
            errorMsg={t("hostAdd.errors.groupsTypes")}
          />
          <FormButtonsVertical
            data={additionalHostsFeats.map(({ label, ...rest }) => ({
              label: t(label),
              ...rest,
            }))}
          />
        </SectionContent>
      </CompositionSection>

      <CompositionSection padding={[35, 30, 8, 30]} backgroundColor="#F5F4F4">
        {/* <FormCheckbox
            rules={{
              required: false,
            }}
            value={volunteerVisitAcceptance}
            name="advancedHost.volunteerVisitAcceptance"
            label={t("hostAdd.volunteerVisitAcceptance")}
          /> */}
      </CompositionSection>
      <CompositionSection padding={[35, 30, 8, 30]} backgroundColor="#F5F4F4">
        <InputControl>
          <ButtonCta
            onPress={handleSubmit(onSubmit)}
            anchor={t("hostAdd.addButton")}
            style={{
              alignSelf: "flex-end",
              paddingHorizontal: 20,
              cursor: "pointer",
            }}
          />
        </InputControl>
      </CompositionSection>
    </FormProvider>
  );
}
