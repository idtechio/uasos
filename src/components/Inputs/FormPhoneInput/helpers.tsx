import { PhonePrefixListItem } from "./types";
import { LabelContent, PhonePrefix } from "./style";
import { LanguageFlags } from "../../LanguageSwitcher/LanguageFlags";

export const generatePhonePrefixDropdownList = (list: PhonePrefixListItem[]) =>
  list.map(({ countryCode, locale }) => {
    return {
      label: (
        <LabelContent>
          <LanguageFlags locale={locale} />
          <PhonePrefix> {countryCode}</PhonePrefix>
        </LabelContent>
      ),
      value: countryCode,
    };
  });
