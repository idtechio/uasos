import React, { VFC } from "react";
import styled, { css } from "styled-components/native";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import { useTranslation } from "../../common-i18n/use-translation";
import { Theme } from "../../provider/theme/theme.config";
import { FormKey } from "../../helpers/FormTypes";
import FormDropdown from "./FormDropdown";
import { LanguageFlags } from "../LanguageSwitcher/LanguageFlags";

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

type Country = "poland" | "hungary" | "czechia" | "slovakia" | "romania";

type Label = `hostAdd.countries.${Country}`;

interface CountryObject {
  icon: string;
  label: Label;
  value: string;
}

const countriesData: Array<CountryObject> = [
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

const FormTextInput: VFC<Props> = ({
  name,
  label,
  errorMsg,
  rules,
  error,
  zIndex,
  placeholder,
  multiSelect,
}) => {
  const { t } = useTranslation();

  const countryDropdownList = countriesData.map((country) => ({
    label: (
      <FlexAlignCenter>
        <LanguageFlags locale={country.icon} />
        <Text>{t(country.label)}</Text>
      </FlexAlignCenter>
    ),
    value: country.value,
  }));

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

const Text = styled.Text<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-left: 5px;
      `,
      native: css`
        margin-left: ${theme.scale(5)}px;
      `,
    })}
`;
