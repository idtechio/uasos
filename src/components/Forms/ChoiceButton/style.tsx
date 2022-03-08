import type { ChoiceButtonProps } from "./type";
import styled from "styled-components/native";

export const Button = styled.View<ChoiceButtonProps>`
  border: ${(props) =>
    props.isChoice
      ? `${props.theme.forms.borderWidth} solid #38B000`
      : props.error
      ? `${props.theme.forms.borderWidth} solid ${props.theme.colors.error}`
      : `${props.theme.forms.borderWidth} solid rgba(28, 27, 37, 0.3)`};
  background-color: ${(props) =>
    props.isSelected ? `rgba(56, 176, 0, 0.1)` : `transparent`};
  border-radius: 4px;
  padding: ${(props) => (props.isSmall ? `10px 14px` : `25px`)};
  width: fit-content;
  flex-direction: ${(props) => (props.isSmall ? `row` : `column`)};
  align-items: center;
  justify-content: ${(props) => (props.isVertical ? `flex-left` : `center`)};
  text-align: center;
  margin-right: ${(props) =>
    props.isSmall ? (props.isVertical ? `0` : `10px`) : `0`};
  margin-bottom: ${(props) => (props.isSmall ? `10px` : `0`)};
  height: ${(props) => (props.isSmall ? `unset` : `100%`)};
  width: ${(props) => (props.isSmall ? `unset` : `100%`)};
`;

export const Text = styled.Text`
  text-align: ${(props) => (props.isSmall ? `left` : `center`)};
  color: ${(props) =>
    props.isChoice
      ? `#38B000`
      : `${props.theme.forms.borderWidth} solid rgba(28, 27, 37, 0.7)`};
`;

export const Icon = styled.View<ChoiceButtonProps>`
  margin-bottom: ${(props) => (props.isVertical ? `0` : `12px`)};
  margin-right: ${(props) => (props.isVertical ? `12px` : `0`)};
  color: ${(props) =>
    props.isSelected ? `#38B000` : `2px solid rgba(28, 27, 37, 0.7)`};
`;
