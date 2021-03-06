import type { ChoiceButtonProps } from "./type";
import styled from "styled-components/native";
import { Theme } from "../../../style/theme.config";

type ButtonType = Pick<
  ChoiceButtonProps,
  "error" | "isSelected" | "isSmall" | "isVertical" | "width" | "noMarginRight"
> & { isChoice?: boolean; theme: Theme };

export const Button = styled.View<ButtonType>`
  border: ${(props) =>
    props.isChoice
      ? `${props.theme.forms.borderWidth} solid ${props.theme.colors.positive}`
      : props.error
      ? `${props.theme.forms.borderWidth} solid ${props.theme.colors.error}`
      : `${props.theme.forms.borderWidth} solid rgba(28, 27, 37, 0.3)`};
  background-color: ${(props) =>
    props.isSelected ? `rgba(56, 176, 0, 0.1)` : `transparent`};
  border-radius: 4px;
  padding: ${(props) => (props.isSmall ? `10px 14px` : `25px`)};
  width: fit-content;
  flex-direction: ${(props) => (props.isSmall ? `row` : `column`)};
  align-items: center;
  justify-content: ${(props) => (props.isVertical ? `flex-left` : `center`)};
  text-align: center;
  margin-right: ${(props) =>
    props.isSmall
      ? props.isVertical || props.noMarginRight
        ? `0`
        : `10px`
      : `0`};
  margin-bottom: ${(props) => (props.isSmall ? `10px` : `0`)};
  height: ${(props) => (props.isSmall ? `unset` : `100%`)};
  width: ${(props) => props.width};
`;

type TextProps = {
  isVertical?: boolean;
  isSelected?: boolean;
  isSmall?: boolean;
  isChoice?: boolean;
  theme: Theme;
};

export const Text = styled.Text<TextProps>`
  text-align: ${(props) => (props.isSmall ? `left` : `center`)};
  color: ${(props) =>
    props.isChoice
      ? props.theme.colors.positive
      : `${props.theme.forms.borderWidth} solid rgba(28, 27, 37, 0.7)`};
`;

export const Icon = styled.View<
  Pick<ChoiceButtonProps, "isVertical" | "isSelected"> & { theme: Theme }
>`
  margin-bottom: ${(props) => (props.isVertical ? `0` : `12px`)};
  margin-right: ${(props) => (props.isVertical ? `12px` : `0`)};
  color: ${(props) =>
    props.isSelected
      ? props.theme.colors.positive
      : `2px solid rgba(28, 27, 37, 0.7)`};
`;
