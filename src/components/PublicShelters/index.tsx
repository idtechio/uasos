import { useMemo, useState } from "react";

import { useTranslation } from "react-i18next";
import { Dropdown } from "../Dropdown";
import { ShelterCard } from "./ShelterCard";

import {
  Layout,
  BackgroundColor,
  YellowTopSplash,
  BlueMiddleSplash,
  YellowBottomSplash,
  DesktopSectionTitle,
  MobileSectionTitle,
  Description,
  Wrapper,
  DropdownsWrapper,
  Content,
  Label,
  SheltersContainer,
  DropdownWrapper,
} from "./styles";

import { getFilteredArray } from "./utils";

const SPLASH = {
  blue: "/assets/splash_blue.png",
  yellow: "/assets/splash_yellow.png",
};

const commonSelectStyle = {
  height: 40,
};

const mock_data = {
  "001": {
    name: "Warsaw - Torwar",
    address: "Łazienkowska 6A",
    city: "Warsaw",
    occupancy: "150",
    phoneNumber: "+48225298777",
    howToGetThere:
      "https://www.google.com/maps/place/COS+Torwar/@52.2224061,21.0422198,15z/data=!4m2!3m1!1s0x0:0x120bb57e07d1fd45?sa=X&ved=2ahUKEwicl4e6q5j3AhWvtYsKHdZFA9MQ_BJ6BAhQEAU",
    country: "Poland",
  },
  "002": {
    name: "Warsaw - Torwar",
    address: "Łazienkowska 6A",
    city: "Gong-Kong",
    occupancy: "150",
    phoneNumber: "+48225298777",
    howToGetThere:
      "https://www.google.com/maps/place/COS+Torwar/@52.2224061,21.0422198,15z/data=!4m2!3m1!1s0x0:0x120bb57e07d1fd45?sa=X&ved=2ahUKEwicl4e6q5j3AhWvtYsKHdZFA9MQ_BJ6BAhQEAU",
    country: "LALLA",
  },
  "003": {
    name: "Warsaw - dasdsadas",
    address: "Łazienkowska 6A",
    city: "Gong-KUla",
    occupancy: "150",
    phoneNumber: "+48225298777",
    howToGetThere:
      "https://www.google.com/maps/place/COS+Torwar/@52.2224061,21.0422198,15z/data=!4m2!3m1!1s0x0:0x120bb57e07d1fd45?sa=X&ved=2ahUKEwicl4e6q5j3AhWvtYsKHdZFA9MQ_BJ6BAhQEAU",
    country: "LALLA",
  },
};

export const PublicSheltersLayout = () => {
  const { t } = useTranslation();

  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const allShelters = useMemo(() => Object.values(mock_data), []);

  const countries = useMemo(
    () =>
      allShelters.map((shelter) => ({
        value: shelter.country,
        label: shelter.country,
      })),
    [allShelters]
  );

  const cities = useMemo(
    () =>
      allShelters.reduce(
        (array: Array<{ label: string; value: string }>, shelter) => {
          if (shelter.country === selectedCountry) {
            array.push({
              value: shelter.city,
              label: shelter.city,
            });
          }

          return array;
        },
        []
      ),
    [allShelters, selectedCountry]
  );

  const handleChooseCountry = (value: string) => {
    setSelectedCountry(value);
    setSelectedCity("");
  };
  const handleChooseCity = (value: string) => setSelectedCity(value);

  const shelters = useMemo(
    () =>
      getFilteredArray(allShelters, {
        country: selectedCountry,
        city: selectedCity,
      }),
    [allShelters, selectedCountry, selectedCity]
  );

  return (
    <BackgroundColor>
      <YellowTopSplash
        // @ts-expect-error TODO: fix prop types
        source={SPLASH.yellow}
      />
      <BlueMiddleSplash
        // @ts-expect-error TODO: fix prop types
        source={SPLASH.blue}
      />
      <YellowBottomSplash
        // @ts-expect-error TODO: fix prop types
        source={SPLASH.yellow}
      />

      <Layout>
        <Content>
          <DesktopSectionTitle title="others:common.words.publicShelters" />
          <MobileSectionTitle>
            {t("others:common.words.publicShelters")}
          </MobileSectionTitle>

          <Wrapper>
            <Description>{t("others:publicShelters.description")}</Description>

            <Description>
              <b>{t("others:publicShelters.addShelterMail")}</b>
            </Description>
          </Wrapper>

          <DropdownsWrapper
            style={{
              zIndex: 12,
            }}
          >
            <DropdownWrapper>
              <Label>
                {t("common:refugeeAddForm.countryOfRefugePlaceholder")}
              </Label>
              <Dropdown
                styles={{
                  select: commonSelectStyle,
                }}
                data={countries}
                selected={selectedCountry}
                placeholder={t("hostAdd.country")}
                itemPressFunction={handleChooseCountry}
              />
            </DropdownWrapper>
            <DropdownWrapper>
              <Label>{t("common:refugeeAddForm.cityOfRefugeLabel")}</Label>
              <Dropdown
                styles={{
                  select: commonSelectStyle,
                }}
                data={cities}
                selected={selectedCity}
                itemPressFunction={handleChooseCity}
                placeholder={t("refugeeAddForm.cityPlaceholder")}
              />
            </DropdownWrapper>
          </DropdownsWrapper>

          <SheltersContainer>
            {shelters.map((shelter) => (
              <ShelterCard
                name={shelter.name}
                city={shelter.city}
                country={shelter.country}
                key={shelter.howToGetThere}
                occupancy={shelter.occupancy}
                phoneNumber={shelter.phoneNumber}
              />
            ))}
          </SheltersContainer>
        </Content>
      </Layout>
    </BackgroundColor>
  );
};
