import * as React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import styled, { css } from "styled-components/native";
import Section from "../src/components/Section";
import SectionTitle from "../src/components/SectionTitle";
import { PartnerCard } from "../src/components/PartnerCard";
import { CompositionAppBody } from "../src/components/Compositions";
import PARTNERS from "../src/consts/partners.json";
import { withSession } from "../src/helpers/withSession";
import { GetServerSideProps } from "next";
import GoBack from "../src/components/GoBack";

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
    <CompositionAppBody>
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
    </CompositionAppBody>
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
