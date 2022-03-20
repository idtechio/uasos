import type { InputProps } from "./types";
import { InputWraper, Label, TextInput, InputRow } from "./style";
import { useState } from "react";

const Input = ({
  placeholder,
  onChange,
  value,
  error,
  extra,
  labelsBackgroundColor,
  secureTextEntry,
  withoutLabel,
  styles,
}: InputProps) => {
  const [hideLabel, setHideLabel] = useState(true);
  // @ts-expect-error TODO: add event type
  const hendleOnBlur = (e) => {
    e.target.placeholder = placeholder;
    if (value === "") {
      setHideLabel(true);
    }
  };
  // @ts-expect-error TODO: add event type
  const hendleOnFocus = (e) => {
    e.target.placeholder = "";
    setHideLabel(false);
  };

  return (
    <InputWraper style={styles?.wrapper}>
      {hideLabel || withoutLabel ? null : (
        <Label labelsBackgroundColor={labelsBackgroundColor}>
          {placeholder}
        </Label>
      )}
      <InputRow>
        <TextInput
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          onFocus={(e) => hendleOnFocus(e)}
          onBlur={(e) => hendleOnBlur(e)}
          error={error}
          secureTextEntry={secureTextEntry}
          style={styles?.textInput}
        />

        {extra && extra}
      </InputRow>
    </InputWraper>
  );
};

export default Input;
