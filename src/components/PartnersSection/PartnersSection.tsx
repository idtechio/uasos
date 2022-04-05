import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import styled, { css } from "styled-components/native";
import { NGO } from "../../consts/partners.json";
import { Theme } from "../../style/theme.config";
import { ButtonCta } from "../Buttons";
import { PartnerCard } from "../PartnerCard";
import SectionTitle from "../SectionTitle";
import { Routes } from "../../consts/router";

type StyledSectionProps = { bgColor?: string; theme: Theme };
const StyledSection = styled.View<StyledSectionProps>`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-vertical: 30px;
  max-width: ${({ theme }) => `${theme.maxContainerWidth + 30}px`};
`;

const StyledSectionTitle = styled(SectionTitle)`
  padding-horizontal: 16px;
`;

const Container = styled.View`
  width: 100%;
  padding-horizontal: 8px;
  flex-direction: row;
  flex-wrap: wrap;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint?.({
      lg: css`
        margin-top: 35px;
      `,
    })}
`;

const PartnerCardWrapper = styled.View`
  width: 100%;
  padding: 8px;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint?.({
      lg: css`
        width: 16.66%;
      `,
      md: css`
        width: 33%;
      `,
      sm: css`
        width: 50%;
      `,
      tablet: css`
        width: 50%;
      `,
    })}
`;

const StyledPartnerCard = styled(PartnerCard)`
  width: 100%;
  aspect-ratio: 1.2;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint?.({
      default: css`
        border: 0;
      `,
      lg: css``,
    })}
`;

const ShowMoreContainer = styled.View`
  width: 100%;
  align-items: center;

  padding-top: 48px;
  padding-bottom: 50px;
  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint?.({
      lg: css`
        padding-top: 64px;
        padding-bottom: 110px;
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
            <StyledPartnerCard source={item.image} alt={item.alt} />
          </PartnerCardWrapper>
        ))}
      </Container>
      <ShowMoreContainer>
        <ButtonCta anchor={t("showMorePartners")} onPress={onCTAPress} />
      </ShowMoreContainer>
    </StyledSection>
  );
}
