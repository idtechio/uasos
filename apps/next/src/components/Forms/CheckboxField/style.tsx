import { Platform } from "react-native";
import { FlattenSimpleInterpolation } from "styled-components";
import styled, { css } from "styled-components/native";
import { Theme } from "../../../style/theme.config";

export const Label = styled.Text<{
  error?: boolean;
  theme: Theme;
  styleOverrides?: FlattenSimpleInterpolation;
}>`
  color: ${(props) => (props.error ? props.theme.colors.error : `inherit`)};

  ${Platform.select({
    web: css`
      cursor: pointer;
    `,
  })}

  ${({ styleOverrides }) => styleOverrides}
`;
