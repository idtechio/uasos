import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";

export const Error = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.error};
  margin-bottom: 10px;
`;

export const CenteredView = styled.View`
  display: flex;
  align-items: center;
`;
