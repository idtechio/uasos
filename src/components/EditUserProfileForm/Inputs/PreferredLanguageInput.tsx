import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "next-i18next";
import CountrySelect from "../../Forms/CountrySelect";
import { CountryDropdownItemType } from "../../Forms/CountrySelect/types";
import { EditProfileForm } from "../types";
import { InputWrapper } from "./style";

const ListOfLanguages: { [key: string]: string } = {
  PL: "Polski",
  CS: "Čeština",
  DE: "Deutch",
  EL: "Ελληνικά",
  EN: "English",
  ES: "Español",
  ET: "Eesti",
  FR: "Français",
  HR: "Hrvatski",
  HU: "Magyar",
  IT: "Italiano",
  LV: "Latviešu",
  RO: "Română",
  RU: "Pусский",
  SL: "Slovenčina",
  UK: "Yкраїнська",
};

const LanguageLabel = ({ language }: { language: string }) => {
  return <div>{ListOfLanguages[language] ?? language}</div>;
};

const data: CountryDropdownItemType[] = [
  { label: <LanguageLabel language="UK" />, value: "uk" },
  { label: <LanguageLabel language="PL" />, value: "pl" },
  { label: <LanguageLabel language="CS" />, value: "cs" },
  { label: <LanguageLabel language="DE" />, value: "de" },
  { label: <LanguageLabel language="EL" />, value: "el" },
  { label: <LanguageLabel language="EN" />, value: "en" },
  { label: <LanguageLabel language="ES" />, value: "es" },
  { label: <LanguageLabel language="ET" />, value: "et" },
  { label: <LanguageLabel language="FR" />, value: "fr" },
  { label: <LanguageLabel language="HR" />, value: "hr" },
  { label: <LanguageLabel language="HU" />, value: "hu" },
  { label: <LanguageLabel language="IT" />, value: "it" },
  { label: <LanguageLabel language="LV" />, value: "lv" },
  { label: <LanguageLabel language="RO" />, value: "ro" },
  { label: <LanguageLabel language="RU" />, value: "ru" },
  { label: <LanguageLabel language="SL" />, value: "sl" },
];

export default function PreferredLanguageInput() {
  const { control } = useFormContext<EditProfileForm>();
  const { t } = useTranslation(["common", "others"]);

  return (
    <InputWrapper
      label={t("others:forms.userRegistration.preferredLanguage")}
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
            placeholder={t("others:forms.userRegistration.preferredLanguage")}
            error={error}
            errorMsg={error?.message}
          />
        )}
      />
    </InputWrapper>
  );
}
