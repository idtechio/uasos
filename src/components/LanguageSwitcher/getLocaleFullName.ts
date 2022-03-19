const LocaleNames: { [key: string]: string } = {
  pl: "Polska",
  ua: "Yкраїнська",
  ru: "Pусский",
  hu: "Magyar",
  sk: "Slovenský",
  cs: "Český",
  en: "English",
};

export const getLocaleFullName = (locale?: string) =>
  locale ? LocaleNames[locale] : locale?.toUpperCase;
