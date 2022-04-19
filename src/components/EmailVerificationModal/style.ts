import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";

type Props = {
  disabled?: boolean;
  theme: Theme;
};
export const StyledText = styled.Text<Props>`
  font-size: 14px;
  font-weight: 400;
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.alert : theme.colors.text};
  margin: 20px 0;
  text-align: center;
`;
export const StyledTextButton = styled.Text<Props>`
  font-size: 16px;
  font-weight: 700;
  color: ${({ disabled, theme }) =>
    disabled ? "#D9D9D9" : theme.colors.headings};
  margin: 20px 0;
  text-align: center;
`;
export const StyledHeader = styled.Text`
  font-size: 24px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.headings};
  font-weight: 700;
  margin: 20px 0;
  text-align: center;
`;
export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
