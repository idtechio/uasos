import styled from "styled-components/native";

export const Text = styled.Text`
  font-size: 16px;
  &:hover {
    color: rgba(56, 176, 0, 1);
  }
`;

export const Touchable = styled.TouchableOpacity`
  cursor: ${(props) => (props.disabled ? `default` : `pointer`)};
  padding: 20px;
`;

export const View = styled.View`
  background-color: #fff;
  &:hover {
    background-color: #ebf7e6;
  }
`;
