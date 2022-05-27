import type backend from "./locales/en/backend.json";
import type common from "./locales/en/common.json";
import type desktop from "./locales/en/desktop.json";
import type faq from "./locales/en/faq.json";
import type filters from "./locales/en/filters.json";
import type forms from "./locales/en/forms.json";
import type guestList from "./locales/en/guestList.json";
import type homepage from "./locales/en/homepage.json";
import type hostList from "./locales/en/hostList.json";
import type landingPage from "./locales/en/landingPage.json";
import type offerDetails from "./locales/en/offer-details.json";
import type others from "./locales/en/others.json";
import type privacyPolicy from "./locales/en/privacyPolicy.json";
import type publicShelters from "./locales/en/publicShelters.json";
import type regulations from "./locales/en/regulations.json";

// if new ns will be available, please add it to this interface
export interface LocalesTypes {
  backend: typeof backend;
  common: typeof common;
  desktop: typeof desktop;
  faq: typeof faq;
  filters: typeof filters;
  forms: typeof forms;
  guestList: typeof guestList;
  homepage: typeof homepage;
  hostList: typeof hostList;
  landingPage: typeof landingPage;
  "offer-details": typeof offerDetails;
  others: typeof others;
  privacyPolicy: typeof privacyPolicy;
  publicShelters: typeof publicShelters;
  regulations: typeof regulations;
}
