import { VFC } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";

import { FormKey } from "../../helpers/FormTypes";
import { useTranslation } from "react-i18next";
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

  const { t } = useTranslation();

  const countryDropdownList = [
    {
      label: (
        <div>
          <LanguageFlags locale="pl" />
          <span style={{ marginLeft: 5 }}>{t("hostAdd.countries.poland")}</span>
        </div>
      ),
      value: "poland",
    },
    {
      label: (
        <div>
          <LanguageFlags locale="hu" />
          <span style={{ marginLeft: 5 }}>
            {t("hostAdd.countries.hungary")}
          </span>
        </div>
      ),
      value: "hungary",
    },
    {
      label: (
        <div>
          <LanguageFlags locale="cs" />
          <span style={{ marginLeft: 5 }}>
            {t("hostAdd.countries.czechia")}
          </span>
        </div>
      ),
      value: "czechia",
    },
    {
      label: (
        <div>
          <LanguageFlags locale="sk" />
          <span style={{ marginLeft: 5 }}>
            {t("hostAdd.countries.slovakia")}
          </span>
        </div>
      ),
      value: "slovakia",
    },
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
export default FormTextInput;
