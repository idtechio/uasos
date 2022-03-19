import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components/native";
import { LanguageFlags } from "./LanguageFlags";
import { useMemo } from "react";
import { Dropdown } from "../Dropdown";
import { getLocaleFullName } from "./getCountryName";
import {
  DropDownListItemObject,
  DropDownWrapperObject,
  LanguageLabel,
  InnerLink,
  WrapperObject,
} from "./style";
const Wrapper = styled.View`
  margin-left: 6px;
`;

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
      styles={{
        select: DropDownWrapperObject,
        item: DropDownListItemObject,
      }}
    />
  );
}

export default LanguageSwitcher;
