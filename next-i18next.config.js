module.exports = {
  i18n: {
    // https://www.localeplanet.com/icu/iso639.html
    // TODO: uncomment when translation will be done
    locales: ["ua", "pl", "ru", "en", "hu"], // "en", "de", "fr", "ro", "hu", "es", "cs", "sk", "it"],
    defaultLocale: "pl",
    fallbackLng: ["en", "pl"], // will fallback to english and then to polish if there's no english translation
    returnEmptyString: false, // allow an empty value to count as invalid (by default is true)
  },
};
