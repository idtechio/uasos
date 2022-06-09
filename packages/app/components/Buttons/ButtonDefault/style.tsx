import { Theme } from "app/provider/theme/theme.config";
import styled, { css } from "styled-components/native";

export const Button = styled.View<{ theme: Theme }>(
  ({ theme }) => css`
    background-color: #fff;
    border: 1px solid #ccc;

    display: flex;
    flex-direction: row;

    ${theme.styleFor({
      web: css`
        border-radius: 50px;
        padding: 6px 12px;
        width: 100%;
      `,
      native: css`
        border-radius: ${theme.scale(50)}px;
        padding: ${theme.scale(6)}px ${theme.scale(12)}px;
      `,
    })}
  `
);

export const ButtonAnchor = styled.Text`
  color: #747474;
`;
