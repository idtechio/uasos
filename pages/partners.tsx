import * as React from "react";
import { ScrollView, Image } from "react-native";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Card from "../src/components/Card";
import Header from "../src/components/Header";
import Section from "../src/components/Section";
import SectionTitle from "../src/components/SectionTitle";
import styled, { css } from "styled-components/native";
import GoBack from "../src/components/GoBack";

const PARTNERS = [
  {
    alt: "związek ukraińców w polsce",
    image: "/partners/1.png",
  },
  {
    alt: "szlachetna paczka",
    image: "/partners/6.png",
  },
  {
    alt: "ukraiński dom w warszawie",
    image: "/partners/2.png",
  },
  {
    alt: "fundacja nasz wybór",
    image: "/partners/3.png",
  },
  {
    alt: "polskie forum migracyjne",
    image: "/partners/5.png",
  },
  {
    alt: "polska akcja humanitarna",
    image: "/partners/4.png",
  },
  {
    alt: "związek miast polskich",
    image: "/partners/8.png",
  },
  {
    alt: "unia metropolii polskich",
    image: "/partners/9.png",
  },
  {
    alt: "tech to the rescue",
    image: "/partners/10.png",
  },
  {
    alt: "fundacja stocznia",
    image: "/partners/7.png",
  },
  {
    alt: "",
    image: "/partners/13.png",
  },
  {
    alt: "bnp paribas",
    image: "/partners/11.png",
  },
  {
    alt: "le pont",
    image: "/partners/14.png",
  },
  {
    alt: "kik warszawa",
    image: "/partners/15.png",
  },
  {
    alt: "auschwitz pledge foundation",
    image: "/partners/17.png",
  },
  {
    alt: "techsoup",
    image: "/partners/16.png",
  },
  {
    alt: "id advisory",
    image: "/partners/19.png",
  },
  {
    alt: "bcg platinion",
    image: "/partners/12.png",
  },
  {
    alt: "clevsoft",
    image: "/partners/18.png",
  },
];

const YellowDotContainer = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  background-color: transparent;
  overflow: hidden;
`;

const YellowDot = styled.Image`
  height: 500px;
  width: 700px;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        height: 724px;
        width: 1022px;
        top: -50%;
        right: -20%;
      `,
    })}
`;

const BlueDotContainer = styled.View`
  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: transparent;
        overflow: hidden;
      `,
    })}
`;

const BlueDot = styled.Image`
  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        height: 724px;
        width: 1022px;
        right: -50%;
      `,
    })}
`;

const PartnersContainer = styled.View`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 15px;
  row-gap: 10px;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        margin-top: 60px;
        grid-template-columns: repeat(8, minmax(0, 1fr));
      `,
    })}
`;

const Item = styled(Card)`
  position: relative;
  height: 70px;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        height: 80px;
      `,
    })}
`;

const PartnersPage = () => {
  const { t } = useTranslation("landingPage");

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Header />

      <Section>
        <GoBack />
      </Section>

      <YellowDotContainer>
        <YellowDot
          source="/splash_yellow.png"
          style={{ transform: "translateY(-50%) translateX(30%)" }}
        />
      </YellowDotContainer>

      <Section>
        <SectionTitle title={t("supportingPartners")} />

        <PartnersContainer>
          {PARTNERS.map((partner) => (
            <Item key={partner.image}>
              <Image
                // @ts-ignore
                source={partner.image}
                alt={partner.alt}
                resizeMode="contain"
                style={{ height: "100%" }}
              />
            </Item>
          ))}
        </PartnersContainer>
      </Section>

      <BlueDotContainer>
        <BlueDot
          source="/splash_blue.png"
          style={{ transform: "translateY(50%)" }}
        />
      </BlueDotContainer>
    </ScrollView>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default PartnersPage;
