import * as React from "react";
import { ScrollView } from "react-native";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import styled, { css } from "styled-components/native";
import Header from "../src/components/Header";
import Section from "../src/components/Section";
import SectionTitle from "../src/components/SectionTitle";
import GoBack from "../src/components/GoBack";
import { PartnerCard } from "../src/components/PartnerCard";
import PARTNERS from "../src/consts/partners.json";
import { withSession } from "../src/helpers/withSession";
import { GetServerSideProps } from "next";

const PartnersContainer = styled.View`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  column-gap: 15px;
  row-gap: 10px;
  margin-top: 66px;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        margin-top: 60px;
        grid-template-columns: repeat(8, minmax(0, 1fr));
      `,
    })}
`;

const StyledPartnerCard = styled(PartnerCard)`
  aspect-ratio: 1.625;
`;

const PartnersPage = () => {
  const { t } = useTranslation("landingPage");

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Header />

      <Section>
        <GoBack />
      </Section>

      <Section>
        <SectionTitle title={t("supportingPartners")} />

        <PartnersContainer>
          {PARTNERS.map((partner, index) => (
            <StyledPartnerCard
              key={index}
              source={partner.image}
              alt={partner.alt}
            />
          ))}
        </PartnersContainer>
      </Section>
    </ScrollView>
  );
};

export const getServerSideProps: GetServerSideProps = withSession(
  async ({ locale }, session) => ({
    props: {
      session,
      ...(await serverSideTranslations(locale)),
    },
  })
);

export default PartnersPage;
