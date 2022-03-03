import styled from "styled-components/native";

export const Label = styled.Text`
  color: ${(props) => (props.error ? `#d8000c` : `inherit`)};
`;
