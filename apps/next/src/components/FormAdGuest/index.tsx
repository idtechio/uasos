import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import type { GuestProps as AddGuestProps } from "../../../pages/api/guests/add";
import type { GuestProps as EditGuestProps } from "../../../pages/api/guests/edit";
import { FormType, Nationality } from "../../helpers/FormTypes";
import {
  useAddGuestToApi,
  useUpdateGuestToApi,
} from "../../queries/useRequestsList";
import { ButtonCta } from "../Buttons";
import CardModal from "../CardModal";
import { CompositionSection } from "../Compositions";
import { ChoiceButton, InputControl, InputCotrolLabel } from "../Forms";
import { Buttons } from "../Forms/RadioButtons/style";
import FormButtonsVertical from "../Inputs/FormButtonsVertcal";
import FormCityDropdown from "../Inputs/FormCityDropdown";
import FormCountryDropdown from "../Inputs/FormCountryDropdown";
import FormDropdown from "../Inputs/FormDropdown";
import FormNumericInput from "../Inputs/FormNumericInput";
import FormRadioGroup from "../Inputs/FormRadioGroup";
import { Error as InputError } from "../Inputs/style";
import { ThankfulnessModal } from "../ThankfulnessModal";
import { Tooltip } from "../Tooltip";
import { RequestProps } from "../../../pages/api/listing/requests";
import {
  ACCOMMODATION_TYPES,
  GROUP_RELATIONS,
  OVERNIGHT_DURATION_TYPES,
  refugeeDetailsOptions,
} from "./FormAdGuest.data";

enum Boolean {
  FALSE = "FALSE",
  TRUE = "TRUE",
}

const enum Location {
  Any,
  Preferred,
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
  data: RequestProps | null;
};

type MutateCallbacks = {
  onSuccess: () => void;
  onError: (error: Error | unknown) => void;
  onSettled: () => void;
};

export default function FormAdGuest({
  name,
  email,
  phoneNumber,
  data,
}: FormAdGuestProps) {
  const { t } = useTranslation();
  const { mutate: mutateAdd } = useAddGuestToApi();
  const { mutate: mutateUpdate } = useUpdateGuestToApi();
  const [location, setLocation] = useState<Location>(Location.Any);
  const [submitRequstState, setSubmitRequstState] =
    useState<SubmitRequestState>(submitRequestDefualtState);

  const formFields = useForm<FormType>({
    mode: "onChange",
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

  useEffect(() => {
    if (formFields && data) {
      formFields.reset({
        advancedRefugee: {
          country: data?.country ? data.country : "",
          town: data?.city ? data.city : "",
          overnightDuration: data?.duration_category
            ? data.duration_category[0]
            : "",
          fullBedCount: data?.beds ? data.beds : 1,
          preferences: {
            peopleDetails: {
              pregnant: data?.is_pregnant === Boolean.TRUE,
              disability: data?.is_with_disability === Boolean.TRUE,
              animals: data?.is_with_animal === Boolean.TRUE,
              oldPerson: data?.is_with_elderly === Boolean.TRUE,
            },
          },
          groupRelations: data?.group_relation ? data.group_relation[0] : "",
          accommodationType: data?.acceptable_shelter_types
            ? data.acceptable_shelter_types
            : [],
          nationality:
            data?.is_ukrainian_nationality === Boolean.TRUE
              ? Nationality.UKRAINIAN
              : data?.is_ukrainian_nationality === Boolean.FALSE
              ? Nationality.ANY
              : "",
          phoneNumber: data?.phone_num ? data.phone_num : "",
          email: data?.email ? data.email : "",
        },
      });
    }
  }, [data, formFields]);

  useEffect(() => {
    if (data?.city && location === Location.Any) {
      setLocation(Location.Preferred);
    }
  }, [data, location]);

  const {
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitted },
  } = formFields;

  const watchCountry = watch("advancedRefugee.country", "");

  const getSubmitButtonTitle = useMemo(
    () =>
      data?.id
        ? t("refugeeAddForm.confirmChangesButton")
        : t("refugeeAddForm.addButton"),
    [t, data]
  );

  const onChooseLocation = useCallback(
    (newLocation: Location) => async () => {
      if (newLocation === Location.Preferred) {
        const result = await formFields.trigger("advancedRefugee.country");
        result ? setLocation(newLocation) : "";
      } else {
        setLocation(newLocation);
      }
    },
    [formFields]
  );

  const onSubmit: SubmitHandler<FormType> = async ({ advancedRefugee }) => {
    const guest = advancedRefugee;

    let apiObject: AddGuestProps | EditGuestProps = {
      // name: guest.name,
      id: data?.id ? data.id : undefined,
      phone_num: `${guest.phoneNumber}`,
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
        guest.nationality === Nationality.UKRAINIAN
          ? Boolean.TRUE
          : Boolean.FALSE,
      duration_category: [guest.overnightDuration],
      country: guest.country,
    };

    if (guest.town) {
      apiObject = {
        ...apiObject,
        city: guest.town,
      };
    }

    const mutate = (
      payload: AddGuestProps | EditGuestProps,
      callbacks: MutateCallbacks
    ) => {
      if (data?.id) {
        mutateUpdate({ ...data, ...payload } as EditGuestProps, callbacks);
        return;
      }

      mutateAdd(payload as AddGuestProps, callbacks);
    };

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
                    {t("refugeeAddForm.cityTooltip")}
                  </Text>
                </Tooltip>
              </View>
            </InputCotrolLabel>
            <Buttons justifyContent={"space-between"}>
              <ChoiceButton
                text={t("others:forms.createRefuge.shelter.anyCity")}
                isSmall
                onPress={onChooseLocation(Location.Any)}
                isSelected={location === Location.Any}
                width={180}
                noMarginRight
              />
              <ChoiceButton
                text={t("others:forms.match.specificCity")}
                isSmall
                onPress={onChooseLocation(Location.Preferred)}
                isSelected={location === Location.Preferred}
                width={180}
                noMarginRight
              />
            </Buttons>
          </View>
          {location === Location.Preferred && (
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
              data={OVERNIGHT_DURATION_TYPES.map(({ label, ...rest }) => ({
                label: t(label),
                ...rest,
              }))}
              error={errors?.advancedRefugee?.overnightDuration}
              errorMsg={t("refugeeAddForm.errors.overnightDuration")}
            />
          </View>
        </SectionContent>
      </CompositionSection>
      <CompositionSection
        zIndex={2}
        padding={[35, 30, 8, 30]}
        header={t("others:forms.createRefuge.shelter.groupDetails")}
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
              errorMsg={t("refugeeAddForm.errors.fullBedCountsaas")}
            />
          </View>
          <FormButtonsVertical
            data={refugeeDetailsOptions.map(({ label, ...rest }) => ({
              label: t(label),
              ...rest,
            }))}
          />
          <View style={{ zIndex: 11 }}>
            <InputCotrolLabel>
              {t("refugeeAddForm.groupRelations")}
            </InputCotrolLabel>
            <FormDropdown
              data={GROUP_RELATIONS.map(({ label, ...rest }) => ({
                label: t(label),
                ...rest,
              }))}
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
              data={ACCOMMODATION_TYPES.map(({ label, ...rest }) => ({
                label: t(label),
                ...rest,
              }))}
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
              isRadio
              name="advancedRefugee.nationality"
              rules={{
                required: true,
              }}
              data={[
                {
                  label: t("refugeeAddForm.countryOfGroupUA"),
                  value: Nationality.UKRAINIAN,
                },
                {
                  label: t("refugeeAddForm.countryOfGroupOthers"),
                  value: Nationality.ANY,
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
            anchor={getSubmitButtonTitle}
            style={styles.addButton}
          />
          {isSubmitted && !isValid ? (
            <InputError>{t("refugeeAddForm.addButtomErrorMessage")}</InputError>
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
  tooltipText: {
    marginHorizontal: 10,
  },
});

export const SectionContent = styled.View`
  display: flex;
  gap: 30px 0;
  max-width: 400px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;
