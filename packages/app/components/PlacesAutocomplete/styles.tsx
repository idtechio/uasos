import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";

interface ContainerProps {
  error: boolean;
}

export const Container = styled.Pressable<ContainerProps & { theme: Theme }>`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  border-radius: 4px;
  border: ${({ error }) =>
    error ? "rgb(216, 0, 12)" : "1px solid rgba(28, 27, 37, 0.3)"};
  z-index: 1000;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        height: 48px;
      `,
      native: css`
        height: ${theme.scale(48)}px;
      `,
    })}
`;

export const Input = styled.TextInput<{ theme: Theme }>`
  flex: 1;
  height: 100%;
  width: 100%;
  border: 0px;
  font-size: 16px;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 0px 30px 0px 15px;
        outline: 0px;
        &:focus-visible {
          outline: 0px;
          border: 0px;
        }
        &:focus {
          outline: 0px;
          border: 0px;
        }
      `,
      native: css`
        padding: ${theme.scale(0)}px ${theme.scale(30)}px 0px
          ${theme.scale(15)}px;
      `,
    })}
`;

export const List = styled.View<{ theme: Theme }>`
  position: absolute;
  background-color: #fff;
  z-index: 1000;
  border: 1px solid rgba(28, 27, 37, 0.3);
  width: 100%;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        top: 48px;
      `,
      native: css`
        top: ${theme.scale(48)}px;
      `,
    })}
`;

export const Separator = styled.View<{ theme: Theme }>`
  background-color: rgba(28, 27, 37, 0.3);

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        height: 1px;
      `,
      native: css`
        height: ${theme.scale(1)}px;
      `,
    })}
`;

export const ActivityIndicator = styled.ActivityIndicator<{ theme: Theme }>`
  position: "absolute";

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        right: 15;
      `,
      native: css`
        right: ${theme.scale(15)};
      `,
    })}
`;
