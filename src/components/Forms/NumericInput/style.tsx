import styled from "styled-components/native";

export const InputWraper = styled.View`
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: center;
`;

export const TextInput = styled.TextInput`
  border: ${(props) => props.theme.forms.borderWidth} solid
    ${(props) => (props.error ? `#D8000C` : `rgba(28, 27, 37, 0.3)`)};
  background-color: ${(props) => props.theme.pageSection.backgroundColor};
  min-height: 24px;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
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
