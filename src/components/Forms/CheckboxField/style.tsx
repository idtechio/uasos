import styled from "styled-components/native";

export const Label = styled.Text`
  color: ${(props) => (props.error ? props.theme.colors.error : `inherit`)};
`;
