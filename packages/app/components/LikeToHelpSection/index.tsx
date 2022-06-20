import { useTranslation, Trans } from "app/common-i18n/use-translation";
import React from "react";
import styled, { css } from "styled-components/native";
import SectionTitle from "../SectionTitle";
import { LikeToHelpSectionProps } from "./types";
import { ButtonCta } from "../Buttons";
import Section from "../Section";
import { useRouter } from "solito/router";
import { Theme } from "app/provider/theme/theme.config";

const ContentWrapper = styled.View<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-bottom: 80px;
      `,
      native: css`
        margin-bottom: ${theme.scale(80)}px;
      `,
    })}
`;

const DetailsText = styled.Text<{ theme: Theme }>`
  font-size: 14px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-top: 25px;
        margin-bottom: 50px;
        max-width: 340px;

        ${({ theme }: { theme: Theme }) =>
          theme.getBreakPoint({
            lg: css`
              font-size: 16px;
              margin-bottom: 40px;
            `,
          })}
      `,
      native: css`
        margin-top: ${theme.scale(25)}px;
        margin-bottom: ${theme.scale(50)}px;
        max-width: ${theme.scale(340)}px;
      `,
    })}
`;

const SectionInner = styled.Text`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  ${({ theme }: { theme: Theme }) =>
    theme.styleFor({
      web: css`
        ${theme.getBreakPoint({
          lg: css`
            flex-direction: row;
          `,
        })}
      `,
    })}
`;

const BoldText = styled.Text`
  font-weight: bold;
`;

const CTAText = styled.Text<{ theme: Theme }>`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  ${({ theme }: { theme: Theme }) =>
    theme.styleFor({
      web: css`
        padding: 0 10px;
      `,
      native: css`
        padding-vertical: ${theme.scale(0)}px;
        padding-horizontal: ${theme.scale(10)}px;
      `,
    })}
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
                bold: <BoldText />,
              }}
            >
              Zgłoś lokal, pokój lub miejsce, które możesz{" "}
              <BoldText>nieodpłatnie</BoldText> udostępnić{" "}
              <BoldText>ofiarom wojny w Ukrainie</BoldText>
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
