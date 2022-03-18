import { PhonePrefixListItem } from "./types";
import { LabelContent } from "./style";
import { LanguageFlags } from "../../LanguageSwitcher/LanguageFlags";

export const generatePhonePrefixDropdownList = (list: PhonePrefixListItem[]) =>
  list.map(({ countryCode, locale }) => {
    return {
      label: (
        <LabelContent>
          <LanguageFlags locale={locale} />
          <span> {countryCode}</span>
        </LabelContent>
      ),
      value: countryCode,
    };
  });
