import styled from "styled-components/native";
import { Theme } from "../../../style/theme.config";
import { InputControlProps } from "./types";

export const InputWraper = styled.View<InputControlProps>`
  max-width: 400px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 26px;
  z-index: ${({ zIndex }) => zIndex || "0"};
`;

export const InputCotrolLabel = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.headings};
  margin-bottom: 16px;
  align-items: center;
  display: flex;
`;

export const InputCotrolLabelSmall = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.headings};
  margin-size: 12pxr;
  margin-top: -12px;
  font-size: 12px;
  margin-bottom: 16px;
`;
