import React from "react";
import { useTranslation } from "app/common-i18n/use-translation";
import { useRouter } from "solito/router";
import styled, { css } from "styled-components/native";
import { NGO } from "../../consts/partners.json";
import { Theme } from "app/provider/theme/theme.config";
import { ButtonCta } from "../Buttons";
import { PartnerCard } from "../PartnerCard";
import SectionTitle from "../SectionTitle";
import { Routes } from "../../consts/router";

type StyledSectionProps = { bgColor?: string; theme: Theme };
const StyledSection = styled.View<StyledSectionProps>`
  position: relative;
  width: 100%;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin: 0 auto;
        padding-vertical: 30px;
        max-width: ${({ theme }) => `${theme.maxContainerWidth + 30}px`};
      `,
      native: css`
        margin-vertical: 0;
        align-self: center;
        padding-vertical: ${theme.scale(30)}px;
        max-width: ${({ theme }) =>
          `${theme.scale(theme.maxContainerWidth + 30)}px`};
      `,
    })}
`;

const StyledSectionTitle = styled(SectionTitle)<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding-left: 16px;
        padding-right: 16px;
      `,
      native: css`
        padding-horizontal: ${theme.scale(16)}px;
      `,
    })}
`;

const Container = styled.View<{ theme: Theme }>`
  width: 100%;
  padding-horizontal: 8px;
  flex-direction: row;
  flex-wrap: wrap;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding-left: 8px;
        padding-right: 8px;

        ${theme.getBreakPoint?.({
          lg: css`
            margin-top: 35px;
          `,
        })}
      `,
      native: css`
        padding-horizontal: ${theme.scale(8)}px;
      `,
    })}
`;

const PartnerCardWrapper = styled.View<{ theme: Theme }>`
  width: 50%;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 8px;

        ${theme.getBreakPoint?.({
          lg: css`
            width: 16.66%;
          `,
          md: css`
            width: 25%;
          `,
          sm: css`
            width: 33%;
          `,
          tablet: css`
            width: 33%;
          `,
        })}
      `,
      native: css`
        padding: ${theme.scale(8)}px;
      `,
    })}
`;

const StyledPartnerCard = styled(PartnerCard)<{ theme: Theme }>`
  width: 100%;
  aspect-ratio: 1.2;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        ${theme.getBreakPoint?.({
          default: css`
            border: 0;
          `,
        })}
      `,
    })}
`;

const ShowMoreContainer = styled.View<{ theme: Theme }>`
  width: 100%;
  align-items: center;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding-top: 48px;
        padding-bottom: 50px;
        ${theme.getBreakPoint?.({
          lg: css`
            padding-top: 64px;
            padding-bottom: 110px;
          `,
        })}
      `,
      native: css`
        padding-top: ${theme.scale(48)}px;
        padding-bottom: ${theme.scale(50)}px;
      `,
    })}
`;

export function PartnersSection() {
  const { t } = useTranslation("landingPage");
  const router = useRouter();

  const onCTAPress = () => {
    router.push(Routes.PARTNERS);
  };

  return (
    <StyledSection bgColor="#fff">
      <StyledSectionTitle title={t("supportingPartners")} />
      <Container>
        {NGO.slice(0, 6).map((item, index) => (
          <PartnerCardWrapper key={index}>
            <StyledPartnerCard
              alt={item.alt}
              href={item.href}
              source={item.image}
            />
          </PartnerCardWrapper>
        ))}
      </Container>
      <ShowMoreContainer>
        <ButtonCta anchor={t("showMorePartners")} onPress={onCTAPress} />
      </ShowMoreContainer>
    </StyledSection>
  );
}
