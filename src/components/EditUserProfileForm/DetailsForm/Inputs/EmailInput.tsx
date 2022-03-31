import { useTranslation } from "next-i18next";
import React from "react";
import { Input } from "../../../Forms";
import { InputWrapper } from "./style";

export default function EmailInput() {
  const { t } = useTranslation("common");
  return (
    <InputWrapper label={t("labels.email")}>
      <Input
        placeholder={t("labels.email")}
        styles={{ wrapper: { margin: 0, height: "auto" } }}
        withoutLabel
      />
    </InputWrapper>
  );
}
