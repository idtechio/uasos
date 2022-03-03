import { VFC } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";

import { Error, CenteredView } from "./style";
import { FormKey } from "../../helpers/FormTypes";
import InputControl from "../Forms/InputControl";
import FormDropdown from "./FormDropdown";
import CITY_LIST from "../../consts/citiesDropdown.json";

type Props = {
  name: FormKey;
  label?: string;
  zIndex?: number;
  placeholder?: string;
  error?: FieldError;
  multiSelect?: boolean;
  errorMsg?: string;
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

const FormTextInput: VFC<Props> = (props) => {
  const {
    name,
    label,
    errorMsg,
    rules,
    error,
    zIndex,
    placeholder,
    multiSelect,
  } = props;
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <FormDropdown
            zIndex={zIndex}
            data={CITY_LIST}
            name={name}
            placeholder={placeholder}
            rules={rules}
            error={error}
            label={label}
            errorMsg={errorMsg}
            multiSelect={multiSelect}
          />
        )}
        name={name}
      />
      {error && <Error>{errorMsg}</Error>}
    </>
  );
};
export default FormTextInput;
