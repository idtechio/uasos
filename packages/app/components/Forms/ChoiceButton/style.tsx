import styled, { css } from "styled-components/native";
import type { ChoiceButtonProps } from "./type";
import { Theme } from "../../../provider/theme/theme.config";

type ButtonType = Pick<
  ChoiceButtonProps,
  "error" | "isSelected" | "isSmall" | "isVertical" | "width" | "noMarginRight"
> & { isChoice?: boolean; theme: Theme };

export const Button = styled.View<ButtonType>`
  flex-direction: ${({ isSmall }) => (isSmall ? `row` : `column`)};
  justify-content: ${({ isVertical }) => (isVertical ? `flex-left` : `center`)};
  align-items: center;
  width: ${({ width }) => width}px;
  height: ${({ isSmall }) => (isSmall ? "auto" : `100%`)};
  border: ${({ theme, error, isChoice }) =>
    isChoice
      ? `${theme.forms.borderWidth} solid ${theme.colors.positive}`
      : error
      ? `${theme.forms.borderWidth} solid ${theme.colors.error}`
      : `${theme.forms.borderWidth} solid rgba(28, 27, 37, 0.3)`};
  background-color: ${({ isSelected }) =>
    isSelected ? `rgba(56, 176, 0, 0.1)` : `transparent`};
  border-radius: 4px;
  text-align: center;

  ${({ theme, isSmall, isVertical, noMarginRight }) =>
    theme.styleFor({
      web: css`
        margin-bottom: ${() => (isSmall ? `10px` : `0`)};
        margin-right: ${() =>
          isSmall ? (isVertical || noMarginRight ? `0` : `10px`) : `0`};
        padding: ${() => (isSmall ? `10px 14px` : `25px`)};
      `,
      native: css`
        margin-bottom: ${() => (isSmall ? `${theme.scale(10)}px` : `0`)};
        margin-right: ${() =>
          isSmall
            ? isVertical || noMarginRight
              ? `0`
              : `${theme.scale(10)}px`
            : `0`};
        padding: ${() =>
          isSmall
            ? `${theme.scale(10)}px ${theme.scale(14)}px`
            : `${theme.scale(25)}px`};
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
  color: ${(props) =>
    props.isSelected
      ? props.theme.colors.positive
      : `2px solid rgba(28, 27, 37, 0.7)`};

  ${({ theme, isVertical }) =>
    theme.styleFor({
      web: css`
        margin-right: ${() => (isVertical ? `12px` : `0`)};
        margin-bottom: ${() => (isVertical ? `0` : `12px`)};
      `,
      native: css`
        margin-right: ${() => (isVertical ? `${theme.scale(12)}px` : `0`)};
        margin-bottom: ${() => (isVertical ? `0` : `${theme.scale(12)}px`)};
      `,
    })}
`;
