import React from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Theme } from "../../../style/theme.config";
import { CompositionRow } from "../../Compositions/CompositionRow";
import { Dropdown } from "../../Dropdown";
import Input from "../../Forms/Input";
import InputControl from "../../Forms/InputControl";
import PhoneNumberPrefixSelect from "../../Forms/PhoneNumberPrefixSelect";
import { EditProfileForm } from "../types";
import { InputWrapper } from "./style";

export const Error = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.error};
  margin-bottom: 10px;
`;

export default function PhoneNumberInput() {
  const { control } = useFormContext<EditProfileForm>();

  return (
    <InputWrapper label="Phone number" styles={{ container: { zIndex: 999 } }}>
      <Controller
        control={control}
        name="phonePrefix"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <PhoneNumberPrefixSelect
            value={value || ""}
            onChange={onChange}
            error={error}
            errorMsg={error?.message}
            placeholder="Prefix"
          />
        )}
      />
    </InputWrapper>
  );
}

type Props = {
  phoneLabel: string;
  phonePrefixLabel: string;
  error?: FieldError;
  errorMsg: string;
  extra?: React.ReactNode;
  labelsBackgroundColor?: string;
  secureTextEntry?: boolean;
  data: { label: JSX.Element; value: string }[];
};

function FormPhoneInput({
  phoneLabel,
  phonePrefixLabel,
  errorMsg,
  error,
  extra,
  labelsBackgroundColor,
  secureTextEntry,
  data,
}: Props) {
  const { control } = useFormContext<EditProfileForm>();

  return (
    <CompositionRow spacing={CompositionRowSpacing}>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputControl styles={prefixInputControlStyles}>
            <Dropdown
              data={data}
              placeholder={phonePrefixLabel}
              itemPressFunction={onChange}
              onBlur={onBlur}
              selected={value}
              error={!!error}
              styles={dropdownStyles}
            />
            {error && <Error>{errorMsg}</Error>}
          </InputControl>
        )}
        name={"phonePrefix"}
      />
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {
            // https://en.wikipedia.org/wiki/Telephone_numbers_in_Europe
            value: /^[0-9]{3,13}$/,
            message: errorMsg,
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputControl styles={phoneInputControlStyles}>
            <Input
              withoutLabel
              placeholder={phoneLabel}
              onChange={onChange}
              value={value}
              onBlur={onBlur}
              error={error}
              extra={extra}
              secureTextEntry={secureTextEntry}
              labelsBackgroundColor={labelsBackgroundColor}
              styles={inputStyles}
            />
          </InputControl>
        )}
        name={"phone"}
      />
    </CompositionRow>
  );
}

/* TODO: Styles should be changed in a certain styled-component in accordance with new design  */

const CompositionRowSpacing = 11;

const prefixInputControlStyles = StyleSheet.create({
  wrapper: {
    width: "107px",
  },
});

const phoneInputControlStyles = StyleSheet.create({
  wrapper: {
    maxWidth: "283px",
    width: `calc(100% - 107px - ${CompositionRowSpacing}px)`,
  },
});

const dropdownStyles = StyleSheet.create({
  select: {
    paddingTop: "14px",
    paddingBottom: "14px",
  },
});

const inputStyles = StyleSheet.create({
  wrapper: {
    height: "54px",
  },
  textInput: {
    paddingTop: "15px",
    paddingBottom: "15px",
    height: "54px",
  },
});
