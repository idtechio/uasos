import { LabelContent } from "./style";
import { LanguageFlags } from "../../LanguageSwitcher/LanguageFlags";
import { getLocaleFullName } from "../../LanguageSwitcher/getLocaleFullName";

export const generateLanguageDropdownList = (list: string[]) =>
  list.map((locale) => ({
    label: (
      <LabelContent>
        <LanguageFlags locale={locale} />
        <span> {getLocaleFullName(locale)}</span>
      </LabelContent>
    ),
    value: locale,
  }));
