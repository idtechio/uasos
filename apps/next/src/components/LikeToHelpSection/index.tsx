import { Trans, useTranslation } from "next-i18next";
import React from "react";
import styled, { css } from "styled-components/native";
import SectionTitle from "../SectionTitle";
import { LikeToHelpSectionProps } from "./types";
import { ButtonCta } from "../Buttons";
import Section from "../Section";
import { useRouter } from "next/router";
import { Theme } from "../../style/theme.config";

const ContentWrapper = styled.View`
  margin-bottom: 80px;
`;

const DetailsText = styled.Text`
  font-size: 14px;
  margin-top: 25px;
  margin-bottom: 50px;
  max-width: 340px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        font-size: 16px;
        margin-bottom: 40px;
      `,
    })}
`;

const SectionInner = styled.Text`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        flex-direction: row;
      `,
    })}
`;

const CTAText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  padding: 0 10px;
`;

const StyledButton = styled(ButtonCta)`
  align-self: flex-start;
`;

export function LikeToHelpSection({ children }: LikeToHelpSectionProps) {
  const { t } = useTranslation("landingPage");
  const router = useRouter();

  const onCTAPress = () => {
    router.push("/host");
  };

  return (
    <Section>
      <SectionInner>
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
        {children && <ContentWrapper>{children}</ContentWrapper>}
      </SectionInner>
    </Section>
  );
}
