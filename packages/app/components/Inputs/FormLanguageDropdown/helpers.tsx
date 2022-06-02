import React from "react";
import { LabelContent, LanguageName } from "./style";
import { LanguageFlags } from "../../LanguageSwitcher/LanguageFlags";
import { getLocaleFullName } from "../../LanguageSwitcher/getLocaleFullName";

export const generateLanguageDropdownList = (list: string[]) =>
  list.map((locale) => ({
    label: (
      <LabelContent>
        <LanguageFlags locale={locale} />
        <LanguageName>{getLocaleFullName(locale)}</LanguageName>
      </LabelContent>
    ),
    value: locale,
  }));
