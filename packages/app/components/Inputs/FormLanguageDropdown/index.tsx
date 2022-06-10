import React, { VFC } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import { useRouter } from "solito/router";
import { FormKey } from "../../../helpers/FormTypes";
import { generateLanguageDropdownList } from "./helpers";
import { Dropdown } from "../../Dropdown";
import { Error } from "../style";
import InputControl from "../../Forms/InputControl";
import { styles } from "./style";

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
  // TODO: find how to get locales for generateLanguageDropdown function
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
            styles={{ select: styles.select }}
          />
          {error && <Error>{errorMsg}</Error>}
        </InputControl>
      )}
      name={name}
    />
  );
};

export default FormLanguageDropdown;
