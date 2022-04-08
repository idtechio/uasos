import { Controller, FieldError, useFormContext } from "react-hook-form";

import { Error, Wrapper } from "./style";
import { FormKey } from "../../helpers/FormTypes";
import CheckboxField from "../Forms/CheckboxField";
import InputControl from "../Forms/InputControl";

type Props = {
  name: FormKey;
  label: string;
  error?: FieldError;
  errorMsg?: string;
  value?: boolean;
  isCentered?: boolean;
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

const FormCheckbox = ({
  name,
  label,
  errorMsg,
  rules,
  error,
  value,
  isCentered = true,
}: Props) => {
  const { control } = useFormContext();

  return (
    <InputControl>
      <Wrapper isCentered={isCentered}>
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
      </Wrapper>
    </InputControl>
  );
};
export default FormCheckbox;
