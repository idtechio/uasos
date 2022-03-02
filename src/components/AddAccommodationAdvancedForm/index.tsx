import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FormType } from "../../helpers/FormTypes";
import { ButtonCta } from "../Buttons";

import { CompositionSection } from "../Compositions";
import { ChoiceButton, InputControl, InputCotrolLabel } from "../Forms";
import FormDropdown from "../Inputs/FormDropdown";
import FormNumericInput from "../Inputs/FormNumericInput";
import FormRadioGroup from "../Inputs/FormRadioGroup";
import FormTextInput from "../Inputs/FormTextInput";

const DUMMY_DROPDOWN_ITEMS = [
  { label: "Item 1", value: "Item 1" },
  { label: "Item 2", value: "Item 2" },
  { label: "Item 3", value: "Item 3" },
  { label: "Item 4", value: "Item 4" },
  { label: "Item 5", value: "Item 5" },
  { label: "Item 6", value: "Item 6" },
  { label: "Item 7", value: "Item 7" },
];

export default function AddAccommodationAdvancedForm() {
  const { t } = useTranslation();

  const formFields = useForm<FormType>({
    defaultValues: {
      advancedHost: {
        fullBedCount: 0,
        childBedCount: 0,
        accommodationTime: 0,
      },
    },
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formFields;

  const onSubmit = (data) => {
    // TODO: implement
    console.log("Handle submit", data);
  };

  return (
    <FormProvider {...formFields}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        style={styles.containerWraper}
      >
        <CompositionSection
          padding={[35, 30, 8, 30]}
          header={t("hostAdd.basicInfoHeader")}
        >
          <InputCotrolLabel>{t("hostAdd.country")}</InputCotrolLabel>
          <FormDropdown
            data={DUMMY_DROPDOWN_ITEMS}
            placeholder={t("hostAdd.country")}
            name="advancedHost.country"
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.country}
            errorMsg={t("hostAdd.errors.rcountry")}
          />
          <InputCotrolLabel>{t("hostAdd.town")}</InputCotrolLabel>
          <FormDropdown
            data={DUMMY_DROPDOWN_ITEMS}
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
        <CompositionSection padding={[35, 30, 8, 30]} backgroundColor="#F5F4F4">
          <InputCotrolLabel>{t("hostAdd.type")}</InputCotrolLabel>
          {/* TODO: use Dropdown here */}
          <FormDropdown
            data={DUMMY_DROPDOWN_ITEMS}
            name="advancedHost.accommodationType"
            placeholder={t("forms.chooseFromList")}
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.accommodationType}
            errorMsg={t("hostAdd.errors.type")}
          />
          <InputCotrolLabel>{t("hostAdd.fullBedCount")}</InputCotrolLabel>
          <FormNumericInput
            name="advancedHost.fullBedCount"
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.fullBedCount}
            errorMsg={t("hostAdd.errors.fullBedCount")}
          />
          <InputCotrolLabel>{t("hostAdd.childBedCount")}</InputCotrolLabel>
          <FormNumericInput
            name="advancedHost.childBedCount"
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.childBedCount}
            errorMsg={t("hostAdd.errors.childBedCount")}
          />
          <InputCotrolLabel>{t("hostAdd.accommodationTime")}</InputCotrolLabel>
          <FormNumericInput
            name="advancedHost.accommodationTime"
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.accommodationTime}
            errorMsg={t("hostAdd.errors.accommodationTime")}
          />
        </CompositionSection>
        <CompositionSection
          padding={[35, 30, 8, 30]}
          header={t("hostAdd.additionalInformationHeader")}
        >
          <InputCotrolLabel>{t("hostAdd.nationality")}</InputCotrolLabel>
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
          <InputCotrolLabel>{t("hostAdd.groupsTypes")}</InputCotrolLabel>
          <FormDropdown
            data={DUMMY_DROPDOWN_ITEMS}
            name="advancedHost.groupsTypes"
            placeholder={t("forms.chooseFromListMulti")}
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.groupsTypes}
            errorMsg={t("hostAdd.errors.groupsTypes")}
          />

          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              // TODO: use properly ChoiceButton component after it's refactor
              <InputControl>
                <TouchableOpacity onPress={() => {}}>
                  <ChoiceButton
                    text={t("hostAdd.transportReady")}
                    isSmall
                    isChoice={false}
                  />
                </TouchableOpacity>
              </InputControl>
            )}
            name="advancedHost.transportReady"
          />
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              // TODO: use properly ChoiceButton component after it's refactor
              <InputControl>
                <TouchableOpacity onPress={() => {}}>
                  <ChoiceButton
                    text={t("hostAdd.pregnantReady")}
                    isSmall
                    isChoice={false}
                  />
                </TouchableOpacity>
              </InputControl>
            )}
            name="advancedHost.pregnantReady"
          />
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              // TODO: use properly ChoiceButton component after it's refactor
              <InputControl>
                <TouchableOpacity onPress={() => {}}>
                  <ChoiceButton
                    text={t("hostAdd.dissabilityReady")}
                    isSmall
                    isChoice={false}
                  />
                </TouchableOpacity>
              </InputControl>
            )}
            name="advancedHost.dissabilityReady"
          />
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              // TODO: use properly ChoiceButton component after it's refactor
              <InputControl>
                <TouchableOpacity onPress={() => {}}>
                  <ChoiceButton
                    text={t("hostAdd.animalReady")}
                    isSmall
                    isChoice={false}
                  />
                </TouchableOpacity>
              </InputControl>
            )}
            name="advancedHost.animalReady"
          />
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              // TODO: use properly ChoiceButton component after it's refactor
              <InputControl>
                <TouchableOpacity onPress={() => {}}>
                  <ChoiceButton
                    text={t("hostAdd.prolongationReady")}
                    isSmall
                    isChoice={false}
                  />
                </TouchableOpacity>
              </InputControl>
            )}
            name="advancedHost.prolongationReady"
          />
        </CompositionSection>
        <CompositionSection padding={[35, 30, 8, 30]} backgroundColor="#F5F4F4">
          <InputControl>
            <ButtonCta
              onPress={handleSubmit(onSubmit)}
              anchor={t("hostAdd.addButton")}
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
