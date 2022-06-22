import styled, { css } from "styled-components/native";
import styledWeb from "styled-components";
import { Theme } from "../../provider/theme/theme.config";
import { ButtonCta } from "../Buttons";

export const Container = styled.View`
  width: 100%;
`;

export const ContentWrapper = styled.View<{ theme: Theme }>`
  width: 100%;
  margin: 0 auto;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        max-width: ${({ theme }) => `${theme.maxContainerWidth}px`};
      `,
    })}
`;

export const TextContainer = styled.View<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 16px;
        max-width: 740px;
      `,
      native: css`
        padding: ${theme.scale(16)}px;
      `,
    })}
`;

export const Title = styled.Text<{ theme: Theme }>`
  color: ${({ theme }) => `${theme.colors.text}`};
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
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
      `,
      native: css`
        margin-top: ${theme.scale(130)}px;
      `,
    })}
`;

export const SubTitleWrapper = styled.View<{ theme: Theme }>`
  display: inline-block;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-top: 10px;
        max-width: 300px;

        ${({ theme }) =>
          theme.getBreakPoint({
            lg: css`
              margin-top: 40px;
              max-width: none;
            `,
          })}
      `,
      native: css`
        margin-top: ${theme.scale(10)}px;
      `,
    })}
`;

export const SubTitle = styled.Text<{ theme: Theme }>`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => `${theme.colors.text}`};
  margin-top: ${({ theme }) => theme.scale(30)}px;
`;

export const SubTitleWeb = styledWeb.div` //TODO: react native doesn't support dangerouslySetInnerHTML attribute. When we create the mobile app extract this component and create a version working with both web and mobile
  font-weight: 400;
  font-size: 16px;
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

export const ButtonContainer = styled.View<{ theme: Theme }>`
  align-items: flex-start;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-top: 50px;
        margin-bottom: 145px;

        ${() =>
          theme.getBreakPoint({
            lg: css`
              margin-top: 28px;
              flex-direction: row;
              margin-top: 104px;
            `,
          })}
      `,
      native: css`
        margin-top: ${theme.scale(50)}px;
        margin-bottom: ${theme.scale(145)}px;
      `,
    })}
`;

export const ButtonStyle = styled(ButtonCta)<{ first?: boolean; theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  ${({ theme, first }) =>
    theme.styleFor({
      web: css`
        height: 48.5;
        margin-top: 17px;
        padding: 0px 16px;

        ${() =>
          !first &&
          theme.getBreakPoint({
            lg: css`
              margin-left: 20px;
            `,
          })}
      `,
      native: css`
        height: ${theme.scale(48.5)};
        margin-top: ${theme.scale(17)}px;
        padding: 0px ${theme.scale(16)}px;
      `,
    })}
`;

export const ButtonText = styled.Text`
  font-weight: 700;
  font-size: 14px;
  color: #003566;
`;

export const FlexAnchor = styled.View<{ theme: Theme }>`
  flex-direction: row;
  align-items: center;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        gap: 0px 10px;
      `,
      native: css`
        gap: 0px ${theme.scale(10)}px;
      `,
    })}
`;
