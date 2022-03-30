import { VFC } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";

import { FormKey } from "../../helpers/FormTypes";
import { useTranslation } from "react-i18next";
import FormDropdown from "./FormDropdown";

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

const FormLanguageDropdown: VFC<Props> = (props) => {
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

  const { t } = useTranslation();

  const countryDropdownList = [
    { label: t("hostAdd.countries.poland"), value: "poland" },
    { label: t("hostAdd.countries.hungary"), value: "hungary" },
    { label: t("hostAdd.countries.czechia"), value: "czechia" },
    { label: t("hostAdd.countries.slovakia"), value: "slovakia" },
  ];

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
export default FormLanguageDropdown;
