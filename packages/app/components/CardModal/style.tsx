import { Theme } from "app/provider/theme/theme.config";
import styled, { css } from "styled-components/native";

export const CenterBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.75);
`;

export const Curtain = styled.View<{
  onClick?: (e: Event) => void;
  theme: Theme;
}>(
  ({ theme }) => css`
    background-color: #000;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;

    ${theme.styleFor({
      web: css`
        min-height: 100vh;
        min-width: 100vw;
        position: fixed;
        opacity: 0.4;
      `,
      native: css`
        opacity: 0.4;
        position: absolute;
      `,
    })}
  `
);
