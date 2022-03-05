import { useTranslation } from "next-i18next";
import Link from "next/link";
import { View } from "react-native";
import styled, { css } from "styled-components/native";
import PARTNERS from "../../consts/partners.json";
import { ButtonCta } from "../Buttons";
import { PartnerCard } from "../PartnerCard";
import SectionTitle from "../SectionTitle";

const StyledSection = styled.View`
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

  ${({ theme }) =>
    theme.getBreakPoint?.({
      lg: css`
        margin-top: 35px;
      `,
    })}
`;

const PartnerCardWrapper = styled.View`
  width: 33%;
  padding: 8px;

  ${({ theme }) =>
    theme.getBreakPoint?.({
      lg: css`
        width: 16.66%;
      `,
    })}
`;

const StyledPartnerCard = styled(PartnerCard)`
  width: 100%;
  aspect-ratio: 1.2;

  ${({ theme }) =>
    theme.getBreakPoint?.({
      default: css`
        border: 0;
      `,
      lg: true,
    })}
`;

const ShowMoreContainer = styled.View`
  width: 100%;
  align-items: center;

  padding-top: 48px;
  padding-bottom: 50px;
  ${({ theme }) =>
    theme.getBreakPoint?.({
      lg: css`
        padding-top: 64px;
        padding-bottom: 110px;
      `,
    })}
`;

interface Props {}

export function PartnersSection({}: Props) {
  const { t } = useTranslation("landingPage");
  return (
    <StyledSection bgColor="#fff">
      <StyledSectionTitle title={t("supportingPartners")} />
      <Container>
        {PARTNERS.slice(0, 6).map((item, index) => (
          <PartnerCardWrapper key={index}>
            <StyledPartnerCard source={item.image} alt={item.alt} />
          </PartnerCardWrapper>
        ))}
      </Container>
      <ShowMoreContainer>
        <Link href="/partners" passHref>
          <ButtonCta anchor={t("showMorePartners")} />
        </Link>
      </ShowMoreContainer>
    </StyledSection>
  );
}
