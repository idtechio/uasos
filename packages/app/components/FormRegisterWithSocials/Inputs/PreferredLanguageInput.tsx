import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import CountrySelect from "../../Forms/CountrySelect";
import InputWrapperRegister from "./InputWrapperRegister";
import { FormType } from "../../../helpers/FormTypes";
import { useTranslation } from "../../../common-i18n/use-translation";

export default function PreferredLanguageInput() {
  const { control } = useFormContext<FormType>();
  const { t } = useTranslation();

  return (
    <InputWrapperRegister styles={{ container: { zIndex: 9999 } }}>
      <Controller
        control={control}
        name="registerWithSocials.preferredLanguage"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <CountrySelect
            value={value || ""}
            onChange={onChange}
            placeholder={t("others:forms.userRegistration.preferredLanguage")}
            error={error}
            errorMsg={error?.message}
          />
        )}
      />
    </InputWrapperRegister>
  );
}
