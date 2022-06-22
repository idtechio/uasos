import React, { useMemo, VFC } from "react";
import styled, { css } from "styled-components/native";
import { Theme } from "../../../provider/theme/theme.config";
import { Dropdown } from "../../Dropdown";
import { generatePhonePrefixDropdownList } from "../../Inputs/FormPhoneInput/helpers";
import InputControl from "../InputControl";
import { phonePrefixDropdownList } from "../../../consts/phonePrefixDropdown";
import { NumberPrefixItemType, NumberPrefixSelectProps } from "./types";
import { styles } from "./style";

export const Error = styled.Text<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.error};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-bottom: 10px;
      `,
      native: css`
        margin-bottom: ${theme.scale(10)}px;
      `,
    })}
`;

const usePrefixList = (data?: NumberPrefixItemType[]) => {
  const result = useMemo(
    () =>
      data
        ? generatePhonePrefixDropdownList(data)
        : generatePhonePrefixDropdownList(phonePrefixDropdownList),
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
        wrapper: styles.inputControlWrapper,
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
        styles={{ select: styles.dropdown }}
      />
      {error && <Error>{errorMsg}</Error>}
    </InputControl>
  );
};
export default PhoneNumberPrefixSelect;
