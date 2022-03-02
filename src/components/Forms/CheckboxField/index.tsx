import { Platform } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import React from "react";

import { CheckboxFieldProps } from "./type";
import { InputCotrolLabel } from "../";
import { View } from "./style";

const CheckboxField = ({ text, isChecked, onChange }: CheckboxFieldProps) => {
  return (
    <View>
      <InputCotrolLabel>
        {Platform.OS === "web" ? (
          <input type="checkbox" />
        ) : (
          <CheckBox value={isChecked} onValueChange={onChange} />
        )}

        {text}
      </InputCotrolLabel>
    </View>
  );
};

export default CheckboxField;
