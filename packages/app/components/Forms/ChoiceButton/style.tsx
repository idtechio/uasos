import styled, { css } from "styled-components/native";
import type { ChoiceButtonProps } from "./type";
import { Theme } from "../../../provider/theme/theme.config";

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
  width: fit-content;
  flex-direction: ${(props) => (props.isSmall ? `row` : `column`)};
  align-items: center;
  justify-content: ${(props) => (props.isVertical ? `flex-left` : `center`)};
  text-align: center;
  height: ${(props) => (props.isSmall ? "auto" : `100%`)};

  ${({ theme, isSmall, width, isVertical, noMarginRight }) =>
    theme.styleFor({
      web: css`
        width: ${() => width}px;
        padding: ${() => (isSmall ? `10px 14px` : `25px`)};
        margin-right: ${() =>
          isSmall ? (isVertical || noMarginRight ? `0` : `10px`) : `0`};
        margin-bottom: ${() => (isSmall ? `10px` : `0`)};
      `,
      native: css`
        width: ${() => theme.scale(width)}px;
        padding: ${() =>
          isSmall
            ? `${theme.scale(10)}px ${theme.scale(14)}px`
            : `${theme.scale(25)}px`};
        margin-right: ${() =>
          isSmall
            ? isVertical || noMarginRight
              ? `0`
              : `${theme.scale(10)}px`
            : `0`};
        margin-bottom: ${() => (isSmall ? `${theme.scale(10)}px` : `0`)};
      `,
    })}
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
