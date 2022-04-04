import type { InputProps } from "./types";
import { InputWraper, TextInput, InputRow } from "./style";

const Input = ({
  placeholder,
  onChange,
  value,
  error,
  extra,
  secureTextEntry,
  styles,
  readonly,
}: InputProps) => (
  <InputWraper style={styles?.wrapper}>
    <InputRow>
      <TextInput
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        error={error}
        secureTextEntry={secureTextEntry}
        style={styles?.textInput}
        editable={!readonly}
      />

      {extra && extra}
    </InputRow>
  </InputWraper>
);

export default Input;
