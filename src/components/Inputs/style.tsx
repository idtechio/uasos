import styled from "styled-components/native";

export const Error = styled.Text`
  color: ${(props) => props.theme.colors.error};
  margin-bottom: 10px;
`;

export const CenteredView = styled.View`
  display: flex;
  align-items: center;
`;
