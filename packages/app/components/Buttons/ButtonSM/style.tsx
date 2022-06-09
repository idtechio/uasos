import styled, { css } from "styled-components/native";
import { Theme } from "../../../provider/theme/theme.config";

export const Button = styled.Pressable<{ theme: Theme }>(
  ({ theme }) => css`
    background-color: ${theme.colors.secondaryBlue};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${theme.styleFor({
      web: css`
        border-radius: 4px;
        padding: 13px 16px 13px 5px;
        margin: 10px 0;
        &:hover {
          opacity: 0.7;
        }
      `,
      native: css`
        border-radius: ${theme.scale(4)}px;
        padding: ${theme.scale(13)}px ${theme.scale(16)}px ${theme.scale(13)}px
          ${theme.scale(5)}px;
        margin: ${theme.scale(10)}px 0;
      `,
    })}
  `
);

export const Text = styled.Text<{ theme: Theme }>(
  ({ theme }) => css`
    font-weight: 400;
    color: ${theme.colors.textOnAccent};
    display: flex;

    ${theme.styleFor({
      web: css`
        margin-left: 10px;
      `,
      native: css`
        margin-left: ${theme.scale(10)}px;
      `,
    })}
  `
);
