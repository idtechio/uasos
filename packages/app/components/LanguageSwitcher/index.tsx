import { useRouter } from "next/router";
import Link from "next/link";
import { LanguageFlags } from "./LanguageFlags";
import React, { useMemo } from "react";
import { Dropdown } from "../Dropdown";
import { getLocaleFullName } from "./getLocaleFullName";
import {
  DropDownListItemObject,
  DropDownWrapperObject,
  LanguageLabel,
  InnerLink,
  DropDownListItemObjectSelected,
  DropDownWrapperMobileObject,
  ItemTextStyle,
  Flex,
} from "./style";
import { useBreakPointGetter } from "../../hooks/useBreakPointGetter";

function LanguageSwitcher() {
  const { locales, asPath, locale } = useRouter();
  const getBreakPoint = useBreakPointGetter();

  const isDesktop = getBreakPoint({ default: false, lg: true });

  const dropdownData = useMemo(
    () =>
      locales?.map((locale) => ({
        label: (
          <Link passHref href={asPath} locale={locale}>
            <a style={InnerLink}>
              <Flex>
                <LanguageFlags locale={locale} />
                {isDesktop && (
                  <LanguageLabel>
                    {locale ? getLocaleFullName(locale) : locale}
                  </LanguageLabel>
                )}
              </Flex>
            </a>
          </Link>
        ),
        value: locale,
      })),
    [locales, asPath, isDesktop]
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
        select: isDesktop ? DropDownWrapperObject : DropDownWrapperMobileObject,
        item: DropDownListItemObject,
        itemSelected: DropDownListItemObjectSelected,
        itemTextStyle: ItemTextStyle,
      }}
    />
  );
}

export default LanguageSwitcher;
