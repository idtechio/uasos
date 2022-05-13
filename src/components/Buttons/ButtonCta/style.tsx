import styled from "styled-components/native";
import { Theme } from "../../../style/theme.config";

export const Button = styled.Pressable<{
  colorOpposite?: boolean;
  theme: Theme;
  margin?: string;
}>`
  background-color: ${({ theme, colorOpposite }) =>
    colorOpposite ? theme.colors.textOnCta : theme.colors.cta};
  border-radius: 50px;
  padding: 16px 25px;
  margin: ${({ margin }) => (margin ? margin : 0)};
  text-align: center;
  display: inline-block;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.7;
  }
`;

export const Text = styled.Text<{
  colorOpposite?: boolean;
  theme: Theme;
  color?: string;
}>`
  font-weight: 700;
  text-align: center;
  color: ${({ theme, colorOpposite, color }) =>
    colorOpposite ? theme.colors.cta : color ?? theme.colors.textOnCta};
  width: 100%;
  justify-content: center;
  display: flex;
`;
