import { VFC } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";

import { FormKey } from "../../helpers/FormTypes";
import FormDropdown from "./FormDropdown";
import COUNTRY_LIST from "../../consts/countryDropdown.json";

type Props = {
  name: FormKey;
  label?: string;
  zIndex?: number;
  placeholder?: string;
  error?: FieldError;
  multiSelect?: boolean;
  errorMsg?: string;
  onChange?: (selected: string | string[]) => void;
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
    onChange,
  } = props;
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      rules={rules}
      render={() => (
        <FormDropdown
          zIndex={zIndex}
          data={COUNTRY_LIST}
          name={name}
          placeholder={placeholder}
          rules={rules}
          error={error}
          label={label}
          errorMsg={errorMsg}
          multiSelect={multiSelect}
          onChange={onChange}
        />
      )}
      name={name}
    />
  );
};
export default FormTextInput;
