import { Trans, useTranslation } from "next-i18next";
import styled, { css } from "styled-components/native";
import SectionTitle from "../SectionTitle";
import { ButtonCta } from "../Buttons";
import Section from "../Section";
import { useRouter } from "next/router";

const ContentWrapper = styled.View`
  margin-bottom: 80px;
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
        font-size: 16px;
        margin-bottom: 40px;
      `,
    })}
`;

const CTAText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  padding: 0 10px;
`;

const StyledButton = styled(ButtonCta)`
  align-self: flex-start;
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
        <DetailsText>
          <Trans
            t={t}
            i18nKey="likeToHelp.details"
            components={{
              bold: <strong />,
            }}
          >
            Zgłoś lokal, pokój lub miejsce, które możesz{" "}
            <strong>nieodpłatnie</strong> udostępnić{" "}
            <strong>ofiarom wojny w Ukrainie</strong>
          </Trans>
        </DetailsText>
        <StyledButton
          onPress={onCTAPress}
          anchor={<CTAText>{t("likeToHelp.cta")}</CTAText>}
        />
      </ContentWrapper>
    </Section>
  );
}
