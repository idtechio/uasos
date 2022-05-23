import React from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";

import { Error, Wrapper } from "./style";
import { FormKey } from "../../helpers/FormTypes";
import CheckboxField from "../Forms/CheckboxField";
import InputControl from "../Forms/InputControl";
import { InputControlStylesProps } from "../Forms/InputControl/types";
import { FlattenSimpleInterpolation } from "styled-components";

type Props = {
  name: FormKey;
  label: string;
  error?: FieldError;
  errorMsg?: string;
  value?: boolean;
  isCentered?: boolean;
  styles?: InputControlStylesProps & {
    checkboxFieldWrapper?: FlattenSimpleInterpolation;
  };
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

const FormCheckbox = ({
  name,
  label,
  errorMsg,
  rules,
  error,
  value,
  styles,
  isCentered = true,
}: Props) => {
  const { control } = useFormContext();

  return (
    <InputControl styles={styles}>
      <Wrapper isCentered={isCentered}>
        <Controller
          control={control}
          rules={rules}
          render={({ field: { onChange } }) => (
            <CheckboxField
              error={!!error}
              text={label}
              onChange={onChange}
              value={value}
              wrapperStyle={styles?.checkboxFieldWrapper}
            />
          )}
          name={name}
        />
        {error && <Error>{errorMsg}</Error>}
      </Wrapper>
    </InputControl>
  );
};
export default FormCheckbox;
