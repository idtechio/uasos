import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";
import { ButtonCta } from "../Buttons";

export const StyledText = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #003566;
  margin: 20px 0;
  text-align: center;
`;
export const StyledHeader = styled.Text`
  font-size: 24px;
  color: #003566;
  font-weight: 700;
  margin: 20px 0;
  text-align: center;
`;
export const InputWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const StyledInput = styled.TextInput`
  width: 35;
  height: 50;
  border: 1px solid lightgrey;
  font-size: 24px;
  text-align: center;
  margin: 0 5px;
`;
export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonSubmit = styled(ButtonCta)<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        width: 100px;
        margin-top: 30px;
      `,
      native: css`
        width: ${theme.scale(120)}px;
        margin-top: ${theme.scale(30)}px;
      `,
    })}
`;
