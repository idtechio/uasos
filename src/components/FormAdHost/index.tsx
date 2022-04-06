import { useState, useMemo, useEffect, useContext } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import {
  AccommodationType,
  FormType,
  HostType,
  Nationality,
} from "../../helpers/FormTypes";
import { ButtonCta } from "../Buttons";

import { CompositionSection } from "../Compositions";
import { InputControl, InputCotrolLabel as InputControlLabel } from "../Forms";
import FormTextInput from "../Inputs/FormTextInput";
import FormDropdown from "../Inputs/FormDropdown";
import FormCityDropdown from "../Inputs/FormCityDropdown";
import FormCountryDropdown from "../Inputs/FormCountryDropdown";
import FormNumericInput from "../Inputs/FormNumericInput";
import FormRadioGroup from "../Inputs/FormRadioGroup";
import FormButtonsVertical from "../Inputs/FormButtonsVertcal";
import {
  accomodationTypeDropdownFields,
  additionalHostsFeats,
  GROUP_RELATIONS,
} from "./FormAddHost.data";
import CardModal from "../CardModal";
import { ThankfulnessModal } from "../ThankfulnessModal";
import { Error } from "../Inputs/style";
import FormCheckbox from "../Inputs/FormCheckbox";
import {
  useAddHostToApi,
  useUpdateHostToApi,
} from "../../queries/useOffersList";
import { OfferProps } from "../../../pages/api/listing/offers";
import { AuthContext } from "../../../pages/_app";

export const SectionContent = styled.View`
  display: flex;
  gap: 30px 0;
  max-width: 400px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

enum Boolean {
  FALSE = "FALSE",
  TRUE = "TRUE",
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

type FormAdHostProps = {
  data: OfferProps | null;
};

export default function FormAdHost({ data }: FormAdHostProps) {
  const { t } = useTranslation();
  const {
    mutate: mutateAdd,
    isLoading: isSubmitLoading,
    isSuccess: isSubmitSuccess,
  } = useAddHostToApi();
  const { mutate: mutateUpdate } = useUpdateHostToApi();
  const { identity } = useContext(AuthContext);

  const form = useForm<FormType>({
    defaultValues: {
      advancedHost: {
        guestCount: 1,
        country: "poland",
        volunteerVisitAcceptance: "true",
        groupsTypes: [],
        phoneNumber: identity?.phoneNumber ?? "",
      },
    },
  });

  useEffect(() => {
    if (form && data) {
      form.reset({
        advancedHost: {
          country: data?.country ? data.country : "poland",
          city: data?.city ? data.city : "",
          closestLargeCity: data?.closest_city ? data.closest_city : "",
          zipCode: data?.zipcode ? data.zipcode : "",
          street: data?.street ? data.street : "",
          buildingNumber: data?.building_no ? data.building_no : "",
          apartmentNumber: data?.appartment_no ? data.appartment_no : "",
          accommodationType: data?.shelter_type ? data.shelter_type[0] : "",
          accommodationTime: data?.duration_category
            ? data.duration_category[0]
            : "",
          guestCount: data?.beds ? data.beds : 1,
          groupsTypes: data?.acceptable_group_relations
            ? data.acceptable_group_relations
            : [],
          transportReady: data?.transport_included === Boolean.TRUE,
          pregnantReady: data?.ok_for_pregnant === Boolean.TRUE,
          disabilityReady: data?.ok_for_disabilities === Boolean.TRUE,
          animalReady: data?.ok_for_animals === Boolean.TRUE,
          elderReady: data?.ok_for_elderly === Boolean.TRUE,
          nationality:
            data?.ok_for_any_nationality === Boolean.TRUE
              ? Nationality.ANY
              : data?.ok_for_any_nationality === Boolean.FALSE
              ? Nationality.UKRAINIAN
              : "",
        },
      });
    }
  }, [data, form]);

  const [submitRequstState, setSubmitRequstState] =
    useState<SubmitRequestState>(submitRequestDefualtState);

  const {
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitted },
  } = form;

  const watchCountry = watch("advancedHost.country");

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

  const onSubmit: SubmitHandler<FormType> = async ({ advancedHost }) => {
    const {
      accommodationTime,
      accommodationType,
      animalReady,
      country,
      disabilityReady,
      elderReady,
      groupsTypes,
      guestCount,
      nationality,
      pregnantReady,
      city,
      transportReady,
      zipCode,
      street,
      buildingNumber,
      apartmentNumber,
      closestLargeCity,
      volunteerVisitAcceptance,
    } = advancedHost;

    setSubmitRequstState((state) => ({ ...state, loading: true }));

    const payload = {
      id: data?.id ? data.id : undefined,
      country: country,
      phone_num: identity?.phoneNumber ?? "",
      city: city,
      shelter_type: [accommodationType],
      host_type: [], // TODO add host type value
      acceptable_group_relations: groupsTypes,
      beds: guestCount,
      ok_for_pregnant: pregnantReady ? Boolean.TRUE : Boolean.FALSE,
      ok_for_disabilities: disabilityReady ? Boolean.TRUE : Boolean.FALSE,
      ok_for_animals: animalReady ? Boolean.TRUE : Boolean.FALSE,
      ok_for_elderly: elderReady ? Boolean.TRUE : Boolean.FALSE,
      ok_for_any_nationality:
        nationality === "any" ? Boolean.TRUE : Boolean.FALSE,
      duration_category: [accommodationTime],
      transport_included: transportReady ? Boolean.TRUE : Boolean.FALSE,
      // TODO set data for new props:
      closest_city: closestLargeCity,
      zipcode: zipCode,
      street: street,
      building_no: buildingNumber,
      appartment_no: apartmentNumber,
      can_be_verified: volunteerVisitAcceptance ? Boolean.TRUE : Boolean.FALSE,
    };

    const mutate = data?.id ? mutateUpdate : mutateAdd;

    mutate(payload, {
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
          headerText={t("thankfulnessHostModal.thankYou")}
          subHeaderText={t("thankfulnessHostModal.applicationSent")}
          contentText={t("thankfulnessHostModal.informWhenAccomodationFound")}
        />
      )}

      <CompositionSection
        padding={[35, 30, 20, 30]}
        header={t("others:forms.createShelter.accommodationHeader")}
        subHeader={t("hostAdd.hostAddressProcessingWarning")}
        zIndex={3}
      >
        <SectionContent>
          <View
            style={{
              zIndex: 2,
            }}
          >
            <InputControlLabel>{t("hostAdd.country")}</InputControlLabel>
            <FormCountryDropdown
              zIndex={14}
              placeholder={t("hostAdd.country")}
              name="advancedHost.country"
              rules={{
                required: true,
              }}
              error={errors?.advancedHost?.country}
              errorMsg={t("hostAdd.errors.country")}
            />
          </View>

          <View
            style={{
              zIndex: 1,
            }}
          >
            <InputControlLabel>
              {t("others:forms.generic.closestLargeCity")}
            </InputControlLabel>
            <FormCityDropdown
              zIndex={13}
              country={watchCountry}
              name="advancedHost.closestLargeCity"
              placeholder={t("refugeeAddForm.cityPlaceholder")}
              rules={{
                required: true,
              }}
              error={errors?.advancedHost?.closestLargeCity}
              errorMsg={t("validations.requiredTown")}
            />
          </View>

          <View style={styles.flexInputs}>
            <View style={styles.inputWrapper}>
              <InputControlLabel>
                {t("others:forms.generic.zipCode")}
              </InputControlLabel>
              <FormTextInput
                name="advancedHost.zipCode"
                label={t("others:forms.generic.zipCode")}
                error={errors?.advancedHost?.zipCode}
                rules={{
                  required: true,
                }}
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputControlLabel>{t("hostAdd.city")}</InputControlLabel>
              <FormTextInput
                name="advancedHost.city"
                label={t("refugeeAddForm.cityPlaceholder")}
                error={errors?.advancedHost?.city}
                rules={{
                  required: true,
                }}
              />
            </View>
          </View>

          <View>
            <InputControlLabel>
              {t("others:forms.createShelter.street")}
            </InputControlLabel>
            <FormTextInput
              name="advancedHost.street"
              label={t("others:forms.createShelter.street")}
              error={errors?.advancedHost?.street}
              rules={{
                required: true,
              }}
            />
          </View>

          <View style={styles.flexInputs}>
            <View style={styles.inputWrapper}>
              <InputControlLabel>
                {t("others:forms.createShelter.buildingNo")}
              </InputControlLabel>
              <FormTextInput
                name="advancedHost.buildingNumber"
                label={t("others:forms.createShelter.buildingNo")}
                error={errors?.advancedHost?.buildingNumber}
                rules={{
                  required: true,
                }}
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputControlLabel>
                {t("others:forms.createShelter.apartmentNo")}
              </InputControlLabel>
              <FormTextInput
                name="advancedHost.apartmentNumber"
                label={t("others:forms.createShelter.apartmentNo")}
                error={errors?.advancedHost?.apartmentNumber}
                rules={{
                  required: true,
                }}
              />
            </View>
          </View>
        </SectionContent>
      </CompositionSection>

      <CompositionSection
        padding={[35, 30, 8, 30]}
        backgroundColor="#F5F4F4"
        zIndex={2}
      >
        <SectionContent>
          <View
            style={{
              zIndex: 100,
            }}
          >
            <InputControlLabel>{t("hostAdd.type")}</InputControlLabel>
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
          </View>

          {shouldIncludeHostTypeField && (
            <View
              style={{
                zIndex: 1,
              }}
            >
              <InputControlLabel>{t("hostAdd.hostType")}</InputControlLabel>
              <FormDropdown
                data={(
                  Object.keys(HostType) as Array<keyof typeof HostType>
                ).map((key: keyof typeof HostType) => ({
                  value: key,
                  label: t(`hostAdd.hostTypeLabel.${String(HostType[key])}`),
                }))}
                name="advancedHost.hostType"
                placeholder={t("forms.chooseFromList")}
                rules={{
                  required: shouldIncludeHostTypeField,
                }}
                error={errors?.advancedHost?.hostType}
                errorMsg={t("hostAdd.errors.hostType")}
                zIndex={11}
              />
            </View>
          )}

          <View>
            <InputControlLabel>{t("hostAdd.guestCount")}</InputControlLabel>
            <FormNumericInput
              name="advancedHost.guestCount"
              rules={{
                required: true,
              }}
              min={1}
              error={errors?.advancedHost?.guestCount}
              errorMsg={t("hostAdd.errors.guestCount")}
            />{" "}
          </View>

          <View>
            <InputControlLabel>
              {t("refugeeAddForm.overnightDurationLabel")}
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
          </View>
        </SectionContent>
      </CompositionSection>

      <CompositionSection
        padding={[35, 30, 8, 30]}
        header={t("hostAdd.additionalInformationHeader")}
        zIndex={1}
      >
        <SectionContent>
          <View>
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
          </View>

          <View
            style={{
              zIndex: 1,
            }}
          >
            <InputControlLabel>
              {t("others:forms.createShelter.groupsHostAccepts")}
            </InputControlLabel>
            <FormDropdown<string>
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
              errorMsg={t("refugeeAddForm.errors.groupRelations")}
            />
          </View>

          <FormButtonsVertical
            data={additionalHostsFeats.map(({ label, ...rest }) => ({
              label: t(label),
              ...rest,
            }))}
          />
        </SectionContent>
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
      <CompositionSection padding={[0, 30, 31, 30]} backgroundColor="#F5F4F4">
        <InputControl>
          <ButtonCta
            onPress={handleSubmit(onSubmit)}
            anchor={t("refugeeAddForm.addButton")}
            style={styles.addButton}
          />
          {isSubmitted && !isValid && !isSubmitLoading && !isSubmitSuccess && (
            <View style={styles.errorWrapper}>
              <Error>{t("refugeeAddForm.addButtomErrorMessage")}</Error>
            </View>
          )}

          {isSubmitted && (submitRequstState.error as Error)?.message && (
            <View style={styles.errorWrapper}>
              <Error>{(submitRequstState.error as Error).message}</Error>
            </View>
          )}
        </InputControl>
      </CompositionSection>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  addButton: {
    alignSelf: "flex-end",
    paddingHorizontal: 20,
    cursor: "pointer",
  },
  errorWrapper: {
    marginTop: 5,
    alignSelf: "flex-end",
  },
  formWrapper: {
    maxWidth: "500px",
    width: "100%",
  },
  tooltipText: { marginHorizontal: 10 },
  flexInputs: {
    display: "flex",
    flexDirection: "row",
    gap: "0px 15px",
  },
  inputWrapper: {
    flexShrink: 1,
  },
});
