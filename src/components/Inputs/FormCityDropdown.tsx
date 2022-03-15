import { VFC } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";

import { FormKey } from "../../helpers/FormTypes";
import FormDropdown from "./FormDropdown";
import CITY_LIST_CZ from "../../consts/cities/cz.json";
import CITY_LIST_HU from "../../consts/cities/hu.json";
import CITY_LIST_PL from "../../consts/cities/pl.json";
import CITY_LIST_SK from "../../consts/cities/sk.json";

type Props = {
  name: FormKey;
  country: string;
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
    country,
    errorMsg,
    rules,
    error,
    zIndex,
    placeholder,
    multiSelect,
    onChange,
  } = props;
  const { control } = useFormContext();
  let cityList: { label: string; value: unknown }[] = [];

  switch (country) {
    case "czechia":
      cityList = CITY_LIST_CZ;
      break;
    case "hungary":
      cityList = CITY_LIST_HU;
      break;
    case "poland":
      cityList = CITY_LIST_PL;
      break;
    case "slovakia":
      cityList = CITY_LIST_SK;
      break;
  }

  return (
    <Controller
      control={control}
      rules={rules}
      render={() => (
        <FormDropdown
          zIndex={zIndex}
          data={cityList}
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
  );
};
export default FormTextInput;
