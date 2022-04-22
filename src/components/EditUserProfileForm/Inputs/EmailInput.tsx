import { useTranslation } from "next-i18next";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useCanEditEmail } from "../../../queries/useAccount";
import { Input } from "../../Forms";
import { EditProfileForm } from "../types";
import { InputWrapper } from "./style";

const EmailPlaceholder = () => {
  const { watch } = useFormContext<EditProfileForm>();
  const { t } = useTranslation("common");

  const value = watch("email");
  return (
    <InputWrapper label={t("labels.email")}>
      <Input
        placeholder={t("labels.email")}
        styles={{ wrapper: { margin: 0, height: "auto" } }}
        value={value}
        readonly={true}
      />
    </InputWrapper>
  );
};

export default function EmailInput() {
  const { t } = useTranslation("common");
  const { control } = useFormContext<EditProfileForm>();
  const canEditEmail = useCanEditEmail();

  if (!canEditEmail) {
    return <EmailPlaceholder />;
  }

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
