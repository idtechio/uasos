import { VFC, ReactNode } from "react";
import {
  Controller,
  FieldError,
  useForm,
  useFormContext,
} from "react-hook-form";
import Input from "../Forms/Input";
import InputControl from "../Forms/InputControl";
import { Text, ViewStyle, StyleProp, StyleSheet } from "react-native";
import { FormKey } from "../../helpers/FormTypes";

const styles = StyleSheet.create({
  error: {
    color: "#D8000C",
    marginTop: 10,
  },
});

type Props = {
  name: FormKey;
  label: string;
  error?: FieldError;
  errorMsg?: string;
  extra?: ReactNode;
  labelsStyle?: StyleProp<ViewStyle>;
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

const FormTextInput: VFC<Props> = (props) => {
  const { name, label, errorMsg, rules, error, extra, labelsStyle } = props;
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <InputControl>
          <Input
            placeholder={label}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={error}
            extra={extra}
            labelsStyle={labelsStyle}
          />
          {error && <Text style={styles.error}>{errorMsg}</Text>}
        </InputControl>
      )}
      name={name}
    />
  );
};
export default FormTextInput;
