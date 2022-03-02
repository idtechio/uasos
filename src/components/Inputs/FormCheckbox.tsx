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
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

const FormTextInput: VFC<Props> = (props) => {
  const { name, label, errorMsg, rules, error } = props;
  const { control } = useFormContext();
  return (
    <InputControl>
      <CenteredView>
        <Controller
          control={control}
          rules={rules}
          render={({ field: { onChange } }) => (
            <CheckboxField error={!!error} text={label} onChange={onChange} />
          )}
          name={name}
        />
        {error && <Error>{errorMsg}</Error>}
      </CenteredView>
    </InputControl>
  );
};
export default FormTextInput;
