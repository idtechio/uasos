import { useTranslation } from "next-i18next";
import styled, { css } from "styled-components/native";
import SectionTitle from "../SectionTitle";
import { ButtonCta } from "../Buttons";
import Section from "../Section";
import { useRouter } from "next/router";

const ContentWrapper = styled.View`
  margin-bottom: 80px;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        width: 100%;
        align-items: center;
        justify-content: center;
      `,
    })}
`;

const DetailsText = styled.Text`
  font-size: 14px;
  margin-top: 25px;
  margin-bottom: 50px;
  max-width: 340px;
  color: ${({ theme }) => theme.colors.text};

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        text-align: center;
        font-size: 16px;
        margin-bottom: 40px;
      `,
    })}
`;

const CTAText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

const StyledButton = styled(ButtonCta)`
  align-self: flex-start;
  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        align-self: center;
      `,
    })}
`;

export function LikeToHelpSection() {
  const { t } = useTranslation("landingPage");
  const router = useRouter();

  const onCTAPress = () => {
    router.push("/host");
  };

  return (
    <Section>
      <ContentWrapper>
        <SectionTitle title={t("likeToHelp.title")} />
        <DetailsText>{t("likeToHelp.details")}</DetailsText>
        <StyledButton
          onPress={onCTAPress}
          anchor={<CTAText>{t("likeToHelp.cta")}</CTAText>}
        />
      </ContentWrapper>
    </Section>
  );
}
