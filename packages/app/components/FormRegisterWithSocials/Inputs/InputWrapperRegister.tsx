import React, { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { Container } from "./style";

const InputWrapperRegister = ({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: {
    container?: ViewStyle;
  };
}) => <Container style={styles?.container}>{children}</Container>;

export default InputWrapperRegister;
