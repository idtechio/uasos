import styled, { css } from "styled-components/native";
import { Theme } from "../../../provider/theme/theme.config";
import { InputProps } from "./types";

export const InputWrapper = styled.View`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const InputRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

type TextInputProps = InputProps & { theme: Theme };

export const TextInput = styled.TextInput<TextInputProps>`
  position: relative;
  border-width: ${({ theme }) => theme.forms.borderWidth};
  border-color: ${({ theme, error, focused }) =>
    error
      ? theme.colors.error
      : focused
      ? theme.colors.text
      : theme.colors.figmaPalette.borderInput};
  background-color: ${(props) => props.theme.pageSection.backgroundColor};
  border-radius: 4px;
  font-size: 16px;
  width: 100%;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 13px 20px 14px;
      `,
      native: css`
        padding: ${theme.scale(13)}px ${theme.scale(20)}px ${theme.scale(14)}px;
      `,
    })}
`;

export const Error = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.error};
`;
