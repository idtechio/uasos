import { VFC } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import { TFunction, useTranslation } from "react-i18next";
import { FormKey } from "../../helpers/FormTypes";
import FormDropdown from "./FormDropdown";
import CITY_LIST_CZ from "../../consts/cities/cz.json";
import CITY_LIST_HU from "../../consts/cities/hu.json";
import CITY_LIST_PL from "../../consts/cities/pl.json";
import CITY_LIST_SK from "../../consts/cities/sk.json";
import CITY_LIST_RO from "../../consts/cities/ro.json";

type Props = {
  name: FormKey;
  country: string;
  label?: string;
  zIndex?: number;
  placeholder?: string;
  buildCityList?: BuildCityList;
  error?: FieldError;
  multiSelect?: boolean;
  errorMsg?: string;
  onChange?: (selected: string | string[]) => void;
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

export type BuildCityList = (
  t: TFunction<"translation", undefined>,
  country: string
) => { label: string; value: unknown }[];

export const defaultBuildCityList: BuildCityList = (_, country) => {
  switch (country) {
    case "czechia":
      return CITY_LIST_CZ;
    case "hungary":
      return CITY_LIST_HU;
    case "poland":
      return CITY_LIST_PL;
    case "slovakia":
      return CITY_LIST_SK;
    case "romania":
      return CITY_LIST_RO;
    default:
      return [];
  }
};

const FormTextInput: VFC<Props> = (props) => {
  const {
    name,
    label,
    country,
    errorMsg,
    rules,
    buildCityList,
    error,
    zIndex,
    placeholder,
    multiSelect,
  } = props;
  const { control } = useFormContext();
  const { t } = useTranslation();

  const cityList = (buildCityList ?? defaultBuildCityList)(t, country);

  return (
    <Controller
      control={control}
      rules={rules}
      render={() => (
        <FormDropdown
          name={name}
          rules={rules}
          error={error}
          label={label}
          zIndex={zIndex}
          data={cityList}
          errorMsg={errorMsg}
          placeholder={placeholder}
          multiSelect={multiSelect}
        />
      )}
      name={name}
    />
  );
};
export default FormTextInput;
