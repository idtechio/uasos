import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components/native";
import { LanguageFlags } from "./LanguageFlags";
import { DropDownWrapper, ArrowDown } from "./style";
import { useCallback, useMemo } from "react";
import { Dropdown } from "../Dropdown";
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
              {locale}
            </a>
          </Link>
        ),
        value: locale,
      })),
    [locales, asPath]
  );

  const onItemPress = useCallback((value: string) => {
    console.log(value);
  }, []);

  if (!dropdownData) {
    return null;
  }

  return (
    <Dropdown
      itemPressFunction={onItemPress}
      selected={locale}
      data={dropdownData}
    />
  );
}

export default LanguageSwitcher;
