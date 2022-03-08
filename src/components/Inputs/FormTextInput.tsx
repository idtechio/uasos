import { Controller, FieldError, useFormContext } from "react-hook-form";

import { Error } from "./style";
import Input from "../Forms/Input";
import InputControl from "../Forms/InputControl";
import { FormKey } from "../../helpers/FormTypes";

type Props = {
  name: FormKey;
  label: string;
  error?: FieldError;
  errorMsg?: string;
  extra?: React.ReactNode;
  labelsBackgroundColor?: string;
  secureTextEntry?: boolean;
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

const FormTextInput = ({
  name,
  label,
  errorMsg,
  rules,
  error,
  extra,
  labelsBackgroundColor,
  secureTextEntry,
}: Props) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur } }) => (
        <InputControl>
          <Input
            placeholder={label}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            extra={extra}
            secureTextEntry={secureTextEntry}
            labelsBackgroundColor={labelsBackgroundColor}
          />
          {error && <Error>{errorMsg}</Error>}
        </InputControl>
      )}
      name={name}
    />
  );
};
export default FormTextInput;
