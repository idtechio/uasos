import { VFC } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";

import { FormKey } from "../../helpers/FormTypes";
import { TFunction, useTranslation } from "react-i18next";
import FormDropdown from "./FormDropdown";
import { LanguageFlags } from "../LanguageSwitcher/LanguageFlags";
import styled from "styled-components/native";

type Props = {
  name: FormKey;
  label?: string;
  zIndex?: number;
  placeholder?: string;
  countriesData?: CountryData[];
  error?: FieldError;
  multiSelect?: boolean;
  errorMsg?: string;
  onChange?: (selected: string | string[]) => void;
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

export type LabelFunction = (t: TFunction<"translation", undefined>) => string;
export type CountryData = {
  icon: string;
  label: LabelFunction | string;
  value: string;
};

export const DEFAULT_COUNTRIES_DATA: (Omit<CountryData, "label"> & {
  label: string;
})[] = [
  {
    icon: "pl",
    label: "hostAdd.countries.poland",
    value: "poland",
  },
  {
    icon: "hu",
    label: "hostAdd.countries.hungary",
    value: "hungary",
  },
  { icon: "cs", label: "hostAdd.countries.czechia", value: "czechia" },
  {
    icon: "sk",
    label: "hostAdd.countries.slovakia",
    value: "slovakia",
  },
  {
    icon: "ro",
    label: "hostAdd.countries.romania",
    value: "romania",
  },
];

const FormTextInput: VFC<Props> = (props) => {
  const {
    name,
    label,
    errorMsg,
    rules,
    countriesData,
    error,
    zIndex,
    placeholder,
    multiSelect,
  } = props;

  const { t } = useTranslation();
  const translateLabel = (label: LabelFunction | string) => {
    if (typeof label === "string") {
      return t(label);
    }
    return label(t);
  };

  const countryDropdownList = (countriesData ?? DEFAULT_COUNTRIES_DATA).map(
    (country) => ({
      label: (
        <FlexAlignCenter>
          <LanguageFlags locale={country.icon} />
          <span style={{ marginLeft: 5 }}>{translateLabel(country.label)}</span>
        </FlexAlignCenter>
      ),
      value: country.value,
    })
  );

  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      rules={rules}
      render={() => (
        <FormDropdown
          zIndex={zIndex}
          data={countryDropdownList}
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

const FlexAlignCenter = styled.View`
  flex-direction: row;
  align-items: center;
`;
