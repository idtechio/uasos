import React, { useState } from "react";
import type { InputProps } from "./types";
import { InputWrapper, TextInput, InputRow } from "./style";

const Input = ({
  placeholder,
  onChange,
  value,
  error,
  extra,
  secureTextEntry,
  styles,
  readonly,
  keyboardType = "default",
}: InputProps) => {
  const [focused, setFocused] = useState(false);

  const focusHandler = (focusState: boolean) => () => {
    setFocused(focusState);
  };

  return (
    <InputWrapper style={styles?.wrapper}>
      <InputRow>
        <TextInput
          focused={focused}
          onChangeText={onChange}
          onFocus={focusHandler(true)}
          onBlur={focusHandler(false)}
          value={value}
          placeholder={placeholder}
          error={error}
          secureTextEntry={secureTextEntry}
          style={styles?.textInput}
          editable={!readonly}
          keyboardType={keyboardType}
        />
        {extra && extra}
      </InputRow>
    </InputWrapper>
  );
};

export default Input;
