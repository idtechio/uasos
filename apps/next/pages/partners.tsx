import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import styled, { css } from "styled-components/native";
import Section from "../src/components/Section";
import SectionTitle from "../src/components/SectionTitle";
import { PartnerCard } from "../src/components/PartnerCard";
import { CompositionAppBody } from "../src/components/Compositions";
import {
  NGO,
  INITIATORS,
  MEDIA_PARTNERS,
  PARTNERS,
} from "../src/consts/partners.json";
import { uasosInMedia } from "../src/consts/in-media.json";
import { withSession } from "../src/helpers/withSession";
import { GetServerSideProps } from "next";
import { Theme } from "../src/style/theme.config";
import GoBack from "../src/components/GoBack";

const PartnersContainer = styled.View`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  align-items: center;
  column-gap: 15px;
  row-gap: 10px;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        margin-top: 10px;
        grid-template-columns: repeat(8, minmax(0, 1fr));
      `,
      md: css`
        grid-template-columns: repeat(3, minmax(0, 1fr));
      `,
      sm: css`
        grid-template-columns: repeat(3, minmax(0, 1fr));
      `,
      tablet: css`
        grid-template-columns: repeat(2, minmax(0, 1fr));
      `,
      mobile: css`
        grid-template-columns: repeat(2, minmax(0, 1fr));
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
        <SectionTitle title={t("ngoPartners")} />
        <PartnersContainer>
          {NGO.map((partner, index) => (
            <StyledPartnerCard
              key={index}
              alt={partner.alt}
              href={partner.href}
              source={partner.image}
            />
          ))}
        </PartnersContainer>
      </Section>

      <Section>
        <SectionTitle title={t("projectInitiators")} />
        <PartnersContainer>
          {INITIATORS.map((partner, index) => (
            <StyledPartnerCard
              key={index}
              alt={partner.alt}
              href={partner.href}
              source={partner.image}
            />
          ))}
        </PartnersContainer>
      </Section>

      <Section>
        <SectionTitle title={t("partnersMedia")} />
        <PartnersContainer>
          {MEDIA_PARTNERS.map((partner, index) => (
            <StyledPartnerCard
              key={index}
              alt={partner.alt}
              href={partner.href}
              source={partner.image}
            />
          ))}
        </PartnersContainer>
      </Section>

      <Section>
        <SectionTitle title={t("partners")} />
        <PartnersContainer>
          {PARTNERS.map((partner, index) => (
            <StyledPartnerCard
              key={index}
              alt={partner.alt}
              href={partner.href}
              source={partner.image}
            />
          ))}
        </PartnersContainer>
      </Section>

      <Section>
        <SectionTitle title="uaSOS in media" />
        <PartnersContainer>
          {uasosInMedia.map((partner, index) => (
            <StyledPartnerCard
              key={index}
              alt={partner.alt}
              href={partner.href}
              source={partner.image}
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
      ...(locale && (await serverSideTranslations(locale))),
    },
  })
);

export default PartnersPage;
