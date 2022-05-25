import { supportedLocales, supportedNs, defaultLocale } from "app/common-i18n";

module.exports = {
  // TODO: uncomment when translation will be done
  locales: supportedLocales, //   "ua", "pl", "ru", "cs", "en", "hu", "ro", "sk"
  defaultLocale,

  // if new ns will be available, please add it to supportedNs
  pages: {
    "*": supportedNs,
  },
  loadLocaleFrom: (lang, ns) => {
    // You can use a dynamic import, fetch, whatever. You should
    // return a Promise with the JSON file.

    return import(`app/common-i18n/locales/${lang}/${ns}.json`).then(
      (m) => m.default
    );
  },
};
