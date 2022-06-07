import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";
import { ButtonCta } from "../Buttons";

export const StyledText = styled.Text<{ theme: Theme }>`
  font-size: 16px;
  font-weight: 400;
  color: #003566;
  text-align: center;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin: 20px 0;
      `,
      native: css`
        margin-vertical: ${theme.scale(20)}px;
        margin-horizontal: ${theme.scale(0)}px;
      `,
    })}
`;
export const StyledHeader = styled.Text<{ theme: Theme }>`
  font-size: 24px;
  color: #003566;
  font-weight: 700;
  text-align: center;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin: 20px 0;
      `,
      native: css`
        margin-vertical: ${theme.scale(20)}px;
        margin-horizontal: ${theme.scale(0)}px;
      `,
    })}
`;
export const InputWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

type StyledInputProps = { borderColor: string; theme: Theme };
export const StyledInput = styled.TextInput<StyledInputProps>`
  border: 1px solid lightgrey;
  font-size: 24px;
  text-align: center;
  ${(props) => (props.borderColor ? `border-color: ${props.borderColor}` : "")}

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        width: 35;
        height: 50;
        margin: 0 5px;
      `,
      native: css`
        width: ${theme.scale(35)}px;
        height: ${theme.scale(50)}px;
        margin-vertical: ${theme.scale(0)}px;
        margin-horizontal: ${theme.scale(5)}px;
      `,
    })}
`;
export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const ErrorText = styled(StyledText)`
  color: red;
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
