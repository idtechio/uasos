import * as React from "react";
import styled, { css } from "styled-components/native";
import { ButtonCta } from "../Buttons";
import heroImage from "../../../public/hero.png";
import { signIn } from "next-auth/react";
import { useTranslation } from "next-i18next";

const Container = styled.View`
  width: 100%;
`;

const ContentWrapper = styled.View`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => `${theme.maxContainerWidth}px`};
`;

const TextContainer = styled.View`
  padding: 35px;
  max-width: 740px;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  margin-top: 20px;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        font-size: 44px;
        line-height: 52px;
      `,
    })}
`;

const SubTitle = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
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

const Image = styled.ImageBackground`
  width: 100%;
  min-height: 390px;
  height: 650px;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        justify-content: center;
        align-items: flex-start;
      `,
    })}
`;

const HeroImageOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(44, 95, 161, 0.4);
`;

const ButtonContainer = styled.View`
  align-items: flex-start;
  margin-top: 10px;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        margin-top: 28px;
        flex-direction: row;
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

const HeroImage = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Image source={heroImage.src}>
        <HeroImageOverlay />
        <ContentWrapper>
          <TextContainer>
            <Title accessibilityRole="heading" accessibilityLevel={1}>
              {t("landingPage.hero.title")}
            </Title>

            <SubTitle>{t("landingPage.hero.description")}</SubTitle>

            <ButtonContainer>
              <ButtonStyle
                first
                anchor={t("landingPage.hero.lookingForHelp")}
                onPress={() => signIn()}
              />
              <ButtonStyle anchor={t("landingPage.hero.shareHelp")} />
            </ButtonContainer>
          </TextContainer>
        </ContentWrapper>
      </Image>
    </Container>
  );
};

export default HeroImage;

const Wraper = styled.View`
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
`;
