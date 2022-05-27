const path = require("path");

const {
  supportedLocales,
  defaultLocale,
  fallbackLng,
} = require("app/common-i18n/config.ts");

module.exports = {
  i18n: {
    locales: supportedLocales,
    defaultLocale,
    fallbackLng,
    returnEmptyString: false, // allow an empty value to count as invalid (by default is true)
  },
  localePath: path.resolve("../../packages/app/common-i18n/locales"),
};
