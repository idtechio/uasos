import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components/native";
import { LanguageFlags } from "./LanguageFlags";
import { DropDownWrapper, ArrowDown } from "./style";
import { useMemo } from "react";
import { Dropdown } from "../Dropdown";
import { getLocaleFullName } from "./getCountryName";
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
            <a>
              <LanguageFlags locale={locale} />
              {getLocaleFullName(locale)}
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
    />
  );
}

export default LanguageSwitcher;
