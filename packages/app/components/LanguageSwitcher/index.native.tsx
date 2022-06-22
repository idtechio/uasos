import { useTranslation } from "../../common-i18n/use-translation";
import { LanguageFlags } from "./LanguageFlags";
import React, { useMemo } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Dropdown } from "../Dropdown";
import { getLocaleFullName, getLocaleNamesKeys } from "./getLocaleFullName";
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
  const { i18n } = useTranslation();
  const getBreakPoint = useBreakPointGetter();

  const isDesktop = getBreakPoint({ default: false, lg: true });

  const dropdownData = useMemo(
    () =>
      getLocaleNamesKeys?.map((locale) => ({
        label: (
          <TouchableWithoutFeedback onPress={() => i18n.changeLanguage(locale)}>
            <View style={InnerLink}>
              <Flex>
                <LanguageFlags locale={locale} />
                {isDesktop && (
                  <LanguageLabel>
                    {locale ? getLocaleFullName(locale) : locale}
                  </LanguageLabel>
                )}
              </Flex>
            </View>
          </TouchableWithoutFeedback>
        ),
        value: locale,
      })),
    [getLocaleNamesKeys, isDesktop]
  );

  if (!dropdownData) {
    return null;
  }

  return (
    <Dropdown
      itemPressFunction={() => null}
      selected={i18n.language}
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
