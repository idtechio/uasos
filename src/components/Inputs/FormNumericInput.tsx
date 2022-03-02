import { VFC } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import NumericInput from "../Forms/NumericInput";
import InputControl from "../Forms/InputControl";
import { StyleSheet, Text } from "react-native";
import { FormKey } from "../../helpers/FormTypes";

const styles = StyleSheet.create({
  error: {
    color: "#D8000C",
    marginTop: 10,
  },
});

type Props = {
  name: FormKey;
  error?: FieldError;
  errorMsg?: string;
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

const FormTextInput: VFC<Props> = (props) => {
  const { name, errorMsg, rules, error } = props;
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <InputControl>
          <NumericInput onChange={onChange} value={value} error={error} />
          {error && <Text style={styles.error}>{errorMsg}</Text>}
        </InputControl>
      )}
      name={name}
    />
  );
};
export default FormTextInput;
