import { useMemo, VFC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import { Theme } from "../../../style/theme.config";
import { Dropdown } from "../../Dropdown";
import { LanguageFlags } from "../../LanguageSwitcher/LanguageFlags";
import InputControl from "../InputControl";
import { CountryDropdownItemType, CountrySelectProps } from "./types";

export const Error = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.error};
  margin-bottom: 10px;
`;

const useCountriesList = (data?: CountryDropdownItemType[]) => {
  const { t } = useTranslation();

  const result = useMemo(
    () =>
      data || [
        {
          label: (
            <span>
              <LanguageFlags locale="pl" /> {t("hostAdd.countries.poland")}
            </span>
          ),
          value: "poland",
        },
        {
          label: (
            <span>
              <LanguageFlags locale="hu" /> {t("hostAdd.countries.hungary")}
            </span>
          ),
          value: "hungary",
        },
        {
          label: (
            <span>
              <LanguageFlags locale="cs" /> {t("hostAdd.countries.czechia")}
            </span>
          ),
          value: "czechia",
        },
        {
          label: (
            <span>
              <LanguageFlags locale="sk" /> {t("hostAdd.countries.slovakia")}
            </span>
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
      {error && <Error>{errorMsg}</Error>}
    </InputControl>
  );
};
export default CountrySelect;
