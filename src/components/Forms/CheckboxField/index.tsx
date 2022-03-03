import { Platform } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import React from "react";

import { CheckboxFieldProps } from "./type";
import { InputCotrolLabel } from "../";
import { Label } from "./style";

const CheckboxField = ({ text, onChange, error }: CheckboxFieldProps) => {
  return (
    <InputCotrolLabel>
      {Platform.OS === "web" ? (
        <input type="checkbox" onChange={onChange} />
      ) : (
        <CheckBox onValueChange={onChange} />
      )}

      <Label error={error}>{text}</Label>
    </InputCotrolLabel>
  );
};

export default CheckboxField;
