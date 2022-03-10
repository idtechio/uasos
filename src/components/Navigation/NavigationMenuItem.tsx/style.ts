import styled from "styled-components/native";
import { Theme } from "../../../style/theme.config";

export const Container = styled.Pressable`
  height: 50px;
  padding-left: 20px;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text}
  margin: 0px 14px;
`;
