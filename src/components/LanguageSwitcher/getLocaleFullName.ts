const LocaleNames: { [key: string]: string } = {
  pl: "Polski",
  ua: "Yкраїнська",
  ru: "Pусский",
  hu: "Magyar",
  sk: "Slovenčina",
  cs: "Čeština",
  en: "English",
  ro: "Romanian",
};

export const getLocaleFullName = (locale?: string) =>
  locale ? LocaleNames[locale] : locale?.toUpperCase;
