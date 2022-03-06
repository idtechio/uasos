import styled from "styled-components/native";

export const Dropdown = styled.View`
  border-radius: 4px;
  border: solid 2px rgba(28, 27, 37, 0.3);
  position: absolute;
  top: 60px
  width: 100%;
  zindex: 100;
`;

export const Separator = styled.View`
  height: 1px 
  background-color: rgba(28, 27, 37, 0.3)
`;

export const InputRow = styled.View`
  align-items: center;
  border-radius: 4px;
  border: 2px solid
    ${({ error }) => (error ? `#D8000C` : `rgba(28, 27, 37, 0.3)`)};
  flex-direction: row;
  &:focus {
    outline-color: "#003566";
  }
`;

export const TextInput = styled.TextInput`
  background-color: transparent;
  border: 0;
  padding: 20px;
  font-size: 16px;
  width: 100%;
  outline-color: none !important;
  outline-width: 0;
`;

export const Error = styled.Text`
  color: #d8000c;
`;
