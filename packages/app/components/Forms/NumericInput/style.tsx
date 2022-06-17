import styled, { css } from "styled-components/native";
import { Theme } from "../../../provider/theme/theme.config";
import { InputProps } from "./types";

export const InputWraper = styled.View<{ theme: Theme }>`
  width: 100%;
  display: flex;
  justify-content: center;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        height: 62px;
      `,
      native: css`
        height: ${theme.scale(62)}px;
      `,
    })}
`;

type TInputProps = Pick<InputProps, "error"> & {
  theme: Theme;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  focused: boolean;
};
export const TextInput = styled.TextInput<TInputProps>`
  border-width: ${({ theme }) => theme.forms.borderWidth};
  border-color: ${({ error, theme, focused }) =>
    error
      ? theme.colors.error
      : focused
      ? theme.colors.text
      : theme.colors.figmaPalette.borderInput};
  background-color: ${({ theme }) => theme.pageSection.backgroundColor};
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  width: 100%;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        min-height: 24px;
        padding: 10px;
      `,
      native: css`
        min-height: ${theme.scale(24)}px;
        padding: ${theme.scale(10)}px;
      `,
    })}
`;

export const Error = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.error};
`;

export const Controls = styled.View<{ theme: Theme }>`
  position: absolute;
  flex-direction: row;
  align-items: center;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        right: 8px;
      `,
      native: css`
        right: ${theme.scale(8)}px;
      `,
    })}
`;

export const Icon = styled.TouchableOpacity<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 0 8px;
      `,
      native: css`
        padding: 0 ${theme.scale(8)}px;
      `,
    })}
`;
