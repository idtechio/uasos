import styled, { css } from "styled-components/native";
import { Theme } from "../../style/theme.config";
import { Splash } from "../../src/components/Slash";
import { ButtonCta } from "../../src/components/Buttons";

export const TopLeftBlueSplash = styled(Splash)`
  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        max-width: 512px;
      `,
    })}
`;

export const TopLeftBlueSplashPosition = css`
  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        width: 100%;
        top: 15%;
        left: -70%;
      `,
    })}
`;

export const TopRightYellowSplash = styled(Splash)`
  right: -10%;
  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      default: css`
        max-width: 512px;
      `,
      lg: css`
        max-width: 512px;
      `,
    })}
`;

export const TopRightYellowSplashPosition = css`
  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        width: 100%;
        top: 40%;
      `,
    })}
`;

export const Content = styled.View`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding-bottom: ${(props) => (props.isDesktop ? 125 : 35)}px;
  background-color: #fff;
`;

export const HeaderWrapper = styled.View`
  margin-top: 350px;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const Title = styled.Text`
  color: ${({ theme }: { theme: Theme }) => `${theme.colors.text}`};
  font-size: ${(props) => (props.isDesktop ? 96 : 24)}px;
  line-height: 30px;
  font-weight: 700;
  max-width: 300px;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        font-size: 44px;
        line-height: 52px;
        max-width: none;
        margin-top: 14px;
      `,
    })}
`;

export const ContentWrapper = styled.View`
  display: flex;
  align-self: flex-start;
  width: 100%;
  padding: 0 95px;
`;

export const LanguageFlagsWrapper = styled.View`
  width: 53px;
  height: 34px;
  margin-top: 145px;
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.View`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  width: 738px;
`;

export const ButtonCtaWidthFixed = styled(ButtonCta)`
  width: 290px;
  margin-top: 60px;
`;

export const SubTitle = styled.View`
  font-size: ${(props) => (props.isDesktop ? 28 : 16)}px;
`;

export const TitleQuestion = styled.View`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 18px;
  word-wrap: break-word;
`;

export const TitleContent = styled.View`
  width: 100%;
  font-size: 14px;
  word-wrap: break-word;
`;
