import { useTranslation } from "next-i18next";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../../../Forms";
import { EditProfileForm } from "../types";
import { InputWrapper } from "./style";

export default function EmailInput() {
  const { t } = useTranslation("common");
  const { control } = useFormContext<EditProfileForm>();
  return (
    <Controller
      control={control}
      name="email"
      render={({ field: { onChange, value } }) => (
        <InputWrapper label={t("labels.email")}>
          <Input
            placeholder={t("labels.email")}
            styles={{ wrapper: { margin: 0, height: "auto" } }}
            value={value}
            onChange={onChange}
          />
        </InputWrapper>
      )}
    />
  );
}
