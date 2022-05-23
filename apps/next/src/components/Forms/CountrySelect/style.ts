import styled from "styled-components/native";
import { Theme } from "../../../style/theme.config";

export const ErrorMessage = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.error};
  margin-bottom: 10px;
`;

export const LabelContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const LabelText = styled.Text`
  margin-left: 8px;
`;
