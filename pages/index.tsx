import * as React from "react";
import { ScrollView, View, Text } from "react-native";
import styled from "styled-components/native";
import styledWeb from "styled-components";
import { ButtonCta } from "../src/components/Buttons";
import Header from "../src/components/Header";
import HeroImage from "../src/components/HeroImage";
import Section from "../src/components/Section";
import image1 from "../public/image1.png";
import PartnersCarousel from "../src/components/PartnersCarousel";
import Container from "../src/components/Container";
import WhatWeDoSection from "../src/components/LandingSections/WhatWeDo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Tile from "../src/components/Tile";
import SosuaLogoWhite from "../src/style/svgs/sosua_logo_white.svg";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "../src/components/LanguageSwitcher";
import { colors } from "../src/style/landingPageStyle";

const FooterHeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HorizontalLine = styled.View`
  margin: 10px 0;
  border: 1px solid #fff;
`;

const FlagsWrapper = styled.View`
  flex-direction: row;
`;

const FlagWrapper = styled.View`
  margin-right: 8px;
`;

const FooterContentWrapper = styled.View`
  flex-direction: column;
`;

const FooterContentRow = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

const FooterItem = styledWeb.a`
  color: white;
  flex: 1;
  font-size: 12px;
  line-height: 24px;
  text-decoration-line: underline;
`;

const ButtonContainer = styled.View`
  margin-top: 25px;
  align-items: flex-start;
`;
const Image = styled.Image`
  flex: 1;
`;

const InfographicWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.secondaryBlue};
  height: 260px;
  padding: 20px;
  max-width: 323px;
`;

const HeroImageWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

const ElipseEffect = styled.View`
  height: 100px;
  width: 140%;
  top: -20px;
  margin-bottom: -70px;
  background-color: white;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
`;

const MatchedCardTitle = styled.Text`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.blue};
`;

const MatchedCardsWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-right: 16px;
  margin-top: 16px;
`;

const Wraper = styled.View`
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
`;

function Landing() {
  const { t } = useTranslation();
  return (
    <ScrollView>
      <Header />
      <HeroImageWrapper>
        <HeroImage />
      </HeroImageWrapper>

      <Section title={t("landingPage.supportingPartners")} bgColor="#fff">
        <Wraper>
          <PartnersCarousel />
        </Wraper>
      </Section>

      <WhatWeDoSection />

      <Section title={t("landingPage.likeToHelp.title")} bgColor="#fff">
        <Wraper>
          <Container>
            {t("landingPage.likeToHelp.details")}
            <ButtonContainer>
              <ButtonCta anchor={t("register1")} />
            </ButtonContainer>
          </Container>
        </Wraper>
      </Section>

      <InfographicWrapper>
        <Image
          source={image1.src}
          resizeMode="fixed"
          alt="infographic"
          width={353}
          height={220}
        />
      </InfographicWrapper>
      <Section bgColor={colors.yellow}>
        <Container>
          <MatchedCardTitle>
            {t("landingPage.weMatched.title")}
          </MatchedCardTitle>
        </Container>

        <MatchedCardsWrapper>
          <Tile
            value="4 329"
            text={t("landingPage.weMatched.cards.helpedPeople")}
          />
          <Tile
            value="51 329"
            text={t("landingPage.weMatched.cards.lookingForHelp")}
          />
          <Tile
            value="1 731"
            text={t("landingPage.weMatched.cards.currentOffers")}
          />
        </MatchedCardsWrapper>
      </Section>

      <Section bgColor="#0057B8">
        <Container>
          <FooterHeaderWrapper>
            <SosuaLogoWhite />
            <FlagsWrapper>
              <LanguageSwitcher />
            </FlagsWrapper>
          </FooterHeaderWrapper>
          <HorizontalLine />
          <FooterContentWrapper>
            <FooterContentRow>
              <Link href="./" passHref>
                <FooterItem>{t("rodo")}</FooterItem>
              </Link>
              <Link href="./" passHref>
                <FooterItem href="./">{t("register1")}</FooterItem>
              </Link>
            </FooterContentRow>
            <FooterContentRow>
              <Link href="./" passHref>
                <FooterItem href="./">{t("privacyPolicy")}</FooterItem>
              </Link>
              <Link href="./" passHref>
                <FooterItem href="./">{t("patrons")}</FooterItem>
              </Link>
            </FooterContentRow>
          </FooterContentWrapper>
        </Container>
      </Section>
    </ScrollView>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale)) },
});

export default Landing;
