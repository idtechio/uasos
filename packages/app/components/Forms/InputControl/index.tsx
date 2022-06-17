import React from "react";
import type { InputControlProps } from "./types";
import { InputWrapper } from "./style";

const InputControl = ({ children, zIndex, styles }: InputControlProps) => {
  return (
    <InputWrapper zIndex={zIndex} style={styles?.wrapper}>
      {children}
    </InputWrapper>
  );
};

export default InputControl;
