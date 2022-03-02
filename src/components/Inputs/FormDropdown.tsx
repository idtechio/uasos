import { VFC } from "react";
import {
  Controller,
  FieldError,
  useForm,
  useFormContext,
} from "react-hook-form";
import Input from "../Forms/Input";
import InputControl from "../Forms/InputControl";
import { StyleSheet, Text, View } from "react-native";
import { FormKey } from "../../helpers/FormTypes";
import { DropdownProps } from "../Dropdown/types";
import { Dropdown } from "../Dropdown";

const styles = StyleSheet.create({
  error: {
    color: "#D8000C",
    marginTop: 10,
  },
});

type Props = {
  name: FormKey;
  label?: DropdownProps["label"];
  placeholder?: DropdownProps["placeholder"];
  error?: FieldError;
  data: DropdownProps["data"];
  errorMsg?: string;
  zIndex?: number;
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

const FormDropdown: VFC<Props> = (props) => {
  const { name, label, errorMsg, rules, error, data, placeholder, zIndex } =
    props;
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={{ zIndex }}>
          <InputControl>
            <Dropdown
              data={data}
              placeholder={placeholder}
              label={label}
              itemPressFunction={onChange}
              onBlur={onBlur}
              selected={value}
              /*error={error}*/
            />
            {error && <Text style={styles.error}>{errorMsg}</Text>}
          </InputControl>
        </View>
      )}
      name={name}
    />
  );
};

export default FormDropdown;
