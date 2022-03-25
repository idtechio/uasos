import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import CountrySelect from "../../Forms/CountrySelect";
import PhoneNumberPrefixSelect from "../../Forms/PhoneNumberPrefixSelect";
import { EditProfileForm } from "../types";
import { InputWrapper } from "./style";

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
            value={value || ""}
            onChange={onChange}
            placeholder="Preferred language of communication"
            error={error}
            errorMsg={error?.message}
          />
        )}
      />

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
