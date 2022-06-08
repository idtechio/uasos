import { Theme } from "app/provider/theme/theme.config";
import styled, { css } from "styled-components/native";

interface CommonTheme {
  theme: Theme;
}

export const DecisionText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.5px;
`;

export const DecisionHeader = styled.Text<CommonTheme>(
  ({ theme }) => css`
    color: ${theme.colors.text};
    font-size: 20px;
    font-weight: 700;
    text-align: center;

    ${theme.styleFor({
      web: css`
        margin: 14px;
      `,
      native: css`
        margin: ${theme.scale(14)}px 0;
      `,
    })}
  `
);

export const DecisionModalContentWrapper = styled.View`
  flex-direction: column;
  flex-shrink: 0;
  flex-basis: auto;
  align-items: center;
`;

export const DecisionModalTextWrapper = styled.View`
  align-items: center;
`;

export const DecisionModalButtonCtaWrapper = styled.View<{ theme: Theme }>(
  ({ theme }) => css`
    justify-content: center;
    align-items: center;

    ${theme.styleFor({
      web: css`
        margin: 28px 0;
      `,
      native: css`
        margin: ${theme.scale(28)}px 0;
      `,
    })}
  `
);
export const AcceptedText = styled.Text`
  font-weight: bold;
  color: ${({ theme }: { theme: Theme }) => theme.colors.positive};
`;

export const CancelledText = styled.Text`
  font-weight: bold;
  color: ${({ theme }: { theme: Theme }) => theme.colors.alert};
`;
