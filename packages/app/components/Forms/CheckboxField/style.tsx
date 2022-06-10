import styled, { css } from "styled-components/native";
import { FlattenSimpleInterpolation } from "styled-components";
import { Theme } from "../../../provider/theme/theme.config";

export const CheckBoxContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text<{
  error?: boolean;
  theme: Theme;
  styleOverrides?: FlattenSimpleInterpolation;
}>`
  color: ${({ theme, error }) =>
    error ? theme.colors.error : theme.colors.text};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        cursor: pointer;
      `,
    })}

  ${({ styleOverrides }) => styleOverrides}
`;
