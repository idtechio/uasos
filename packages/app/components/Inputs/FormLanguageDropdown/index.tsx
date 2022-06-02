import React, { VFC } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import { FormKey } from "../../../helpers/FormTypes";
import { useRouter } from "next/router";
import { generateLanguageDropdownList } from "./helpers";
import { StyleSheet } from "react-native";
import { Dropdown } from "../../Dropdown";
import { Error } from "../style";
import InputControl from "../../Forms/InputControl";

type Props = {
  name: FormKey;
  label?: string;
  zIndex?: number;
  placeholder?: string;
  error?: FieldError;
  multiSelect?: boolean;
  errorMsg?: string;
  onChange?: (selected: string | string[]) => void;
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

const FormLanguageDropdown: VFC<Props> = (props) => {
  const { name, errorMsg, rules, error, placeholder } = props;
  const { locales } = useRouter();
  const { control } = useFormContext();

  if (!locales) {
    return null;
  }

  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <InputControl>
          <Dropdown
            data={generateLanguageDropdownList(locales)}
            placeholder={placeholder}
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
  );
};

const dropdownStyles = StyleSheet.create({
  select: {
    paddingTop: "14px",
    paddingBottom: "14px",
    height: "54px",
  },
});

export default FormLanguageDropdown;
