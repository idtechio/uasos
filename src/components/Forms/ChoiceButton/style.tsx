import type { ChoiceButtonProps } from "./type";
import styled from "styled-components/native";

export const Button = styled.View`
  border: 2px solid rgba(28, 27, 37, 0.3);
  border-radius: 4px;
  padding: 10px 12px;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Text = styled.Text``;

export const Icon = styled.View`
  margin-bottom: 12px;
`;
