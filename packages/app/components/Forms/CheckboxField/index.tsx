import React from "react";
import { Platform } from "react-native";
import CheckBox from "expo-checkbox";

import { CheckboxFieldProps } from "./type";
import { InputCotrolLabel } from "../";
import { CheckBoxContainer, Label } from "./style";

const CheckboxField = ({
  text,
  onChange,
  value,
  wrapperStyle,
}: CheckboxFieldProps) => {
  return (
    <InputCotrolLabel styleOverrides={wrapperStyle}>
      {Platform.OS === "web" ? (
        <>
          <input
            type="checkbox"
            onChange={onChange}
            checked={value}
            id={`checkboxField-${text}`}
          />
          <label htmlFor={`checkboxField-${text}`}>
            <Label>{text}</Label>
          </label>
        </>
      ) : (
        <CheckBoxContainer>
          <CheckBox value={value} onValueChange={onChange} />
          <Label>{text}</Label>
        </CheckBoxContainer>
      )}
    </InputCotrolLabel>
  );
};

export default CheckboxField;
