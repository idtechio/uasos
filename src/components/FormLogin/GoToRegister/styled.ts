import styled from "styled-components/native";
import { Theme } from "../../../style/theme.config";

export const Wrapper = styled.View`
  width: 100%;
  background-color: ${({ theme }: { theme: Theme }) =>
    theme.pageSection.backgroundColorAlt};
  padding: 20px 0;
`;

export const StyledText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  margin: 35px 0;

  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
  width: 250px;
`;
