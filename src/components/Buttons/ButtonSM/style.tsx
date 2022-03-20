import styled from "styled-components/native";
import { Theme } from "../../../style/theme.config";

export const Button = styled.Pressable`
  background-color: ${({ theme }: { theme: Theme }) =>
    theme.colors.secondaryBlue};
  border-radius: 4px;
  padding: 13px 16px 13px 5px;
  margin: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }
`;

export const Text = styled.Text`
  font-weight: 400;
  color: ${({ theme }: { theme: Theme }) => theme.colors.textOnAccent};
  width: 100%;
  display: flex;
  margin-left: 10px;
`;
