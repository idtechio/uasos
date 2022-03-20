import styled from "styled-components/native";
import { Theme } from "../../../style/theme.config";
import { InputProps } from "./types";

export const InputWraper = styled.View`
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: center;
`;

type TInputProps = Pick<InputProps, "error"> & {
  theme: Theme;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
};
export const TextInput = styled.TextInput<TInputProps>`
  border: ${({ theme }) => theme.forms.borderWidth} solid
    ${({ error, theme }) =>
      error ? theme.colors.error : `rgba(28, 27, 37, 0.3)`};
  background-color: ${({ theme }) => theme.pageSection.backgroundColor};
  min-height: 24px;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  width: 100%;
  &:focus {
    outlinecolor: "#003566";
  }
`;

export const Error = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.error};
`;

export const Controls = styled.View`
  position: absolute;
  right: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.TouchableOpacity`
  padding-left: 8px;
  padding-right: 8px;
`;
