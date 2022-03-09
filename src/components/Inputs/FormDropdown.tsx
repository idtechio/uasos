import { Controller, FieldError, useFormContext } from "react-hook-form";
import InputControl from "../Forms/InputControl";
import { View } from "react-native";
import { FormKey } from "../../helpers/FormTypes";
import { DropdownProps } from "../Dropdown/types";
import { Dropdown } from "../Dropdown";
import { Error } from "./style";

type Props<T> = {
  name: FormKey;
  error?: FieldError | FieldError[];
  errorMsg?: string;
  multiSelect?: boolean;
  zIndex?: number;
} & Pick<DropdownProps<T>, "label" | "placeholder" | "data"> &
  Pick<React.ComponentProps<typeof Controller>, "rules">;

function FormDropdown<T>({
  name,
  label,
  errorMsg,
  rules,
  error,
  data,
  placeholder,
  zIndex,
  multiSelect = false,
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => {
        const handleChange = (selected) => {
          if (multiSelect) {
            const items = value ?? [];

            if (items.includes(selected)) {
              onChange(items.filter((v) => v !== selected));
            } else {
              onChange([...items, selected]);
            }
          } else {
            onChange(selected);
          }
        };

        return (
          <View style={{ zIndex }}>
            <InputControl>
              <Dropdown<T>
                multiselect={multiSelect}
                data={data}
                placeholder={placeholder}
                label={label}
                itemPressFunction={handleChange}
                onBlur={onBlur}
                selected={value}
                error={!!error}
              />
              {error && <Error>{errorMsg}</Error>}
            </InputControl>
          </View>
        );
      }}
      name={name}
    />
  );
}

export default FormDropdown;
