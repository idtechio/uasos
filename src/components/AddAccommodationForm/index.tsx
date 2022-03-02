import type { AddAccommodationFormProps } from "./types";
import {} from "./style";
import { CompositionSection, CompositionGrid } from "../Compositions";
import {
  ChoiceButton,
  InputControl,
  InputCotrolLabel,
  InputCotrolLabelSmall,
} from "../Forms";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { ButtonCta } from "../Buttons";
import { useForm, FormProvider } from "react-hook-form";
import { useState, useMemo } from "react";
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
import { TFunction, useTranslation } from "next-i18next";

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

export type HostPreferences = {
  id: string;
  text: string;
  icon?: React.ReactNode;
};

const hostPreferencesFactory = (t: TFunction): HostPreferences[] => [
  {
    id: "animals",
    text: t("addAccommodation.hostPreferences.acceptAnimals"),
    icon: <AnimalsIcon width="30" height="25" />,
  },
  {
    id: "kids",
    text: t("addAccommodation.hostPreferences.kidsUnder2"),
    icon: <KidsIcon width="26" height="25" />,
  },
  {
    id: "food",
    text: t("addAccommodation.hostPreferences.foodIncluded"),
    icon: <FoodIcon width="26" height="25" />,
  },
  {
    id: "disability",
    text: t("addAccommodation.hostPreferences.disabledSupport"),
    icon: <DisabilityIcon width="24" height="25" />,
  },
];

const AddAccommodationForm = ({}: AddAccommodationFormProps) => {
  const { t } = useTranslation();
  const formFields = useForm<FormType>();
  const hostPreferences = useMemo(() => hostPreferencesFactory(t), [t]);
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = formFields;
  const onSubmit = (data) => {
    const preferencesApiArray = [];
    for (const [key, value] of Object.entries(preferences)) {
      if (value) {
        preferencesApiArray.push(key);
      }
    }
    const conditionsApiArray = [];
    for (const [key, value] of Object.entries(conditions)) {
      if (value) {
        conditionsApiArray.push(key);
      }
    }
    const floorApiArray = [];
    for (const [key, value] of Object.entries(floor)) {
      if (value) {
        floorApiArray.push(`floor_${key}`);
      }
    }

    const howManyPeopleApiArray = [];
    for (const [key, value] of Object.entries(howManyPeople)) {
      if (value) {
        if (key === "more") {
          howManyPeopleApiArray.push(`people_${data.howManyPeople}`);
        } else {
          howManyPeopleApiArray.push(`people_${key}`);
        }
      }
    }

    const howLongArray = [];
    for (const [key, value] of Object.entries(howLong)) {
      if (value) {
        howLongArray.push(key);
      }
    }

    fetch("/api/accommodations/add", {
      method: "post",
      body: JSON.stringify({
        host: {
          name: data.name,
          email: data.email,
        },
        location: {
          city: data.location,
          state: "",
        },
        conditions: [...conditionsApiArray, ...floorApiArray],
        preferences: preferencesApiArray,
        resources: [...howManyPeopleApiArray],
      }),
    }).then((res) => {
      if (res.status === 200) {
      } else {
      }
    });
  };
  const onError = (error) => {
    console.log("form error:", error);
  };

  const [preferences, setPreferences] = useState({
    animals: false,
    kids: false,
    food: false,
    disability: false,
  });
  const clickPreferences = (id) => {
    setPreferences((prevState) => ({
      ...prevState,
      [id]: !preferences[id],
    }));
  };

  type HowManyPeopleState = {
    1: false;
    2: false;
    3: false;
    4: false;
    5: false;
    more: false;
  };

  const [howManyPeople, setHowManyPeople] = useState<HowManyPeopleState>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    more: false,
  });

  type HowLongState = {
    week_1: boolean;
    week_2: boolean;
    week_3: boolean;
    week_more: boolean;
  };

  const [howLong, setHowLong] = useState<HowLongState>({
    week_1: false,
    week_2: false,
    week_3: false,
    week_more: false,
  });

  const clickHowLong = (id: keyof HowLongState) => {
    setHowLong((prevState): HowLongState => {
      return {
        ...prevState,
        [id]: !prevState[id],
      };
    });
  };

  type ConditionsState = {
    selfContained: boolean;
    room: boolean;
    mattress: boolean;
    other: boolean;
  };

  const [conditions, setConditions] = useState<ConditionsState>({
    selfContained: false,
    room: false,
    mattress: false,
    other: false,
  });

  const clickConditions = (id: keyof ConditionsState) => {
    setConditions((prevState: ConditionsState) => {
      return {
        ...prevState,
        [id]: !prevState[id],
      };
    });
  };

  type FloorState = {
    0: boolean;
    1: boolean;
    2: boolean;
    3: boolean;
    4: boolean;
    bright: boolean;
  };

  const [floor, setFloor] = useState<FloorState>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    bright: false,
  });

  const clickFloor = (id: keyof FloorState) => {
    setFloor((prevState: FloorState) => {
      return {
        ...prevState,
        [id]: !prevState[id],
      };
    });
  };

  return (
    <FormProvider {...formFields}>
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

        <CompositionSection backgroundColor="#F5F4F4" padding={[35, 30, 0, 30]}>
          <InputControl>
            <InputCotrolLabel>
              {t("addAccommodation.hostPreferences.label")}
            </InputCotrolLabel>
            <CompositionGrid spaceing={[16, 16]} itemsPerRow={2} disableRwd>
              {hostPreferences.map((hostPreference) => {
                return (
                  <TouchableOpacity
                    key={hostPreference.id}
                    onPress={() => {
                      clickPreferences(hostPreference.id);
                    }}
                  >
                    <ChoiceButton
                      text={hostPreference.text}
                      icon={hostPreference.icon}
                      preferenceId={hostPreference.id}
                      isChoice={preferences[hostPreference.id]}
                    />
                  </TouchableOpacity>
                );
              })}
            </CompositionGrid>
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
    </FormProvider>
  );
};

export default AddAccommodationForm;
