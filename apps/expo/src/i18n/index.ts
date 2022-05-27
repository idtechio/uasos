/* eslint-disable @typescript-eslint/no-empty-function */
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import i18n, { Module } from "i18next";
import { initReactI18next } from "react-i18next";
import locales from "app/common-i18n/mobile-locales";

const languageDetector = {
  init: Function.prototype,
  type: "languageDetector",
  async: true,
  detect: async (callback) => {
    const storedLanguage = await AsyncStorage.getItem("@AppIntl:language");
    if (storedLanguage) {
      return callback(storedLanguage);
    }

    const phoneLanguage = Localization.locale;

    const [mainLanguage] = String(phoneLanguage).split("-");

    return callback(mainLanguage);
  },
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector as Module)
  .use(initReactI18next)
  .init({
    resources: locales,
    fallbackLng: "en",
    // debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
