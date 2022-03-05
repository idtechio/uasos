import React, { ReactNode, useState, useMemo } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
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
import UploadInput from "../Forms/UploadInput/index.web";
import UploadPreview from "../Forms/UploadPreview";
import FormTextInput from "../Inputs/FormTextInput";
import FormDropdown from "../Inputs/FormDropdown";
import FormNumericInput from "../Inputs/FormNumericInput";
import FormRadioGroup from "../Inputs/FormRadioGroup";
import FormButtonsVertical, { Data } from "../Inputs/FormButtonsVertcal";
// import FormCheckbox from "../Inputs/FormCheckbox";
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
      pregnantReady,
      town,
      transportReady, // present in form but not used
    } = advancedHost;
    addHostToApi({
      name: "",
      country: country,
      phone_num: "TODO",
      email: "TODO",
      city: town,
      children_allowed: Boolean.TRUE, // No such field in Form...
      pet_allowed: animalReady ? Boolean.TRUE : Boolean.FALSE,
      handicapped_allowed: dissabilityReady ? Boolean.TRUE : Boolean.FALSE, // What's the difference between this and "ok_for_disabilities"??
      num_people: guestCount,
      period: 10, // how to map AccomodationTime Enum to number??
      pietro: 0, // No such field in Form...
      listing_country: country,
      shelter_type: accommodationType,
      beds: 999, // No such field in Form...
      acceptable_group_relations: "TODO",
      ok_for_pregnant: pregnantReady ? Boolean.TRUE : Boolean.FALSE,
      ok_for_disabilities: dissabilityReady ? Boolean.TRUE : Boolean.FALSE,
      ok_for_animals: animalReady ? Boolean.TRUE : Boolean.FALSE,
      ok_for_elderly: elderReady ? Boolean.TRUE : Boolean.FALSE,
      ok_for_any_nationality:
        nationality === "any" ? Boolean.TRUE : Boolean.FALSE,
      duration_category: "TODO",
    });
  };

  const [uploadPreviews, setUploadPreviews] = useState<string[]>();

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
          header={t("refugeeAddForm.basicInfoHeader")}
        >
          <SectionContent>
            <InputControlLabel>
              {t("refugeeAddForm.nameLabel")}
            </InputControlLabel>
            <FormTextInput
              name="advancedRefugee.name"
              label={t("refugeeAddForm.namePlaceholder")}
              rules={{
                required: true,
              }}
              error={errors?.advancedRefugee?.name}
              errorMsg={t("refugeeAddForm.errors.name")}
            />
            <InputControlLabel>
              {t("refugeeAddForm.emailLabel")}
            </InputControlLabel>
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
            <InputControlLabel>
              {t("refugeeForm.labels.phoneNumber")}
            </InputControlLabel>
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
            {/* <FormAutocompleteInput
              name="advancedHost.town"
              rules={{
                required: false,
              }}
              error={errors?.advancedHost?.town}
              errorMsg={t("validations.requiredTown")}
              label={t("hostAdd.town")}
            /> */}
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
              data={(
                Object.keys(AccomodationTime) as Array<keyof AccomodationTime>
              ).map((key: keyof AccomodationTime) => ({
                value: key as AccomodationTime,
                label: t(
                  `hostAdd.accommodationTimeLabel.${String(
                    AccomodationTime[key]
                  )}`
                ),
              }))}
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
