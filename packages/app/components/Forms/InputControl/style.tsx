import styled, { css } from "styled-components/native";
import { FlattenSimpleInterpolation } from "styled-components";
import { Theme } from "../../../provider/theme/theme.config";
import { InputControlProps } from "./types";

type InputControlLabelProps = {
  styleOverrides?: FlattenSimpleInterpolation;
  theme: Theme;
  marginBottom?: number;
};

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

export const InputCotrolLabel = styled.Text<
  InputControlLabelProps & { theme: Theme }
>`
  display: flex;
  align-items: center;
  color: ${({ theme }: { theme: Theme }) => theme.colors.headings};
  ${({ styleOverrides }) => styleOverrides || undefined}

  ${({ theme, marginBottom }) =>
    theme.styleFor({
      web: css`
        margin-bottom: ${() => (marginBottom ? marginBottom : 16)}px;
      `,
      native: css`
        margin-bottom: ${() =>
          marginBottom ? theme.scale(marginBottom) : 16}px;
      `,
    })}
`;

export const InputCotrolLabelSmall = styled.Text<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.headings};
  /* margin-size: 12px; */
  font-size: 12px;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-top: -12px;
        margin-bottom: 16px;
      `,
      native: css`
        margin-top: -${theme.scale(12)}px;
        margin-bottom: ${theme.scale(16)}px;
      `,
    })}
`;
