import { VFC } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import NumericInput from "../Forms/NumericInput";
import InputControl from "../Forms/InputControl";
import { FormKey } from "../../helpers/FormTypes";
import { Error } from "./style";

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
          {error && <Error>{errorMsg}</Error>}
        </InputControl>
      )}
      name={name}
    />
  );
};
export default FormTextInput;
