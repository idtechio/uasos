import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";

export const WarningWrapper = styled.View`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.warning};
  border-radius: 5px;
  border-width: 1px;
  border-color: ${({ theme }: { theme: Theme }) => theme.colors.alert};
  display: flex;
  flex-direction: row;
  padding: 12px;
`;

export const TextWrapper = styled.View`
  flex-shrink: initial;
  margin-left: 12px;
`;

export const HeaderText = styled.Text`
  font-size: 16px;
  line-height: 21px;
`;

export const ListItem = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Bullet = styled.View`
  width: 3px;
  height: 3px;
  background-color: black;
  border-radius: 100%;
  margin-top: 8px;
`;
