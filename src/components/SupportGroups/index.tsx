/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react";

import { useTranslation } from "react-i18next";
import { Dropdown } from "../Dropdown";
import { ShelterCard } from "./ShelterCard";
import { useOffersList } from "../../queries/useOffersList";
import { LoadingCards } from "../SupportSection/LoadingCards";
import { Error } from "..//Inputs/style";

import {
  Layout,
  BackgroundColor,
  YellowTopSplash,
  BlueMiddleSplash,
  YellowBottomSplash,
  DesktopSectionTitle,
  MobileSectionTitle,
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

export const SupportGroups = () => {
  const { t, i18n } = useTranslation();

  const { publicShelters } = i18n.getDataByLanguage(i18n.language) as any;

  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const allShelters: Array<ShelterInfo> = useMemo(
    () => Object.values(publicShelters),
    [publicShelters]
  );

  const {
    data: offersData,
    isError: isOffersError,
    isLoading: isOffersLoading,
  } = useOffersList();

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

  const renderShelders = () => {
    if (isOffersLoading) {
      return <LoadingCards count={1} showImage={true} />;
    } else if (isOffersError) {
      return <Error>{t("could_not_load_details")}</Error>;
    } else
      return (
        offersData &&
        Object.values(offersData).map((shelter) => (
          <ShelterCard name={shelter.name} howToLink={() => {}} />
        ))
      );
  };

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
          <DesktopSectionTitle title={t("others:common.words.supportGroups")} />
          <MobileSectionTitle>
            {t("others:common.words.supportGroups")}
          </MobileSectionTitle>

          <DropdownsWrapper
            style={{
              zIndex: 12,
            }}
          >
            <DropdownWrapper>
              <Label>{t("common:supportGroup.countryOfOrigin")}</Label>
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
              <Label>{t("common:supportGroup.mainLanguage")}</Label>
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
              <Label>{t("common:supportGroup.supportType")}</Label>
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
          </DropdownsWrapper>
          <DropdownsWrapper>
            <DropdownWrapper>
              <Label>{t("common:supportGroup.activity")}</Label>
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
              <Label>{t("common:supportGroup.size")}</Label>
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
              <Label>{t("common:supportGroup.reach")}</Label>
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
          </DropdownsWrapper>

          <SheltersContainer>{renderShelders()}</SheltersContainer>
        </Content>
      </Layout>
    </BackgroundColor>
  );
};
