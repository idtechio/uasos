import React, { useMemo, VFC } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "../../Dropdown";
import InputControl from "../InputControl";
import { getDefaultCountryList } from "./defaultLists";
import { ErrorMessage } from "./style";
import { CountryDropdownItemType, CountrySelectProps } from "./types";

const useCountriesList = (data?: CountryDropdownItemType[]) => {
  const { t } = useTranslation();
  const result = useMemo(() => data || getDefaultCountryList(t), [t, data]);

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
