import * as React from "react";
import styled from "styled-components/native";
import Header from "../src/components/Header";
import Section from "../src/components/Section";
import PartnersCarousel from "../src/components/PartnersCarousel";
import WhatWeDoSection from "../src/components/LandingSections/WhatWeDo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import SectionTitle from "../src/components/SectionTitle";
import { LikeToHelpSection } from "../src/components/LikeToHelpSection";
import { css } from "styled-components";
import { CompositionAppBody } from "../src/components/Compositions";
import Footer from "../src/components/Footer";
import LandingProjectIntention from "../src/components/LandingProjectIntention";

const LandingProjectIntentionWrapper = styled.View`
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

const StyledScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

function Landing() {
  const { t } = useTranslation("landingPage");

  return (
    <CompositionAppBody>
      <StyledScrollView>
        <Header />
        <LandingProjectIntentionWrapper>
          <LandingProjectIntention />
        </LandingProjectIntentionWrapper>
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
