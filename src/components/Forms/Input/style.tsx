import styled from "styled-components/native";
import { InputProps } from "./types";

export const InputWraper = styled.View`
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: flex-end;
  /* margin-top: 16px; */
  margin-bottom: 10px;
`;

export const InputRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text<InputProps>`
  margin-bottom: -10px;
  margin-left: 15px;
  background-color: ${(props) =>
    props.labelsBackgroundColor ? `${props.labelsBackgroundColor}` : `#fff`};
  width: fit-content;
  padding: 3px 5px;
  line-height: 100%;
  z-index: 2;
  color: ${(props) =>
    props.error ? props.theme.colors.error : `rgba(28, 27, 37, 0.5)`};
`;

export const TextInput = styled.TextInput`
  border: ${(props) => props.theme.forms.borderWidth} solid
    ${(props) =>
      props.error ? props.theme.colors.error : `rgba(28, 27, 37, 0.3)`};
  background-color: ${(props) => props.theme.pageSection.backgroundColor};
  padding: 20px;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  &:focus {
    outlinecolor: "#003566";
  }
`;

export const Error = styled.Text`
  color: ${(props) => props.theme.colors.error};
`;
