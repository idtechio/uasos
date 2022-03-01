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
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import type { LenguageText } from "../../helpers/lenguageTextSwitcher";
import AnimalsIcon from "../../style/svgs/animals.svg";
import KidsIcon from "../../style/svgs/kids.svg";
import FoodIcon from "../../style/svgs/food.svg";
import DisabilityIcon from "../../style/svgs/disability.svg";

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
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      location: "",
      howMenyPeople: "",
    },
  });
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

    const howMenyPeopleApiArray = [];
    for (const [key, value] of Object.entries(howMenyPeople)) {
      if (value) {
        if (key === "more") {
          howMenyPeopleApiArray.push(`people_${data.howMenyPeople}`);
        } else {
          howMenyPeopleApiArray.push(`people_${key}`);
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
        resources: [...howMenyPeopleApiArray],
      }),
    }).then((res) => {
      if (res.status === 200) {
      } else {
      }
    });
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

  const [howMenyPeople, setHowMenyPeople] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    more: false,
  });
  const [showHowMenyPeople, setShowHowMenyPeople] = useState(false);
  const clickHowMenyPeople = (id) => {
    setHowMenyPeople((prevState) => {
      return {
        [id]: !prevState[id],
      };
    });
  };
  useEffect(() => {
    if (howMenyPeople["more"] === true) {
      setShowHowMenyPeople(true);
    } else {
      setShowHowMenyPeople(false);
    }
  }, [howMenyPeople["more"]]);

  const [howLong, setHowLong] = useState({
    week_1: false,
    week_2: false,
    week_3: false,
    week_more: false,
  });
  const clickHowLong = (id) => {
    setHowLong((prevState) => {
      return {
        [id]: !prevState[id],
      };
    });
  };

  const [conditions, setConditions] = useState({
    selfContained: false,
    room: false,
    mattress: false,
    other: false,
  });
  const clickConditions = (id) => {
    setConditions((prevState) => {
      return {
        [id]: !prevState[id],
      };
    });
  };

  const [floor, setFloor] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    bright: false,
  });
  const clickFloor = (id) => {
    setFloor((prevState) => {
      return {
        [id]: !prevState[id],
      };
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      style={styles.containerWraper}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <CompositionSection padding={[35, 30, 8, 30]}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputControl>
                <Input
                  placeholder="imię"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.name}
                />
                {errors.name && (
                  <Text style={styles.error}>Podaj swoję imię</Text>
                )}
              </InputControl>
            )}
            name="name"
          />

          <Controller
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Podaj porawny e-mail",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputControl>
                <Input
                  placeholder="e-mail"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.email}
                />
                {errors.email && (
                  <Text style={styles.error}>Podaj porawny e-mail</Text>
                )}
              </InputControl>
            )}
            name="email"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputControl>
                <Input
                  placeholder="miejscowość"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.location}
                />
                {errors.location && (
                  <Text style={styles.error}>Podaj miejscowość</Text>
                )}
              </InputControl>
            )}
            name="location"
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
            <RadioButtons>
              <TouchableOpacity
                onPress={() => {
                  clickHowMenyPeople(1);
                }}
              >
                <ChoiceButton text="1" isSmall isChoice={howMenyPeople[1]} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  clickHowMenyPeople(2);
                }}
              >
                <ChoiceButton text="2" isSmall isChoice={howMenyPeople[2]} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  clickHowMenyPeople(3);
                }}
              >
                <ChoiceButton text="3" isSmall isChoice={howMenyPeople[3]} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  clickHowMenyPeople(4);
                }}
              >
                <ChoiceButton text="4" isSmall isChoice={howMenyPeople[4]} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  clickHowMenyPeople(5);
                }}
              >
                <ChoiceButton text="5" isSmall isChoice={howMenyPeople[5]} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  clickHowMenyPeople("more");
                }}
              >
                <ChoiceButton
                  text="więcej"
                  isSmall
                  isChoice={howMenyPeople["more"]}
                />
              </TouchableOpacity>
            </RadioButtons>
            {showHowMenyPeople ? (
              <View style={styles.input}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern: {
                      value: /^-?[0-9]\d*\.?\d*$/,
                      message: "Podaj porawny e-mail",
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <InputControl>
                      <Input
                        placeholder="ilość osób"
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        error={errors.howMenyPeople}
                      />
                      {errors.howMenyPeople && (
                        <Text style={styles.error}>
                          Podaj prawidłową liczbę osób
                        </Text>
                      )}
                    </InputControl>
                  )}
                  name="howMenyPeople"
                />{" "}
              </View>
            ) : null}
          </InputControl>
          <InputControl>
            <InputCotrolLabel>
              {lenguageTextSwitcher("Na jak długo?")}
            </InputCotrolLabel>
            <RadioButtons>
              <TouchableOpacity
                onPress={() => {
                  clickHowLong("week_1");
                }}
              >
                <ChoiceButton
                  text="tydzień"
                  isSmall
                  isChoice={howLong["week_1"]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  clickHowLong("week_2");
                }}
              >
                <ChoiceButton
                  text="2 tygodnie"
                  isSmall
                  isChoice={howLong["week_2"]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  clickHowLong("week_4");
                }}
              >
                <ChoiceButton
                  text="miesiąc"
                  isSmall
                  isChoice={howLong["week_4"]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  clickHowLong("week_more");
                }}
              >
                <ChoiceButton
                  text="dłuej"
                  isSmall
                  isChoice={howLong["week_more"]}
                />
              </TouchableOpacity>
            </RadioButtons>
          </InputControl>
        </CompositionSection>

        <CompositionSection padding={[35, 30, 9, 30]}>
          <InputControl>
            <InputCotrolLabel>
              {lenguageTextSwitcher("Jakie warunki lokalowe możesz zapewnić?")}
            </InputCotrolLabel>
            <RadioButtons>
              <TouchableOpacity
                onPress={() => {
                  clickConditions("selfContained");
                }}
              >
                <ChoiceButton
                  text="mam wolne mieszkanie"
                  isSmall
                  isChoice={conditions["selfContained"]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  clickConditions("room");
                }}
              >
                <ChoiceButton
                  text="mam wolny pokój"
                  isSmall
                  isChoice={conditions["room"]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  clickConditions("mattress");
                }}
              >
                <ChoiceButton
                  text="mogę “dostawić materac”"
                  isSmall
                  isChoice={conditions["mattress"]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  clickConditions("other");
                }}
              >
                <ChoiceButton
                  text="inne"
                  isSmall
                  isChoice={conditions["other"]}
                />
              </TouchableOpacity>
            </RadioButtons>
          </InputControl>
          <InputControl>
            <InputCotrolLabel>
              {lenguageTextSwitcher("Na którym piętrze zamieszkają?")}
            </InputCotrolLabel>
            <InputCotrolLabelSmall>
              *Osoby starsze mogą mieć problem z wejściem na wysokie piętro
            </InputCotrolLabelSmall>
            <RadioButtons>
              <TouchableOpacity
                onPress={() => {
                  clickFloor(0);
                }}
              >
                <ChoiceButton text="0" isSmall isChoice={floor[0]} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  clickFloor(1);
                }}
              >
                <ChoiceButton text="1" isSmall isChoice={floor[1]} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  clickFloor(2);
                }}
              >
                <ChoiceButton text="2" isSmall isChoice={floor[2]} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  clickFloor(3);
                }}
              >
                <ChoiceButton text="3" isSmall isChoice={floor[3]} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  clickFloor(4);
                }}
              >
                <ChoiceButton text="4" isSmall isChoice={floor[4]} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  clickFloor("bright");
                }}
              >
                <ChoiceButton
                  text="jest winda"
                  isSmall
                  isChoice={floor["bright"]}
                />
              </TouchableOpacity>
            </RadioButtons>
          </InputControl>
          <InputControl>
            <ButtonCta
              onPress={handleSubmit(onSubmit)}
              anchor="Zgłoś swoją gotowość  "
            />
          </InputControl>
        </CompositionSection>
      </form>
    </ScrollView>
  );
};

export default AddAccommodationForm;
