import React from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";

import { Error } from "./style";
import InputControl from "../Forms/InputControl";
import { FormKey } from "../../helpers/FormTypes";
import Autocomplete from "../Forms/Autocomplete";

type Props = {
  name: FormKey;
  label: string;
  error?: FieldError;
  errorMsg?: string;
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

const FormAutocompleteInput = ({
  name,
  label,
  errorMsg,
  rules,
  error,
}: Props) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <InputControl>
          <Autocomplete
            label={label}
            value={value}
            onChange={onChange}
            error={error}
          />
          {error && <Error>{errorMsg}</Error>}
        </InputControl>
      )}
      name={name}
    />
  );
};
export default FormAutocompleteInput;
