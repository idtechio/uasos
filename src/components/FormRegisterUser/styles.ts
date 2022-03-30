import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";

export const StyledHeader = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  letter-spacing: 0.5px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
`;
export const StyledSubheader = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  letter-spacing: 0.5px;
  margin: 10px 0 50px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
`;
export const StyledErrorMessage = styled.Text`
  color: "red";
  font-size: 16;
  line-height: 24;
`;
