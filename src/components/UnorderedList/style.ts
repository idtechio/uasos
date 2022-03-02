import styled from "styled-components/native";

export const Column = styled.View`
  display: flex;
  flex-direction: column;
`;

export const ColumnBulletPoint = styled.Text`
  align-self: flex-start;
  justify-content: flex-start;
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
  color: ${({ theme }) => theme.colors.text};
  max-width: 85vw;
`;
