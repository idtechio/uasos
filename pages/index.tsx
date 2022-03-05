import * as React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import Header from "../src/components/Header";
import HeroImage from "../src/components/HeroImage";
import Section from "../src/components/Section";
import PartnersCarousel from "../src/components/PartnersCarousel";
import WhatWeDoSection from "../src/components/LandingSections/WhatWeDo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import LandingFooter from "../src/components/LandingFooter/LandingFooter";
import LandingMatchedSection from "../src/components/LandingMatchedSection/LandingMatchedSection";
import SectionTitle from "../src/components/SectionTitle";
import { LikeToHelpSection } from "../src/components/LikeToHelpSection";
import { css } from "styled-components";
import { CompositionAppBody } from "../src/components/Compositions";
import Footer from "../src/components/Footer";

const HeroImageWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

const PartnersCarouselWrapper = styled.View`
  width: 100%;
  max-width: 100%;
  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
      width: auto,
      max-width: auto
    `,
    })}
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

const StyledScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

function Landing() {
  const { t } = useTranslation("landingPage");

  return (
    <CompositionAppBody>
      <StyledScrollView>
        <HeroImageWrapper>
          <HeroImage />
          <ElipseEffect />
        </HeroImageWrapper>
        <Section bgColor="#fff">
          <SectionTitle title={t("supportingPartners")} />
          <PartnersCarouselWrapper>
            <PartnersCarousel />
          </PartnersCarouselWrapper>
        </Section>
        <WhatWeDoSection />
        <LikeToHelpSection />
        <Footer />
      </StyledScrollView>
    </CompositionAppBody>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale)) },
});

export default Landing;
