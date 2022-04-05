import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";
import styled from "styled-components/native";

const Label = styled.Text`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #003566;
  margin-bottom: 10px;
  display: block;
`;

const Container = styled.View`
  display: block;
  margin-top: 35px;
`;

export const InputWrapper = ({
  label,
  children,
  styles,
}: {
  label: string;
  children: ReactNode;
  styles?: {
    container?: ViewStyle;
    label?: TextStyle;
  };
}) => (
  <Container style={styles?.container}>
    <Label style={styles?.label}>{label}</Label>
    {children}
  </Container>
);
