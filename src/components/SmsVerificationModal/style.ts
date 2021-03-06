import styled from "styled-components/native";

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

type StyledInputProps = { borderColor: string };
export const StyledInput = styled.TextInput<StyledInputProps>`
  width: 35;
  height: 50;
  border: 1px solid lightgrey;
  font-size: 24px;
  text-align: center;
  margin: 0 5px;
  ${(props) => (props.borderColor ? `border-color: ${props.borderColor}` : "")}
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
