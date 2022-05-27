import styled from "styled-components/native";
import { Theme } from "../../../style/theme.config";

export const LostPassWrapper = styled.View`
  margin-top: 32px;
  text-transform: capitalize;
`;

export const StyledText = styled.Text`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;

  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
`;

export const StyledLink = styled.Text`
  font-weight: bold;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
  text-decoration: underline;
`;
