import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";

export const ThankfulnessText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.5px;
`;

export const ThankfulnessHeader = styled.Text<{ theme: Theme }>`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 24px;
  font-weight: 700;
  text-align: center;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-bottom: 14px;
        margin-top: 12px;
      `,
      native: css`
        margin-bottom: ${theme.scale(14)}px;
        margin-top: ${theme.scale(12)}px;
      `,
    })}
`;

export const ThankfulnessModalContentWrapper = styled.View`
  flex-direction: column;
  flex-shrink: 0;
  flex-basis: auto;
  align-items: center;
`;

export const ThankfulnessModalTextWrapper = styled.View<{ theme: Theme }>`
  align-items: center;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 0px 24px;
      `,
      native: css`
        padding-vertical: ${theme.scale(0)}px;
        padding-horizontal: ${theme.scale(24)}px;
      `,
    })}
`;

export const ThankfulnessModalButtonCtaWrapper = styled.View<{ theme: Theme }>`
  justify-content: center;
  align-items: center;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-top: 28px;
      `,
      native: css`
        margin-top: ${theme.scale(28)}px;
        padding-vertical: 
        padding-horizontal: ${theme.scale(24)}px;
      `,
    })}
`;
