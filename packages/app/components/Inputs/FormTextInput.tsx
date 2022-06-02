import React from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";

import { Error } from "./style";
import Input from "../Forms/Input";
import InputControl from "../Forms/InputControl";
import { FormKey } from "../../helpers/FormTypes";
import { InputStylesProps } from "../Forms/Input/types";

type Props = {
  name: FormKey;
  label: string;
  error?: FieldError;
  errorMsg?: string;
  extra?: React.ReactNode;
  secureTextEntry?: boolean;
  readonly?: boolean;
  styles?: InputStylesProps;
  zIndex?: number;
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

const FormTextInput = ({
  name,
  label,
  errorMsg,
  rules,
  error,
  extra,
  secureTextEntry,
  readonly,
  styles,
  zIndex,
}: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <InputControl zIndex={zIndex}>
          <Input
            placeholder={label}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            error={error}
            extra={extra}
            secureTextEntry={secureTextEntry}
            readonly={readonly}
            styles={styles}
          />
          {error && <Error>{errorMsg}</Error>}
        </InputControl>
      )}
      name={name}
    />
  );
};

export default FormTextInput;
