import { Platform } from "react-native";
import CheckBox from "@react-native-community/checkbox";

import { CheckboxFieldProps } from "./type";
import { InputCotrolLabel } from "../";
import { Label } from "./style";

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
        <CheckBox onValueChange={onChange} />
      )}

      {Platform.OS !== "web" && <Label>{text}</Label>}
    </InputCotrolLabel>
  );
};

export default CheckboxField;
