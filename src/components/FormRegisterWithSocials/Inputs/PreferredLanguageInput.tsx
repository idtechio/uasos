import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import CountrySelect from "../../Forms/CountrySelect";
import { InputWrapperRegister } from "./style";
import { FormType } from "../../../helpers/FormTypes";

export default function PreferredLanguageInput() {
  const { control } = useFormContext<FormType>();

  return (
    <InputWrapperRegister styles={{ container: { zIndex: 9999 } }}>
      <Controller
        control={control}
        name="registerWithSocials.prefferedLanguage"
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
    </InputWrapperRegister>
  );
}
