import React, { ReactNode, useState, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import {
  AccommodationType,
  AccomodationTime,
  FormType,
  HostType,
} from "../../helpers/FormTypes";
import { primary } from "../../style/theme.config";
import { ButtonCta } from "../Buttons";

import { CompositionSection } from "../Compositions";
import { Tooltip } from "../Tooltip";
import { InputControl, InputCotrolLabel as InputControlLabel } from "../Forms";
import FormTextInput from "../Inputs/FormTextInput";
import FormDropdown from "../Inputs/FormDropdown";
import FormNumericInput from "../Inputs/FormNumericInput";
import FormRadioGroup from "../Inputs/FormRadioGroup";
import FormButtonsVertical, { Data } from "../Inputs/FormButtonsVertcal";
import Footer from "../Footer";
import {
  accomodationTypeDropdownFields,
  additionalHostsFeats,
  GROUP_RELATIONS,
  hostCountries,
} from "./FormAddHost.data";
import FormAutocompleteInput from "../Inputs/FormAutocompleteInput";
import addHostToApi from "../../helpers/addHostToApi";
import { Boolean } from "../FormAdGuest";

const MAX_PHOTOS_COUNT = 3;

const PreviewsWrapper = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  z-index: 10;
  margin-bottom: 26px;
`;

export const SectionContent = styled.View`
  max-width: 400px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

const TooltipIcon = styled.View`
  background: "black";
  color: "white";
`;

export default function FormAdHost() {
  const { t } = useTranslation();

  const form = useForm<FormType>({
    defaultValues: {
      advancedHost: {
        guestCount: 0,
        country: "poland",
        volunteerVisitAcceptance: "true",
      },
    },
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const watchAccomodationTypeFieldValue = form.watch(
    "advancedHost.accommodationType"
  );

  const volunteerVisitAcceptance = form.watch(
    "advancedHost.volunteerVisitAcceptance"
  ) as unknown as boolean;

  const shouldIncludeHostTypeField = useMemo(
    () =>
      watchAccomodationTypeFieldValue === AccommodationType.BED ||
      watchAccomodationTypeFieldValue === AccommodationType.ROOM,
    [watchAccomodationTypeFieldValue]
  );

  const DUMMY_DROPDOWN_ITEMS = [
    { label: "Item 1", value: "Item 1" },
    { label: "Item 2", value: "Item 2" },
    { label: "Item 3", value: "Item 3" },
    { label: "Item 4", value: "Item 4" },
    { label: "Item 5", value: "Item 5" },
    { label: "Item 6", value: "Item 6" },
    { label: "Item 7", value: "Item 7" },
  ];

  const onSubmit = ({ advancedHost }) => {
    const {
      accommodationTime,
      accommodationType,
      accomodationPhoto, // present in form but not used
      animalReady,
      country,
      dissabilityReady,
      elderReady,
      groupsTypes, // present in form but not used
      guestCount,
      hostType, // present in form but not used
      nationality,
      name,
      email,
      phoneNumber,
      pregnantReady,
      town,
      transportReady, // present in form but not used
    } = advancedHost;
    console.log(advancedHost);
    addHostToApi({
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
  };

  const [uploadPreviews, setUploadPreviews] = useState<string[]>();

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        style={styles.containerWraper}
      >
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
            <InputControlLabel>
              {t("hostAdd.labels.phoneNumber")}
            </InputControlLabel>
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
          header={t("hostAdd.basicInfoHeader")}
          zIndex={3}
        >
          <SectionContent>
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
            <InputControlLabel>
              {t("hostAdd.town")}
              <View style={{ marginHorizontal: 10 }}>
                <Tooltip>
                  <Text>{t("advancedHost.advancedHost.tooltipText")}</Text>
                </Tooltip>
              </View>
            </InputControlLabel>
            <FormDropdown
              zIndex={13}
              data={DUMMY_DROPDOWN_ITEMS} // todo: google places api
              name="advancedHost.town"
              placeholder={t("hostAdd.town")}
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
              data={accomodationTypeDropdownFields.map(
                ({ label, ...rest }) => ({
                  label: t(label),
                  ...rest,
                })
              )}
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
                      label: t(
                        `hostAdd.hostTypeLabel.${String(HostType[key])}`
                      ),
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
              error={errors?.advancedHost?.guestCount}
              errorMsg={t("hostAdd.errors.guestCount")}
            />

            <InputControlLabel>
              {t("hostAdd.accommodationTime")}
            </InputControlLabel>
            <FormRadioGroup<AccomodationTime>
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
            <FormRadioGroup<string | string>
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
        <Footer />
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
    color: primary.colors.error,
    marginTop: 10,
  },
  containerWraper: {
    width: "100%",
  },
});
