import type { ChoiceButtonProps } from "./type";
import styled from "styled-components/native";

export const Button = styled.View<ChoiceButtonProps>`
  border: ${(props) =>
    props.isChoice
      ? `2px solid #38B000`
      : props.error
      ? `2px solid #D8000C`
      : `2px solid rgba(28, 27, 37, 0.3)`};
  background-color: ${(props) =>
    props.isChoice ? `rgba(56, 176, 0, 0.1)` : `transparent`};
  border-radius: 4px;
  padding: ${(props) => (props.isSmall ? `10px 14px` : `25px`)};
  width: fit-content;
  flex-direction: ${(props) => (props.isSmall ? `row` : `column`)};
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-right: ${(props) => (props.isSmall ? `10px` : `0`)};
  margin-bottom: ${(props) => (props.isSmall ? `10px` : `0`)};
  height: ${(props) => (props.isSmall ? `unset` : `100%`)};
  width: ${(props) => (props.isSmall ? `unset` : `100%`)};
`;

export const Text = styled.Text`
  color: ${(props) =>
    props.isChoice ? `#38B000` : `2px solid rgba(28, 27, 37, 0.7)`};
`;

export const Icon = styled.View`
  margin-bottom: 12px;
`;
