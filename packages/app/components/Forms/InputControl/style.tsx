import styled, { css } from "styled-components/native";
import { FlattenSimpleInterpolation } from "styled-components";
import { Theme } from "../../../provider/theme/theme.config";
import { InputControlProps } from "./types";

export const InputWrapper = styled.View<InputControlProps & { theme: Theme }>`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  z-index: ${({ zIndex }) => zIndex || "0"};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        max-width: 400px;
      `,
    })}
`;

type InputControlLabelProps = {
  styleOverrides?: FlattenSimpleInterpolation;
  theme: Theme;
  marginBottom?: string;
};
export const InputCotrolLabel = styled.Text<InputControlLabelProps>`
  color: ${({ theme }: { theme: Theme }) => theme.colors.headings};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : `16px`};
  align-items: center;
  display: flex;
  ${({ styleOverrides }) => styleOverrides || undefined}
`;

export const InputCotrolLabelSmall = styled.Text<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.headings};
  /* margin-size: 12px; */

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-top: -12px;
        font-size: 12px;
        margin-bottom: 16px;
      `,
      native: css`
        margin-top: -${theme.scale(12)}px;
        font-size: ${theme.scale(12)}px;
        margin-bottom: ${theme.scale(16)}px;
      `,
    })}
`;
