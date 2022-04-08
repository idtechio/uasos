import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { Input } from "../../../Forms";
import { EditProfileForm } from "../types";
import { InputWrapper } from "./style";

export default function NameInput() {
  const { control } = useFormContext<EditProfileForm>();
  const { t } = useTranslation("common");

  return (
    <InputWrapper
      label={t("others:forms.generic.name")}
      styles={{ container: { marginTop: 0 } }}
    >
      <Controller
        control={control}
        name="name"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Input
            value={value || ""}
            onChange={onChange}
            placeholder={t("others:forms.generic.name")}
            error={error}
            styles={{ wrapper: { margin: 0, height: 52 } }}
          />
        )}
      />
    </InputWrapper>
  );
}
