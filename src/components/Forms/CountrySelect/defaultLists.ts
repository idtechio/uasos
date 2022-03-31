import { useMemo, VFC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import { Theme } from "../../../style/theme.config";
import { Dropdown } from "../../Dropdown";
import { LanguageFlags } from "../../LanguageSwitcher/LanguageFlags";
import InputControl from "../InputControl";
import { CountryDropdownItemType, CountrySelectProps } from "./types";

export const LanguageList = [
  {
    label: (
      <LabelContainer>
        <LanguageFlags locale="pl" />
        <LabelText>{t("hostAdd.countries.poland")}</LabelText>
      </LabelContainer>
    ),
    value: "poland",
  },
  {
    label: (
      <LabelContainer>
        <LanguageFlags locale="hu" />
        <LabelText>{t("hostAdd.countries.hungary")}</LabelText>
      </LabelContainer>
    ),
    value: "hungary",
  },
  {
    label: (
      <LabelContainer>
        <LanguageFlags locale="cs" />
        <LabelText>{t("hostAdd.countries.czechia")}</LabelText>
      </LabelContainer>
    ),
    value: "czechia",
  },
  {
    label: (
      <LabelContainer>
        <LanguageFlags locale="sk" />
        <LabelText>{t("hostAdd.countries.slovakia")}</LabelText>
      </LabelContainer>
    ),
    value: "slovakia",
  },
];
