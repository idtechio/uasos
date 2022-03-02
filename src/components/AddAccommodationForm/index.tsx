import type { AddAccommodationFormProps } from "./types";
import {} from "./style";
import { CompositionSection } from "../Compositions";
import {
  InputControl,
  InputCotrolLabel,
  InputCotrolLabelSmall,
} from "../Forms";
import { ScrollView, StyleSheet } from "react-native";
import { ButtonCta } from "../Buttons";
import { useForm, FormProvider } from "react-hook-form";
import AnimalsIcon from "../../style/svgs/animals.svg";
import KidsIcon from "../../style/svgs/kids.svg";
import FoodIcon from "../../style/svgs/food.svg";
import DisabilityIcon from "../../style/svgs/disability.svg";
import FormTextInput from "../Inputs/FormTextInput";
import {
  ForHowLong,
  FormType,
  LivingConditions,
} from "../../helpers/FormTypes";
import FormRadioGroup from "../Inputs/FormRadioGroup";
import FormButtonsGrid from "../Inputs/FormButtonsGrid";
import { useTranslation } from "next-i18next";
import { ThankfulnessModal } from "../ThankfulnessModal";
import { useState } from "react";

// TODO: all file to revalidaete !!!!

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
  input: {
    marginTop: 20,
  },
});

const AddAccommodationForm = ({}: AddAccommodationFormProps) => {
  const { t } = useTranslation();
  const formFields = useForm<FormType>();
  const {
    handleSubmit,
    formState: { errors },
  } = formFields;

  const [showModal, setShowModal] = useState(false);

  const onSubmit = (data: FormType) => {
    fetch("/api/accommodations/add", {
      method: "post",
      body: JSON.stringify({
        name: data.host.core.name,
        children_allowed: data.host.preferences.kids,
        city: data.host.core.location,
        email: data.host.core.email,
        handicapped_allowed: data.host.preferences.disability,
        num_people: data.host.preferences.peopleQuantity,
        period: data.host.preferences.forHowLong,
        pet_allowed: data.host.preferences.animals,
        pietro: data.host.floor,
        status: 1,
      }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setShowModal(true);
      });
  };

  const onError = (error) => {
    console.log("form error:", error);
  };

  return (
    <FormProvider {...formFields}>
      {showModal ? (
        <ThankfulnessModal />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
          style={styles.containerWraper}
        >
          <CompositionSection padding={[35, 30, 8, 30]}>
            <FormTextInput
              name={"host.core.name"}
              label={t("labels.name")}
              rules={{
                required: true,
              }}
              error={errors?.host?.core?.name}
              errorMsg={t("validations.requiredName")}
            />
            <FormTextInput
              name={"host.core.email"}
              label={t("labels.email")}
              rules={{
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: t("validations.invalidEmail"),
                },
              }}
              error={errors?.host?.core?.email}
              errorMsg={t("validations.invalidEmail")}
            />
            <FormTextInput
              name="host.core.phoneNumber"
              label={t("labels.phone")}
              rules={{
                required: true,
                pattern: {
                  value: /\d{9,15}/,
                  message: t("validations.invalidPhoneNumber"),
                },
              }}
              error={errors?.host?.core?.phoneNumber}
              errorMsg={t("validations.invalidPhoneNumber")}
            />
            <FormTextInput
              name="host.core.location"
              label={t("labels.town")}
              rules={{
                required: true,
              }}
              error={errors?.host?.core?.location}
              errorMsg={t("validations.requiredTown")}
            />
          </CompositionSection>

          <CompositionSection
            backgroundColor="#F5F4F4"
            padding={[35, 30, 0, 30]}
          >
            <InputControl>
              <InputCotrolLabel>
                {t("addAccommodation.hostPreferences.label")}
              </InputCotrolLabel>
              <FormButtonsGrid
                data={[
                  {
                    id: "host.preferences.animals",
                    label: t("addAccommodation.hostPreferences.acceptAnimals"),
                    icon: <AnimalsIcon width="30" height="25" />,
                  },
                  {
                    id: "host.preferences.kids",
                    label: t("addAccommodation.hostPreferences.kidsUnder2"),
                    icon: <KidsIcon width="26" height="25" />,
                  },
                  {
                    id: "host.preferences.food",
                    label: t("addAccommodation.hostPreferences.foodIncluded"),
                    icon: <FoodIcon width="26" height="25" />,
                  },
                  {
                    id: "host.preferences.disability",
                    label: t(
                      "addAccommodation.hostPreferences.disabledSupport"
                    ),
                    icon: <DisabilityIcon width="24" height="25" />,
                  },
                ]}
              />
            </InputControl>
            <InputControl>
              <InputCotrolLabel>
                {t("addAccommodation.peopleQuantity")}
              </InputCotrolLabel>
              <FormRadioGroup<string | number>
                name="host.preferences.peopleQuantity"
                rules={{
                  required: true,
                }}
                data={[
                  { label: "1", value: 1 },
                  { label: "2", value: 2 },
                  { label: "3", value: 3 },
                  { label: "4", value: 4 },
                  { label: "5", value: 5 },
                  { label: t("more"), value: "more" },
                ]}
                errorMsg={t("validations.requiredPeopleQuantity")}
              />
            </InputControl>
            <InputControl>
              <InputCotrolLabel>
                {t("addAccommodation.forHowLong")}
              </InputCotrolLabel>
              <FormRadioGroup<ForHowLong>
                name="host.preferences.forHowLong"
                rules={{
                  required: true,
                }}
                data={[
                  {
                    label: t("staticValues.timePeriod.week"),
                    value: ForHowLong.WEEK,
                  },
                  {
                    label: t("staticValues.timePeriod.twoWeeks"),
                    value: ForHowLong.TWO_WEEKS,
                  },
                  {
                    label: t("staticValues.timePeriod.month"),
                    value: ForHowLong.MONTH,
                  },
                  {
                    label: t("staticValues.timePeriod.longer"),
                    value: ForHowLong.LONGER,
                  },
                ]}
                errorMsg={t("validations.requiredTime")}
              />
            </InputControl>
          </CompositionSection>

          <CompositionSection padding={[35, 30, 9, 30]}>
            <InputControl>
              <InputCotrolLabel>
                {t("addAccommodation.livingConditions.label")}
              </InputCotrolLabel>
              <FormRadioGroup<LivingConditions>
                name="host.livingConditions"
                rules={{
                  required: true,
                }}
                data={[
                  {
                    label: t("addAccommodation.livingConditions.options.flat"),
                    value: LivingConditions.FLAT,
                  },
                  {
                    label: t("addAccommodation.livingConditions.options.room"),
                    value: LivingConditions.ROOM,
                  },
                  {
                    label: t(
                      "addAccommodation.livingConditions.options.mattress"
                    ),
                    value: LivingConditions.MATTRESS,
                  },
                  {
                    label: t("addAccommodation.livingConditions.options.other"),
                    value: LivingConditions.OTHER,
                  },
                ]}
                errorMsg={t("validations.requiredLivingConditions")}
              />
            </InputControl>
            <InputControl>
              <InputCotrolLabel>
                {t("addAccommodation.floor.label")}
              </InputCotrolLabel>
              <InputCotrolLabelSmall>
                {t("addAccommodation.floor.hint")}
              </InputCotrolLabelSmall>
              <FormRadioGroup<string | number>
                name="host.floor"
                rules={{
                  required: true,
                }}
                data={[
                  { label: "0", value: 0 },
                  { label: "1", value: 1 },
                  { label: "2", value: 2 },
                  { label: "3", value: 3 },
                  { label: "4", value: 4 },
                  { label: t("staticValues.withElevator"), value: "elevator" },
                ]}
                errorMsg={t("validations.requiredFloor")}
              />
            </InputControl>
            <InputControl>
              <ButtonCta
                onPress={handleSubmit(onSubmit, onError)}
                anchor={t("addAccommodation.submit")}
              />
            </InputControl>
          </CompositionSection>
        </ScrollView>
      )}
    </FormProvider>
  );
};

export default AddAccommodationForm;
