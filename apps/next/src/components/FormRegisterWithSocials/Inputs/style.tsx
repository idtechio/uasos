import React, { ReactNode } from "react";
import { ViewStyle } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  display: block;
  margin-top: 0px;
  margin-bottom: 30px;
`;

export const InputWrapperRegister = ({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: {
    container?: ViewStyle;
  };
}) => <Container style={styles?.container}>{children}</Container>;
