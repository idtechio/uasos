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

export const ErrorText = styled.Text`
  color: ${({ theme }) => (theme as Theme).colors.figmaPalette.alert};
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: right;

  flex: 0 0 100%;
  margin-bottom: 12px;
`;

export const SuccessMessage = styled.Text`
  color: ${({ theme }) => (theme as Theme).colors.figmaPalette.positive};
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  flex: 0 0 100%;

  margin-bottom: 12px;
`;

export const FormFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 119px;
`;
