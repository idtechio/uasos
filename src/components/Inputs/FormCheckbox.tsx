import { VFC, ReactNode } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";

import { Error, CenteredView } from "./style";
import { FormKey } from "../../helpers/FormTypes";
import CheckboxField from "../Forms/CheckboxField";
import InputControl from "../Forms/InputControl";

type Props = {
  name: FormKey;
  label: string;
  error?: FieldError;
  errorMsg?: string;
  value?: boolean;
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

const FormCheckbox: VFC<Props> = (props) => {
  const { name, label, errorMsg, rules, error, value } = props;
  const { control } = useFormContext();
  console.log("value", value);
  return (
    <InputControl>
      <CenteredView>
        <Controller
          control={control}
          rules={rules}
          render={({ field: { onChange } }) => (
            <CheckboxField
              error={!!error}
              text={label}
              onChange={onChange}
              value={value}
            />
          )}
          name={name}
        />
        {error && <Error>{errorMsg}</Error>}
      </CenteredView>
    </InputControl>
  );
};
export default FormCheckbox;
