import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";

export const ContentContainer = styled.View`
  background-color: white;
  width: 100%;
  padding: 20px 15px 17px;
  margin-bottom: 25px;
`;

export const ScreenHeader = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;

  letter-spacing: 0.5px;

  color: ${({ theme }) => (theme as Theme).colors.figmaPalette.fontMain};
`;

export const FormHeader = styled.Text`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  color: ${({ theme }) => (theme as Theme).colors.figmaPalette.fontMain};

  margin-top: 32px;
  margin-bottom: 16px;
`;
