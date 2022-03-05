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
import FormDropdown from "../Inputs/FormDropdown";
import FormNumericInput from "../Inputs/FormNumericInput";
import FormRadioGroup from "../Inputs/FormRadioGroup";
import FormButtonsVertical, { Data } from "../Inputs/FormButtonsVertcal";
import FormCheckbox from "../Inputs/FormCheckbox";
import Footer from "../Footer";
import {
  accomodationTypeDropdownFields,
  additionalHostsFeats,
  GROUP_RELATIONS,
} from "./FormAddHost.data";
import FormAutocompleteInput from "../Inputs/FormAutocompleteInput";
import { InputWraper } from "../Forms/InputControl/style";

const MAX_PHOTOS_COUNT = 3;

const PreviewsWrapper = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
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

  const onSubmit = (data) => {
    console.log("Handle submit", data);
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
          header={t("hostAdd.basicInfoHeader")}
          zIndex={3}
        >
          <InputWraper>
            <InputControlLabel>{t("hostAdd.country")}</InputControlLabel>
            <FormDropdown
              data={[{ label: t("hostAdd.countries.poland"), value: "poland" }]}
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
            <FormAutocompleteInput
              name="advancedHost.town"
              rules={{
                required: true,
              }}
              error={errors?.advancedHost?.town}
              errorMsg={t("validations.requiredTown")}
              label={t("hostAdd.town")}
            />
          </InputWraper>
        </CompositionSection>
        {/* TODO: Image Picker usage here */}
        <CompositionSection
          padding={[35, 30, 8, 30]}
          backgroundColor="#F5F4F4"
          zIndex={2}
        >
          <InputWraper>
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
                {/* TODO: ADD validation */}
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
          </InputWraper>

          <InputWraper>
            <InputControlLabel>
              {t("hostAdd.accomodationPhoto")}
            </InputControlLabel>
            <Controller
              control={control}
              rules={{
                required: false,
              }}
              name="advancedHost.accomodationPhotos"
              render={({ field: { onChange, onBlur, value } }) => {
                return (
                  <PreviewsWrapper>
                    <UploadInput
                      disabled={value?.length >= MAX_PHOTOS_COUNT}
                      accept="image/*"
                      onFileChange={(file, dataUri) => {
                        onChange(value ? [...value, file] : [file]);
                        setUploadPreviews(
                          uploadPreviews
                            ? [...uploadPreviews, dataUri]
                            : [dataUri]
                        );
                        onBlur();
                      }}
                    >
                      {t("hostAdd.accomodationPhotoLabel")}
                    </UploadInput>

                    {!!value &&
                      value.map((photo, index) => {
                        if (!uploadPreviews || !uploadPreviews[index]) {
                          return null;
                        }
                        return (
                          <UploadPreview
                            key={`uploadPreview-${index}`}
                            onDelete={() => {
                              onChange(value.filter((_, idx) => idx !== index));
                              setUploadPreviews(
                                uploadPreviews.filter((_, idx) => idx !== index)
                              );
                            }}
                            preview={uploadPreviews[index]}
                          />
                        );
                      })}
                  </PreviewsWrapper>
                );
              }}
            />
          </InputWraper>
          <InputWraper>
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
          </InputWraper>
        </CompositionSection>
        <CompositionSection
          padding={[35, 30, 8, 30]}
          header={t("hostAdd.additionalInformationHeader")}
          zIndex={1}
        >
          <InputWraper>
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
          </InputWraper>
        </CompositionSection>

        <CompositionSection padding={[35, 30, 8, 30]} backgroundColor="#F5F4F4">
          <FormCheckbox
            rules={{
              required: false,
            }}
            value={volunteerVisitAcceptance}
            name="advancedHost.volunteerVisitAcceptance"
            label={t("hostAdd.volunteerVisitAcceptance")}
          />
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
