import styled, { css } from "styled-components/native";
import { Theme } from "../../style/theme.config";
import { Splash } from "../../../../../packages/app/components/Slash";
import { ButtonCta } from "../Buttons";
import { colors } from "../../style/landingPageStyle";

export const TopLeftBlueSplash = styled(Splash)`
  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      default: css`
        max-width: 312px;
      `,
      lg: css`
        max-width: 512px;
      `,
    })}
`;

export const TopLeftBlueSplashPosition = css`
  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      default: css`
        left: -50%;
      `,
      lg: css`
        width: 100%;
        top: 15%;
        left: -50%;
      `,
    })}
`;

export const TopRightYellowSplash = styled(Splash)`
  right: -10%;
  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      default: css`
        max-width: 312px;
      `,
      lg: css`
        max-width: 512px;
      `,
    })}
`;

export const TopRightYellowSplashPosition = css`
  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      default: css`
        right: -30%;
        top: 40%;
      `,
      lg: css`
        right: -30%;
        width: 100%;
        top: 40%;
      `,
    })}
`;

export const Content = styled.View<{ isDesktop: boolean }>`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding-bottom: ${(props) => (props.isDesktop ? 125 : 35)}px;
  background-color: #fff;
`;

export const HeaderWrapper = styled.View<{ isDesktop: boolean }>`
  margin-top: ${(props) => (props.isDesktop ? 150 : 35)}px;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const Title = styled.Text`
  position: relative;
  display: flex;
  align-self: flex-start;
  margin-top: 0;
  margin-left: 15px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        line-height: 52px;
        max-width: none;
        margin-top: 14px;
      `,
    })}
`;

export const TitleDesktop = styled.Text`
  position: relative;
  display: flex;
  align-self: center;
  margin-top: 40px;
  margin-left: 0;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 54px;
  line-height: 30px;
  font-weight: 700;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        line-height: 52px;
        max-width: none;
        margin-top: 14px;
      `,
    })}
`;

export const YellowHighlight = styled.View`
  position: absolute;
  top: 20px;
  left: 0;
  height: 15px;
  width: 30px;
  background-color: ${colors.yellow};
  z-index: -1;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint?.({
      lg: css`
        width: 220px;
        top: 34px;
      `,
    })}
`;

export const ContentWrapper = styled.View<{ isDesktop: boolean }>`
  display: flex;
  align-self: flex-start;
  width: 100%;
  padding: ${(props) => (props.isDesktop ? "0 95px" : "0")};
`;

export const LanguageFlagsWrapper = styled.View`
  width: 53px;
  height: 34px;
  margin-top: 145px;
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

export const TitleWrapper = styled.View`
  margin-top: 35px;
  margin-bottom: 15px;
`;

export const TitleName = styled.View`
  margin-bottom: 25px;
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
`;

export const TitleQuestion = styled.View`
  width: 100%;
  margin-bottom: 25px;
  font-size: 20px;
  line-height: 28px;
  font-weight: bold;
  word-wrap: break-word;
`;

export const TitleContent = styled.View`
  width: 100%;
  font-size: 20px;
  line-height: 28px;
  word-wrap: break-word;
`;
