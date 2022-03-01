import type { AddAccommodationFormProps } from "./types";
import {} from "./style";
import { CompositionSection, CompositionGrid } from "../Compositions";
import { lenguageTextSwitcher } from "../../helpers";
import {
  Input,
  ChoiceButton,
  InputControl,
  InputCotrolLabel,
  RadioButtons,
  InputCotrolLabelSmall,
} from "../Forms";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ButtonCta } from "../Buttons";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { useState, useEffect } from "react";
import type { LenguageText } from "../../helpers/lenguageTextSwitcher";
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

export type HostPreferenceData = {
  id: string;
  text: LenguageText;
  icon?: React.ReactNode;
};

export type HostPreferencesData = Array<HostPreferenceData>;

const hostPreferences: HostPreferencesData = [
  {
    id: "animals",
    text: [
      { locale: "ua-UA", text: "домашні тварини вітаються" },
      { locale: "pl-PL", text: "zwierzęta mile widziane" },
      { locale: "ru-RU", text: "домашние животные приветствуются" },
    ],
    icon: <AnimalsIcon />,
  },
  {
    id: "kids",
    text: "dzieci poniźej 2 lat",
    icon: <KidsIcon />,
  },
  {
    id: "food",
    text: "zapewnie wyżywienie",
    icon: <FoodIcon />,
  },
  {
    id: "disability",
    text: "osoby z niepełnosprawnością",
    icon: <DisabilityIcon />,
  },
];

const AddAccommodationForm = ({}: AddAccommodationFormProps) => {
  const formFields = useForm<FormType>();
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
            label={"imię"}
            rules={{
              required: true,
            }}
            error={errors?.host?.core?.name}
            errorMsg={"Podaj swoję imię"}
          />
          <FormTextInput
            name={"host.core.email"}
            label={"e-mail"}
            rules={{
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Podaj porawny e-mail",
              },
            }}
            error={errors?.host?.core?.email}
            errorMsg={"Podaj porawny e-mail"}
          />
          <FormTextInput
            name="host.core.phoneNumber"
            label={"telefon"}
            rules={{
              required: true,
              pattern: {
                value: /\d{9,15}/,
                message: "Podaj prawidłowy numer telefonu",
              },
            }}
            error={errors?.host?.core?.phoneNumber}
            errorMsg={"Podaj prawidłowy numer telefonu"}
          />
          <FormTextInput
            name="host.core.location"
            label={"miejscowość"}
            rules={{
              required: true,
            }}
            error={errors?.host?.core?.location}
            errorMsg={"Podaj miejscowość"}
          />
        </CompositionSection>

        <CompositionSection backgroundColor="#F5F4F4" padding={[35, 30, 0, 30]}>
          <InputControl>
            <InputCotrolLabel>
              {lenguageTextSwitcher([
                {
                  locale: "ua-UA",
                  text: "(UA) Określ swoje preferencje, kogo chcesz przyjąć:я",
                },
                {
                  locale: "pl-PL",
                  text: "Określ swoje preferencje - komu możesz pomóc:",
                },
                {
                  locale: "ru-RU",
                  text: "(RU) Określ swoje preferencje, kogo chcesz przyjąć:",
                },
              ])}
            </InputCotrolLabel>
            <CompositionGrid spaceing={[16, 16]} itemsPerRow={2} disableRwd>
              {hostPreferences.map((hostPreference: HostPreferenceData) => {
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
              {lenguageTextSwitcher("Ile osób możesz przyjąć?")}
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
                { label: "więcej", value: "more" },
              ]}
            />
          </InputControl>
          <InputControl>
            <InputCotrolLabel>
              {lenguageTextSwitcher("Na jak długo?")}
            </InputCotrolLabel>
            <FormRadioGroup<ForHowLong>
              name="host.preferences.forHowLong"
              rules={{
                required: true,
              }}
              data={[
                { label: "tydzień", value: ForHowLong.WEEK },
                { label: "2 tygodnie", value: ForHowLong.TWO_WEEKS },
                { label: "miesiąc", value: ForHowLong.MONTH },
                { label: "dłużej", value: ForHowLong.LONGER },
              ]}
            />
          </InputControl>
        </CompositionSection>

        <CompositionSection padding={[35, 30, 9, 30]}>
          <InputControl>
            <InputCotrolLabel>
              {lenguageTextSwitcher("Jakie warunki lokalowe możesz zapewnić?")}
            </InputCotrolLabel>
            <FormRadioGroup<LivingConditions>
              name="host.livingConditions"
              rules={{
                required: true,
              }}
              data={[
                { label: "mam wolne mieszkanie", value: LivingConditions.FLAT },
                { label: "mam wolny pokój", value: LivingConditions.ROOM },
                {
                  label: 'mogę "dostawić materac"',
                  value: LivingConditions.MATTRESS,
                },
                { label: "inne", value: LivingConditions.OTHER },
              ]}
            />
          </InputControl>
          <InputControl>
            <InputCotrolLabel>
              {lenguageTextSwitcher("Na którym piętrze zamieszkają?")}
            </InputCotrolLabel>
            <InputCotrolLabelSmall>
              *Osoby starsze mogą mieć problem z wejściem na wysokie piętro
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
                { label: "jest winda", value: "month" },
              ]}
            />
          </InputControl>
          <InputControl>
            <ButtonCta
              onPress={handleSubmit(onSubmit, onError)}
              anchor="Zgłoś swoją gotowość  "
            />
          </InputControl>
        </CompositionSection>
      </ScrollView>
    </FormProvider>
  );
};

export default AddAccommodationForm;
