import type { InputProps } from "./types";
import { InputWraper, Label, TextInput, InputRow } from "./style";
import React, { useState } from "react";

const Input = ({
  placeholder,
  onChange,
  onBlur,
  value,
  error,
  extra,
  labelsStyle,
}: InputProps) => {
  const [hideLabel, setHideLabel] = useState(true);

  const hendleOnBlur = (e) => {
    e.target.placeholder = placeholder;
    if (value === "") {
      setHideLabel(true);
    }
  };
  const hendleOnFocus = (e) => {
    e.target.placeholder = "";
    setHideLabel(false);
  };

  return (
    <InputWraper>
      {hideLabel ? null : <Label style={labelsStyle}>{placeholder}</Label>}
      <InputRow>
        <TextInput
          // onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          onFocus={(e) => hendleOnFocus(e)}
          onBlur={(e) => hendleOnBlur(e)}
          error={error}
        />

        {extra && extra}
      </InputRow>
    </InputWraper>
  );
};

export default Input;
