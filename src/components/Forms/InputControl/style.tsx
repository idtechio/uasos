import styled from "styled-components/native";
import { InputControlProps } from "./types";

export const InputWraper = styled.View<InputControlProps>`
  max-width: 400px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 26px;
`;

export const InputCotrolLabel = styled.Text`
  color: ${(props) => props.theme.colors.headings};
  margin-bottom: 16px;
`;

export const InputCotrolLabelSmall = styled.Text`
  color: ${(props) => props.theme.colors.headings};
  margoin-sixe: 12pxr;
  margin-top: -12px;
  font-size: 12px;
  margin-bottom: 16px;
`;
