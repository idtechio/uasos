import { VFC } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import styled from "styled-components/native";
import { Theme } from "../../../style/theme.config";
import { Dropdown } from "../../Dropdown";
import InputControl from "../InputControl";
import { CountrySelectProps } from "./types";

export const Error = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.error};
  margin-bottom: 10px;
`;

const CountrySelect: VFC<CountrySelectProps> = (props) => {
  const { label, errorMsg, error, placeholder, multiSelect, zIndex } = props;

  const { t } = useTranslation();

  const countryDropdownList = [
    { label: t("hostAdd.countries.poland"), value: "poland" },
    { label: t("hostAdd.countries.hungary"), value: "hungary" },
    { label: t("hostAdd.countries.czechia"), value: "czechia" },
    { label: t("hostAdd.countries.slovakia"), value: "slovakia" },
  ];

  return (
    <View style={{ zIndex }}>
      <InputControl>
        <Dropdown
          selected={""}
          itemPressFunction={() => {
            return null;
          }}
          data={countryDropdownList}
          placeholder={placeholder}
          error={error}
          label={label}
          multiselect={multiSelect}
        />
        {error && <Error>{errorMsg}</Error>}
      </InputControl>
    </View>
  );
};
export default CountrySelect;
