import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";

export const ColumnBulletPoint = styled.Text`
  align-self: flex-start;
  justify-content: flex-start;
  padding-right: 6px;
  padding-top: 2px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
`;

export const PointColumn = styled.View`
  align-self: flex-start;
  justify-content: flex-start;
  margin-right: 5px;
  margin-left: 3px;
`;

export const ColumnText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 14px;
  line-height: 20px;
`;
