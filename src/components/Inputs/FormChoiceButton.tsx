import React from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import { FormKey } from "../../helpers/FormTypes";
import { ChoiceButton, InputControl } from "../Forms";
import { Error } from "./style";

type Props = {
  text: React.ReactNode;
  name: FormKey;
  error?: FieldError;
  errorMsg?: string;
  icon?: React.ReactNode;
};

const FormChoiceButton = ({ text, name, error, errorMsg, icon }: Props) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      rules={{
        required: false,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <InputControl>
          <ChoiceButton
            text={text}
            isSmall
            isSelected={!!value}
            onPress={() => {
              onChange(!value);
              onBlur();
            }}
            icon={icon}
          />
          {error && <Error>{errorMsg}</Error>}
        </InputControl>
      )}
      name={name}
    />
  );
};

export default FormChoiceButton;
