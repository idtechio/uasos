import styled, { css } from "styled-components/native";
import { Theme } from "../../style/theme.config";
import { ButtonCta } from "../Buttons";

export const Container = styled.View`
  width: 100%;
`;

export const ContentWrapper = styled.View`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }: { theme: Theme }) => `${theme.maxContainerWidth}px`};
`;

export const TextContainer = styled.View`
  padding: 16px;
  max-width: 740px;
`;

export const Title = styled.Text`
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

export const SubTitleWrapper = styled.View`
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

export const SubTitle = styled.Text`
  //TODO: react native doesn't support dangerouslySetInnerHTML attribute. When we create the mobile app extract this component and create a version working with both web and mobile
  font-weight: 400;
  font-size: 162px;
  line-height: 22px;
  color: ${({ theme }: { theme: Theme }) => `${theme.colors.text}`};
  margin-top: 30px;

  b {
    font-weight: 700;
  }

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        font-size: 20px;
        line-height: 28px;
        margin-top: 40px;
      `,
    })}
`;

export const ButtonContainer = styled.View`
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

export const ButtonStyle = styled(ButtonCta)<{ first?: boolean; theme: Theme }>`
  margin-top: 17px;
  font-size: 16px;
  display: flex;
  padding: 0px 16px;
  height: 48.5;
  align-items: center;
  justify-content: center;

  ${({ theme, first }) =>
    !first &&
    theme.getBreakPoint({
      lg: css`
        margin-left: 20px;
      `,
    })}
`;

export const ButtonText = styled.Text`
  font-weight: 700;
  font-size: 14px;
  color: #003566;
`;

export const FlexAnchor = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 0px 10px;
`;
