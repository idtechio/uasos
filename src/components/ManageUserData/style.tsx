import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";

interface HeaderPropsInterface {
  alignCenter?: boolean;
  marginTop?: boolean;
  marginBottom?: boolean;
  small?: boolean;
}

export const ContentContainer = styled.View`
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 20px 15px;
  margin-bottom: 25px;
`;

export const TextComponent = styled.Text<HeaderPropsInterface>`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: ${({ small }) => (small ? "16px" : "24px")};
  line-height: 24px;
  letter-spacing: 0.5px;
  margin-top: ${({ marginTop }) => (marginTop ? "50px" : 0)};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? "30px" : 0)};
  text-align: ${({ alignCenter }) => (alignCenter ? "center" : "left")};
  color: ${({ theme }) => (theme as Theme).colors.figmaPalette.fontMain};
`;
