const LocaleNames: { [key: string]: string } = {
  pl: "Polska",
  ua: "українська",
  ru: "русский",
  hu: "magyar",
  sk: "slovenský",
  cs: "český",
  en: "English",
};

export const getLocaleFullName = (locale?: string) =>
  locale ? LocaleNames[locale] : locale?.toUpperCase;
