import { VFC } from "react";
import {
  Controller,
  FieldError,
  useForm,
  useFormContext,
} from "react-hook-form";
import InputControl from "../Forms/InputControl";
import { View } from "react-native";
import { FormKey } from "../../helpers/FormTypes";
import { DropdownProps } from "../Dropdown/types";
import { Dropdown } from "../Dropdown";
import { Error } from "./style";

type Props = {
  name: FormKey;
  label?: DropdownProps["label"];
  placeholder?: DropdownProps["placeholder"];
  error?: FieldError;
  data: DropdownProps["data"];
  errorMsg?: string;
  multiSelect?: boolean;
  onChange?: (selected: string | string[]) => void;
  zIndex?: number;
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

const FormDropdown: VFC<Props> = (props) => {
  const {
    name,
    label,
    errorMsg,
    rules,
    error,
    data,
    placeholder,
    zIndex,
    onChange: onChangeProp,
    multiSelect = false,
  } = props;
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => {
        const handleChange = (selected) => {
          if (multiSelect) {
            let items = value ?? [];

            if (items.includes(selected)) {
              items = items.filter((v) => v !== selected);
            } else {
              items = [...items, selected];
            }

            onChange(items);
            onChangeProp && onChangeProp(items);
          } else {
            onChange(selected);
            onChangeProp && onChangeProp(selected);
          }
        };

        return (
          <View style={{ zIndex }}>
            <InputControl>
              <Dropdown
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
};

export default FormDropdown;
