import * as React from "react";
import styled, { css } from "styled-components/native";
import { ButtonCta } from "../Buttons";
import splashYellowImage from "../../../public/splash_yellow1.png";
import splashBlueImage from "../../../public/splash_blue.png";
import { signIn, useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Container = styled.View`
  width: 100%;
`;

const ContentWrapper = styled.View`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => `${theme.maxContainerWidth}px`};
`;

const TextContainer = styled.View`
  padding: 16px;
  max-width: 740px;
`;

const Title = styled.Text`
  color: ${({ theme }) => `${theme.colors.text}`};
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  margin-top: 130px;
  max-width: 300px;

  ${({ theme }) =>
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

  ${({ theme }) =>
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
  color: ${({ theme }) => `${theme.colors.text}`};
  margin-top: 30px;

  ${({ theme }) =>
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

const ImageSplashYellow = styled.Image`
  position: absolute;
  width: 100%;
  height: 650px;
  top: -220px;
  left: -175px;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        justify-content: center;
        align-items: flex-start;
        top: -100px;
        left: -300px;
      `,
    })}
`;

const ImageSplashBlue = styled.Image`
  position: absolute;
  width: 100%;
  height: 440px;
  top: 300px;
  right: -50%;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        justify-content: center;
        align-items: flex-start;
      `,
    })}
`;

const ButtonContainer = styled.View`
  align-items: flex-start;
  margin-top: 50px;
  margin-bottom: 145px;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        margin-top: 28px;
        flex-direction: row;
        margin-top: 104px;
      `,
    })}
`;

const ButtonStyle = styled(ButtonCta)`
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
  const { data: session } = useSession();
  return (
    <Container>
      <ImageSplashYellow source={splashYellowImage.src} resizeMode="contain" />
      <ImageSplashBlue source={splashBlueImage.src} resizeMode="contain" />
      <ContentWrapper>
        <TextContainer>
          <Title accessibilityRole="heading" accessibilityLevel={1}>
            {t("projectIntention.title")}
          </Title>

          <SubTitleWrapper>
            <SubTitle>{t("projectIntention.description_part1")}</SubTitle>
            <BoldSubTitle>{t("projectIntention.freeOfCharge")}</BoldSubTitle>
            <SubTitle>{t("projectIntention.description_part2")}</SubTitle>
          </SubTitleWrapper>

          <ButtonContainer>
            {session ? (
              <>
                <Link href="/guest">
                  <a>
                    <ButtonStyle
                      colorOposite
                      anchor={t("projectIntention.lookingForHelp")}
                    />
                  </a>
                </Link>
                <Link href="/host">
                  <a>
                    <ButtonStyle
                      colorOposite
                      anchor={t("projectIntention.shareHelp")}
                    />
                  </a>
                </Link>
              </>
            ) : (
              <ButtonStyle
                first
                colorOposite
                anchor={t("shareLocation")}
                onPress={() => signIn()}
              />
            )}
          </ButtonContainer>
        </TextContainer>
      </ContentWrapper>
    </Container>
  );
};

export default LandingProjectIntention;
