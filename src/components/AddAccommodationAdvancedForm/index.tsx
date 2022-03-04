import React, { ReactNode, useState, useMemo } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components/native";
import {
  AccommodationType,
  AccomodationTime,
  FormKey,
  FormType,
  HostType,
} from "../../helpers/FormTypes";
import { primary } from "../../style/theme.config";
import { ButtonCta } from "../Buttons";
import AnimalsIcon from "../../style/svgs/animals.svg";
import DisabilityIcon from "../../style/svgs/disability.svg";
import PregnancyIcon from "../../style/svgs/pregnancy.svg";
import CarIcon from "../../style/svgs/car.svg";
import ElderSittingIcon from "../../style/svgs/elder_sitting.svg";

import { CompositionSection } from "../Compositions";
import { InputControl, InputCotrolLabel as InputControlLabel } from "../Forms";
import UploadInput from "../Forms/UploadInput/index.web";
import FormChoiceButton from "../Inputs/FormChoiceButton";
import FormDropdown from "../Inputs/FormDropdown";
import FormNumericInput from "../Inputs/FormNumericInput";
import FormRadioGroup from "../Inputs/FormRadioGroup";
import FormButtonsVertical, { Data } from "../Inputs/FormButtonsVertcal";
import FormCheckbox from "../Inputs/FormCheckbox";
import Footer from "../Footer";

const DUMMY_DROPDOWN_ITEMS = [
  { label: "Item 1", value: "Item 1" },
  { label: "Item 2", value: "Item 2" },
  { label: "Item 3", value: "Item 3" },
  { label: "Item 4", value: "Item 4" },
  { label: "Item 5", value: "Item 5" },
  { label: "Item 6", value: "Item 6" },
  { label: "Item 7", value: "Item 7" },
];

const DeletePhotoText = styled.Text`
  color: ${(props) => props.theme.colors.error};
`;

export default function AddAccommodationAdvancedForm() {
  const { t } = useTranslation();

  const additionalHostsFeats: Data[] = useMemo(
    () => [
      {
        id: "advancedHost.transportReady",
        label: t("hostAdd.transportReady"),
        icon: <CarIcon width="30" height="30" />,
      },
      {
        id: "advancedHost.pregnantReady",
        label: t("hostAdd.pregnantReady"),
        icon: <PregnancyIcon width="30" height="30" />,
      },
      {
        id: "advancedHost.elderReady",
        label: t("hostAdd.elderReady"),
        icon: <ElderSittingIcon width="30" height="30" />,
      },
      {
        id: "advancedHost.dissabilityReady",
        label: t("hostAdd.dissabilityReady"),
        icon: <DisabilityIcon width="30" height="30" />,
      },
      {
        id: "advancedHost.animalReady",
        label: t("hostAdd.animalReady"),
        icon: <AnimalsIcon width="30" height="30" />,
      },
    ],
    [t]
  );

  // todo: make sure values are consistent with API
  const accomodationTypeDropdownFields = useMemo(
    () => [
      {
        label: t("advancedHost.accommodationTypeOptions.bed"),
        value: AccommodationType.BED,
      },
      {
        label: t("advancedHost.accommodationTypeOptions.room"),
        value: AccommodationType.ROOM,
      },
      {
        label: t("advancedHost.accommodationTypeOptions.flat"),
        value: AccommodationType.FLAT,
      },
      {
        label: t("advancedHost.accommodationTypeOptions.house"),
        value: AccommodationType.HOUSE,
      },
      {
        label: t("advancedHost.accommodationTypeOptions.collective"),
        value: AccommodationType.COLLECTIVE,
      },
    ],
    [t]
  );

  const form = useForm<FormType>({
    defaultValues: {
      advancedHost: {
        guestCount: 0,
        country: "poland",
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

  const shouldIncludeHostTypeField = useMemo(
    () =>
      watchAccomodationTypeFieldValue === AccommodationType.BED ||
      watchAccomodationTypeFieldValue === AccommodationType.ROOM,
    [watchAccomodationTypeFieldValue]
  );

  const onSubmit = (data) => {
    console.log("Handle submit", data);
  };
  const [uploadPreview, setUploadPreview] = useState<string>();

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
          <InputControlLabel>{t("hostAdd.country")}</InputControlLabel>
          <FormDropdown
            zIndex={14}
            data={[{ label: t("hostAdd.countries.poland"), value: "poland" }]}
            placeholder={t("hostAdd.country")}
            name="advancedHost.country"
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.country}
            errorMsg={t("hostAdd.errors.country")}
          />
          <InputControlLabel>{t("hostAdd.town")}</InputControlLabel>
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
        </CompositionSection>
        {/* TODO: Image Picker usage here */}
        <CompositionSection
          padding={[35, 30, 8, 30]}
          backgroundColor="#F5F4F4"
          zIndex={2}
        >
          <InputControlLabel>{t("hostAdd.type")}</InputControlLabel>
          {/* TODO: use Dropdown here */}
          <FormDropdown
            zIndex={12}
            data={accomodationTypeDropdownFields}
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
                    label: t(`hostAdd.hostTypeLabel.${String(HostType[key])}`),
                  })
                )}
                name="advancedHost.hostType"
                placeholder={t("forms.chooseFromList")}
                rules={{
                  required: true,
                }}
                error={errors?.advancedHost?.hostType}
                errorMsg={t("hostAdd.errors.hostType")}
                zIndex={11}
              />
            </>
          )}

          <InputControlLabel>
            {t("hostAdd.accomodationPhoto")}
          </InputControlLabel>

          <View style={{ marginBottom: 16 }}>
            <Controller
              control={control}
              rules={{
                required: false,
              }}
              name="advancedHost.accomodationPhoto"
              render={({ field: { onChange, onBlur, value } }) => {
                return value ? (
                  <>
                    <img src={uploadPreview} alt="" />
                    <TouchableOpacity
                      onPress={() => {
                        onChange(undefined);
                        setUploadPreview(undefined);
                      }}
                    >
                      <DeletePhotoText>
                        {t("hostAdd.accomodationPhotoReset")}
                      </DeletePhotoText>
                    </TouchableOpacity>
                  </>
                ) : (
                  <UploadInput
                    accept="image/*"
                    onFileChange={(file, dataUri) => {
                      onChange(file);
                      setUploadPreview(dataUri);

                      onBlur();
                    }}
                  >
                    {t("hostAdd.accomodationPhotoLabel")}
                  </UploadInput>
                );
              }}
            />
          </View>

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
        </CompositionSection>
        <CompositionSection
          padding={[35, 30, 8, 30]}
          header={t("hostAdd.additionalInformationHeader")}
          zIndex={1}
        >
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
            errorMsg={t("validations.nationalityError")}
          />
          <InputControlLabel>{t("hostAdd.groupsTypes")}</InputControlLabel>
          <FormDropdown
            multiSelect
            zIndex={11}
            data={DUMMY_DROPDOWN_ITEMS}
            name="advancedHost.groupsTypes"
            placeholder={t("forms.chooseFromListMulti")}
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.groupsTypes}
            errorMsg={t("hostAdd.errors.groupsTypes")}
          />
          <FormButtonsVertical data={additionalHostsFeats} />
        </CompositionSection>
        <CompositionSection padding={[35, 30, 8, 30]} backgroundColor="#F5F4F4">
          <FormCheckbox
            rules={{
              required: true, // TODO Make sure it's required
            }}
            error={errors?.refugee?.isGDPRAccepted}
            errorMsg={t("hostAdd.errors.required")}
            name={t("hostAdd.volunteerVisitAcceptance")}
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
