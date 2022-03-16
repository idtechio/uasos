import { Controller, FieldError, useFormContext } from "react-hook-form";

import { Error } from "./style";
import Input from "../Forms/Input";
import InputControl from "../Forms/InputControl";
import { FormKey } from "../../helpers/FormTypes";
import { Dropdown } from "../Dropdown";
import { CompositionRow } from "../Compositions/CompositionRow";
import { StyleSheet } from "react-native";

type Props = {
  name: FormKey;
  phoneLabel: string;
  phonePrefixLabel: string;
  error?: FieldError;
  errorMsg: string;
  extra?: React.ReactNode;
  labelsBackgroundColor?: string;
  secureTextEntry?: boolean;
};

function FormPhoneInput({
  name,
  phoneLabel,
  phonePrefixLabel,
  errorMsg,
  error,
  extra,
  labelsBackgroundColor,
  secureTextEntry,
  data,
}: Props) {
  const { control } = useFormContext();

  return (
    <CompositionRow spacing={CompositionRowSpacing}>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputControl styles={prefixInputControlStyles}>
            <Dropdown
              data={data}
              placeholder={phonePrefixLabel}
              itemPressFunction={onChange}
              onBlur={onBlur}
              selected={value}
              error={!!error}
              styles={dropdownStyles}
            />
            {error && <Error>{errorMsg}</Error>}
          </InputControl>
        )}
        name={name}
      />
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
            message: errorMsg,
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputControl styles={phoneInputControlStyles}>
            <Input
              withoutLabel
              placeholder={phoneLabel}
              onChange={onChange}
              value={value}
              onBlur={onBlur}
              error={error}
              extra={extra}
              secureTextEntry={secureTextEntry}
              labelsBackgroundColor={labelsBackgroundColor}
              styles={inputStyles}
            />
          </InputControl>
        )}
        name={name}
      />
    </CompositionRow>
  );
}

/* TODO: Styles should be changed in a certain styled-component in accordance with new design  */

const CompositionRowSpacing = 11;

const prefixInputControlStyles = StyleSheet.create({
  wrapper: {
    width: "107px",
  },
});

const phoneInputControlStyles = StyleSheet.create({
  wrapper: {
    maxWidth: "283px",
    width: `calc(100% - 107px - ${CompositionRowSpacing}px)`,
  },
});

const dropdownStyles = StyleSheet.create({
  select: {
    paddingTop: "14px",
    paddingBottom: "14px",
  },
});

const inputStyles = StyleSheet.create({
  wrapper: {
    height: "54px",
  },
  textInput: {
    paddingTop: "15px",
    paddingBottom: "15px",
    height: "54px",
  },
});

export default FormPhoneInput;
