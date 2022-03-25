import { useMemo, VFC } from "react";
import styled from "styled-components/native";
import { Theme } from "../../../style/theme.config";
import { Dropdown } from "../../Dropdown";
import { generatePhonePrefixDropdownList } from "../../Inputs/FormPhoneInput/helpers";
import InputControl from "../InputControl";
import { addGuestPhonePrefixList } from "./AddGuestPhonePrefixList";
import { NumberPrefixItemType, NumberPrefixSelectProps } from "./types";

export const Error = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.error};
  margin-bottom: 10px;
`;

const usePrefixList = (data?: NumberPrefixItemType[]) => {
  const result = useMemo(
    () =>
      data
        ? generatePhonePrefixDropdownList(data)
        : generatePhonePrefixDropdownList(addGuestPhonePrefixList),
    [data]
  );

  return result;
};

const PhoneNumberPrefixSelect: VFC<NumberPrefixSelectProps> = (props) => {
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
  const dropdownData = usePrefixList(data);

  return (
    <InputControl
      styles={{
        wrapper: {
          width: "100%",
          maxWidth: "initial",
          marginBottom: 0,
          zIndex: 0,
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
        styles={{ select: { paddingTop: 10, paddingBottom: 11 } }}
      />
      {error && <Error>{errorMsg}</Error>}
    </InputControl>
  );
};
export default PhoneNumberPrefixSelect;
