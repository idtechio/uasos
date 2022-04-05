import styled from "styled-components/native";
import { Theme } from "../../../style/theme.config";
import { InputProps } from "./types";

export const InputWraper = styled.View`
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
  border: ${({ theme, error }) =>
    `${theme.forms.borderWidth} solid ${
      error ? theme.colors.error : "rgba(28, 27, 37, 0.3)"
    }`};
  background-color: ${(props) => props.theme.pageSection.backgroundColor};
  padding: 13px 20px 14px;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  &:focus {
    outlinecolor: "#003566";
  }
`;

export const Error = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.error};
`;
