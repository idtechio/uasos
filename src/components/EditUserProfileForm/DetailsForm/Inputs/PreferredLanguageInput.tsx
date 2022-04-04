import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import CountrySelect from "../../../Forms/CountrySelect";
import { CountryDropdownItemType } from "../../../Forms/CountrySelect/types";
import { EditProfileForm } from "../types";
import { InputWrapper } from "./style";

const data: CountryDropdownItemType[] = [
  { label: "CS", value: "cs" },
  { label: "DE", value: "de" },
  { label: "EL", value: "el" },
  { label: "EN", value: "en" },
  { label: "ES", value: "es" },
  { label: "ET", value: "et" },
  { label: "FR", value: "fr" },
  { label: "HR", value: "hr" },
  { label: "HU", value: "hu" },
  { label: "IT", value: "it" },
  { label: "LV", value: "lv" },
  { label: "PL", value: "pl" },
  { label: "RO", value: "ro" },
  { label: "RU", value: "ru" },
  { label: "SL", value: "sl" },
  { label: "UK", value: "uk" },
];

export default function PreferredLanguageInput() {
  const { control } = useFormContext<EditProfileForm>();

  return (
    <InputWrapper
      label="Preferred language of communication"
      styles={{ container: { zIndex: 9999 } }}
    >
      <Controller
        control={control}
        name="preferredLanguage"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <CountrySelect
            data={data}
            value={value || ""}
            onChange={onChange}
            placeholder="Preferred language of communication"
            error={error}
            errorMsg={error?.message}
          />
        )}
      />
    </InputWrapper>
  );
}
