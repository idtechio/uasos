import styled, { css } from "styled-components/native";
import { Theme } from "../../../provider/theme/theme.config";

export const Button = styled.Pressable<{
  colorOpposite?: boolean;
  theme: Theme;
}>`
  background-color: ${({ theme, colorOpposite }) =>
    colorOpposite ? theme.colors.textOnCta : theme.colors.cta};
  text-align: center;
  justify-content: center;
  align-items: center;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        border-radius: 50px;
        padding: 16px 25px;
      `,
      native: css`
        border-radius: ${theme.scale(50)}px;
        padding-vertical: ${theme.scale(12)}px;
        padding-horizontal: ${theme.scale(25)}px;
      `,
    })}
`;

export const Text = styled.Text<{ colorOpposite?: boolean; theme: Theme }>`
  font-weight: 700;
  text-align: center;
  color: ${({ theme, colorOpposite }) =>
    colorOpposite ? theme.colors.cta : theme.colors.textOnCta};
  width: 100%;
  justify-content: center;
  display: flex;
`;
