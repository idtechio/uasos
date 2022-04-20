/* eslint-disable @typescript-eslint/no-explicit-any */
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

import { getFilteredArray, ShelterInfo } from "./utils";

const SPLASH = {
  blue: "/assets/splash_blue.png",
  yellow: "/assets/splash_yellow.png",
};

const commonSelectStyle = {
  height: 40,
};

export const PublicSheltersLayout = () => {
  const { t, i18n } = useTranslation();

  const { publicShelters } = i18n.getDataByLanguage(i18n.language) as any;

  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const allShelters: Array<ShelterInfo> = useMemo(
    () => Object.values(publicShelters),
    [publicShelters]
  );

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
          <DesktopSectionTitle
            title={t("others:common.words.publicShelters")}
          />
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
            {selectedCountry && (
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
            )}
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
                howToGetThere={shelter.howToGetThere}
              />
            ))}
          </SheltersContainer>
        </Content>
      </Layout>
    </BackgroundColor>
  );
};
