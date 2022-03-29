import styled from "styled-components/native";
import { Theme } from "../../../style/theme.config";
import type { ButtonVariant } from "./types";

type ButtonProps = {
  colorOpposite?: boolean;
  theme: Theme;
  variant: "contained" | "outlined";
};
export const Button = styled.Pressable<ButtonProps>`
	background-color: ${({ theme, colorOpposite, variant }) =>
    variant === "outlined"
      ? "transparent"
      : colorOpposite
      ? theme.colors.textOnCta
      : theme.colors.cta};

  border: ${({ variant, theme }) =>
    variant === "contained"
      ? "2px solid transparent"
      : `2px solid ${theme.colors.secondaryBlue}`}
	border-radius: 50px;
	padding: 12px 23px;
	text-align: center;
	display: inline-block;
	justify-content: center;
	align-items: center;

	&:hover {
		opacity: 0.7
	}
`;

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
