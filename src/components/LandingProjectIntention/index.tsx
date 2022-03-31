import { useRouter } from "next/router";
import styled, { css } from "styled-components/native";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { ButtonCta } from "../Buttons";
import { Routes } from "../../consts/router";
import { Theme } from "../../style/theme.config";
import { AuthContext } from "../../../pages/_app";
import { useContext } from "react";

const Container = styled.View`
  width: 100%;
`;

const ContentWrapper = styled.View`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }: { theme: Theme }) => `${theme.maxContainerWidth}px`};
`;

const TextContainer = styled.View`
  padding: 16px;
  max-width: 740px;
`;

const Title = styled.Text`
  color: ${({ theme }: { theme: Theme }) => `${theme.colors.text}`};
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  margin-top: 130px;
  max-width: 300px;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        font-size: 44px;
        line-height: 52px;
        max-width: none;
        margin-top: 88px;
      `,
    })}
`;

const SubTitleWrapper = styled.View`
  margin-top: 10px;
  display: inline-block;
  max-width: 300px;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        margin-top: 40px;
        max-width: none;
      `,
    })}
`;

const SubTitle = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }: { theme: Theme }) => `${theme.colors.text}`};
  margin-top: 30px;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        font-size: 20px;
        line-height: 28px;
        margin-top: 40px;
      `,
    })}
`;

const BoldSubTitle = styled(SubTitle)`
  font-weight: 700;
`;

const ButtonContainer = styled.View`
  align-items: flex-start;
  margin-top: 50px;
  margin-bottom: 145px;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        margin-top: 28px;
        flex-direction: row;
        margin-top: 104px;
      `,
    })}
`;

const ButtonStyle = styled(ButtonCta)<{ first?: boolean; theme: Theme }>`
  margin-top: 17px;
  font-size: 16px;

  ${({ theme, first }) =>
    !first &&
    theme.getBreakPoint({
      lg: css`
        margin-left: 20px;
      `,
    })}
`;

const LandingProjectIntention = () => {
  const { t } = useTranslation("landingPage");
  const router = useRouter();
  const { identity } = useContext(AuthContext);

  return (
    <Container>
      <ContentWrapper>
        <TextContainer>
          {/* @ts-expect-error TODO: fix prop types */}
          <Title accessibilityRole="heading" accessibilityLevel={1}>
            {t("projectIntention.title")}
          </Title>

          <SubTitleWrapper>
            <SubTitle>{t("projectIntention.description_part1")}</SubTitle>
            <BoldSubTitle> {t("projectIntention.freeOfCharge")} </BoldSubTitle>
            <SubTitle>{t("projectIntention.description_part2")}</SubTitle>
          </SubTitleWrapper>

          <ButtonContainer>
            {identity ? (
              <>
                <Link href="/guest">
                  <a>
                    <ButtonStyle
                      colorOpposite
                      anchor={t("projectIntention.lookingForHelp")}
                    />
                  </a>
                </Link>
                <Link href="/host">
                  <a>
                    <ButtonStyle
                      colorOpposite
                      anchor={t("projectIntention.shareHelp")}
                    />
                  </a>
                </Link>
              </>
            ) : (
              <ButtonStyle
                first
                colorOpposite
                anchor={t("common:shareLocation")}
                onPress={(event) => {
                  event?.preventDefault();
                  router.push(`/${router?.locale}${Routes.SIGN_IN}`);
                }}
              />
            )}
          </ButtonContainer>
        </TextContainer>
      </ContentWrapper>
    </Container>
  );
};

export default LandingProjectIntention;
