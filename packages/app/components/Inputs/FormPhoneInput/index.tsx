import React from "react";
import { Theme } from "../../../provider/theme/theme.config";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import Input from "../../Forms/Input";
import InputControl from "../../Forms/InputControl";
import { FormKey } from "../../../helpers/FormTypes";
import { Dropdown } from "../../Dropdown";
import { CompositionRow } from "../../Compositions/CompositionRow";
import { Error } from "../style";
import { PHONE_INPUT_SIZES } from "./consts";
import { styles } from "./style";

type FormPhoneInputProps = {
  prefixName: FormKey;
  numberName: FormKey;
  phoneLabel: string;
  phonePrefixLabel: string;
  errorPrefix?: FieldError;
  errorPrefixMsg?: string;
  error?: FieldError;
  errorMsg: string;
  extra?: React.ReactNode;
  secureTextEntry?: boolean;
  data: { label: JSX.Element; value: string }[];
};

function FormPhoneInput({
  prefixName,
  numberName,
  phoneLabel,
  phonePrefixLabel,
  errorPrefixMsg,
  errorPrefix,
  errorMsg,
  error,
  extra,
  secureTextEntry,
  data,
}: FormPhoneInputProps) {
  const { control } = useFormContext();

  return (
    <CompositionRow spacing={PHONE_INPUT_SIZES.COMPOSITION_ROW_SPACING}>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputControl styles={{ wrapper: styles.prefixInputControl }}>
            <Dropdown
              data={data}
              placeholder={phonePrefixLabel}
              itemPressFunction={onChange}
              onBlur={onBlur}
              selected={value}
              error={!!error}
              styles={{ select: styles.dropdown }}
            />
            {errorPrefix && errorPrefixMsg && <Error>{errorPrefixMsg}</Error>}
          </InputControl>
        )}
        name={prefixName}
      />
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {
            // https://en.wikipedia.org/wiki/Telephone_numbers_in_Europe
            value: /^[0-9]{3,13}$/,
            message: errorMsg,
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputControl styles={{ wrapper: styles.phoneInputControl }}>
            <Input
              placeholder={phoneLabel}
              onChange={onChange}
              value={value}
              onBlur={onBlur}
              error={error}
              extra={extra}
              secureTextEntry={secureTextEntry}
              styles={{
                wrapper: styles.inputWrapper,
                textInput: styles.inputText,
              }}
              keyboardType={"phone-pad"}
            />
            {error && <Error>{errorMsg}</Error>}
          </InputControl>
        )}
        name={numberName}
      />
    </CompositionRow>
  );
}

export default FormPhoneInput;
