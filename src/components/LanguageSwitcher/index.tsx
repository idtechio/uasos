import { useRouter } from "next/router";
import Link from "next/link";
import { LanguageFlags } from "./LanguageFlags";
import { useMemo } from "react";
import { Dropdown } from "../Dropdown";
import { getLocaleFullName } from "./getCountryName";
import {
  DropDownListItemObject,
  DropDownWrapperObject,
  LanguageLabel,
  InnerLink,
  DropDownListItemObjectSelected,
} from "./style";

function LanguageSwitcher() {
  const { locales, asPath, locale } = useRouter();

  const dropdownData = useMemo(
    () =>
      locales?.map((locale) => ({
        label: (
          <Link passHref href={asPath} locale={locale}>
            <a style={InnerLink}>
              <LanguageFlags locale={locale} />
              <LanguageLabel>{getLocaleFullName(locale)}</LanguageLabel>
            </a>
          </Link>
        ),
        value: locale,
      })),
    [locales, asPath]
  );

  if (!dropdownData) {
    return null;
  }

  return (
    <Dropdown
      itemPressFunction={() => null}
      selected={locale}
      data={dropdownData}
      itemListAutoHeight
      highlightSelectedItem
      styles={{
        select: DropDownWrapperObject,
        item: DropDownListItemObject,
        itemSelected: DropDownListItemObjectSelected,
      }}
    />
  );
}

export default LanguageSwitcher;
