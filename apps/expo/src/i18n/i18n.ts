import { defaultLocale, supportedLocales, supportedNs } from "app/common-i18n";
import * as Localization from "expo-localization";
import i18n from "i18n-js";

import { translations } from "./translations";

i18n.translations = translations;

i18n.fallbacks = true;

i18n.locale = Localization.locale || defaultLocale;
