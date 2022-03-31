import { useMemo, VFC } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "../../Dropdown";
import { LanguageFlags } from "../../LanguageSwitcher/LanguageFlags";
import InputControl from "../InputControl";
import { ErrorMessage, LabelContainer, LabelText } from "./style";
import { CountryDropdownItemType, CountrySelectProps } from "./types";

const useCountriesList = (data?: CountryDropdownItemType[]) => {
  const { t } = useTranslation();

  const result = useMemo(
    () =>
      data || [
        {
          label: (
            <LabelContainer>
              <LanguageFlags locale="pl" />
              <LabelText>{t("hostAdd.countries.poland")}</LabelText>
            </LabelContainer>
          ),
          value: "poland",
        },
        {
          label: (
            <LabelContainer>
              <LanguageFlags locale="hu" />
              <LabelText>{t("hostAdd.countries.hungary")}</LabelText>
            </LabelContainer>
          ),
          value: "hungary",
        },
        {
          label: (
            <LabelContainer>
              <LanguageFlags locale="cs" />
              <LabelText>{t("hostAdd.countries.czechia")}</LabelText>
            </LabelContainer>
          ),
          value: "czechia",
        },
        {
          label: (
            <LabelContainer>
              <LanguageFlags locale="sk" />
              <LabelText>{t("hostAdd.countries.slovakia")}</LabelText>
            </LabelContainer>
          ),
          value: "slovakia",
        },
      ],
    [t, data]
  );

  return result;
};

const CountrySelect: VFC<CountrySelectProps> = (props) => {
  const {
    label,
    errorMsg,
    error,
    placeholder,
    multiSelect,
    data,
    onChange,
    value,
  } = props;
  const dropdownData = useCountriesList(data);

  return (
    <InputControl
      styles={{
        wrapper: {
          width: "100%",
          maxWidth: "initial",
          marginBottom: 0,
        },
      }}
    >
      <Dropdown
        selected={value}
        itemPressFunction={onChange}
        data={dropdownData}
        placeholder={placeholder}
        error={error}
        label={label}
        multiselect={multiSelect}
      />
      {error && <ErrorMessage>{errorMsg}</ErrorMessage>}
    </InputControl>
  );
};
export default CountrySelect;
