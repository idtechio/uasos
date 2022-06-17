import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";
import { Dimensions } from "react-native";

export const Stripe = styled.View<{ theme: Theme }>`
  border-width: 1px;
  border-color: #003566;
  border-radius: 2px;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        width: 24px;
      `,
      native: css`
        width: ${theme.scale(24)}px;
      `,
    })}
`;

export const ButtonContainer = styled.Pressable<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        gap: 4px;
      `,
      native: css`
        gap: ${theme.scale(4)}px;
      `,
    })}
`;

export const DrawerContainer = styled.View<{
  theme: Theme;
}>`
  position: absolute;
  right: 0;
  background: white;
  z-index: 2;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        width: 275px;
        height: 100vh;
        margin-top: 70px;
      `,
      native: css`
        width: ${theme.scale(275)}px;
        height: ${Dimensions.get("window").height}px;
        margin-top: ${theme.scale(70)}px;
      `,
    })}
`;

export const DrawerEmptySpace = styled.Pressable<{ theme: Theme }>`
  position: absolute;
  left: 0;
  background-color: rgba(0, 87, 184, 0.9);
  z-index: 2;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        width: calc(100vw - 275px);
        height: 100vh;
      `,
      native: css`
        width: ${Dimensions.get("window").width - 275}px;
        height: ${Dimensions.get("window").height}px;
      `,
    })}
`;
