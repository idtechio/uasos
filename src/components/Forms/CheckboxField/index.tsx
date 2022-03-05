import { Platform } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import React from "react";

import { CheckboxFieldProps } from "./type";
import { InputCotrolLabel } from "../";
import { Label } from "./style";

const CheckboxField = ({
  text,
  onChange,
  error,
  value,
}: CheckboxFieldProps) => {
  console.log("value @ CheckboxField", value);
  return (
    <InputCotrolLabel>
      {Platform.OS === "web" ? (
        <>
          <input
            type="checkbox"
            onChange={onChange}
            checked={value}
            id={`checkboxField-${text}`}
          />
          <label htmlFor={`checkboxField-${text}`}>{text}</label>
        </>
      ) : (
        <CheckBox onValueChange={onChange} />
      )}

      {Platform.OS !== "web" && <Label error={error}>{text}</Label>}
    </InputCotrolLabel>
  );
};

export default CheckboxField;
