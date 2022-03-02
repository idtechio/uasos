import styled from "styled-components/native";

export const InputWraper = styled.View`
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: center;
`;

export const TextInput = styled.TextInput`
  border: 2px solid
    ${(props) => (props.error ? `#D8000C` : `rgba(28, 27, 37, 0.3)`)};
  background-color: transparent;
  padding: 20px;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  &:focus {
    outlinecolor: "#003566";
  }
`;

export const Error = styled.Text`
  color: #d8000c;
`;

export const Controls = styled.View`
  position: absolute;
  right: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.TouchableOpacity`
  padding-left: 8px;
  padding-right: 8px;
`;
