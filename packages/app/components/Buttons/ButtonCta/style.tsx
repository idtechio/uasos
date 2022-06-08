import { Theme } from "app/provider/theme/theme.config";
import styled, { css } from "styled-components/native";
import type { ButtonVariant } from "./types";

type ButtonProps = {
  colorOpposite?: boolean;
  theme: Theme;
  variant: "contained" | "outlined";
};
export const Button = styled.Pressable<ButtonProps>(
  ({ theme, colorOpposite, variant }) => css`	
  background-color: ${
    variant === "outlined"
      ? "transparent"
      : colorOpposite
      ? theme.colors.textOnCta
      : theme.colors.cta
  };
  border: ${
    variant === "contained"
      ? "2px solid transparent"
      : `2px solid ${theme.colors.secondaryBlue}`
  }

text-align: center;
justify-content: center;
align-items: center;

${theme.styleFor({
  web: css`
    display: inline-block;
    border-radius: 50px;
    padding: 12px 23px;

    &:hover {
      opacity: 0.7;
    }
  `,
  native: css`
    border-radius: ${theme.scale(50)}px;
    padding: ${theme.scale(12)}px ${theme.scale(23)}px;
  `,
})}
`
);

type TextProps = {
  colorOpposite?: boolean;
  theme: Theme;
  variant: ButtonVariant;
};
export const Text = styled.Text<TextProps>`
  font-weight: 700;
  text-align: center;
  color: ${({ theme, colorOpposite, variant }) =>
    variant === "outlined"
      ? theme.colors.secondaryBlue
      : colorOpposite
      ? theme.colors.cta
      : theme.colors.textOnCta};
  width: 100%;
  justify-content: center;
  display: flex;
`;
