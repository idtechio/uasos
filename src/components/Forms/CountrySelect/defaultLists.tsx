import { TFunction } from "next-i18next";
import { LanguageFlags } from "../../LanguageSwitcher/LanguageFlags";
import { LabelContainer, LabelText } from "./style";

export const getDefaultCountryList = (t: TFunction) => [
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
