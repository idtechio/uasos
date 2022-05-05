/* eslint-disable @typescript-eslint/no-empty-interface */

import backend from "../../public/locales/en/backend.json";
import common from "../../public/locales/en/common.json";
import desktop from "../../public/locales/en/desktop.json";
import faq from "../../public/locales/en/faq.json";
import filters from "../../public/locales/en/filters.json";
import forms from "../../public/locales/en/forms.json";
import guestList from "../../public/locales/en/guestList.json";
import homepage from "../../public/locales/en/homepage.json";
import hostList from "../../public/locales/en/hostList.json";
import landingPage from "../../public/locales/en/landingPage.json";
import offerDetails from "../../public/locales/en/offer-details.json";
import others from "../../public/locales/en/others.json";
import privacyPolicy from "../../public/locales/en/privacyPolicy.json";
import publicShelters from "../../public/locales/en/publicShelters.json";
import regulations from "../../public/locales/en/regulations.json";

// if new ns will be available, please add it to this object

const dynamicResource = {
  backend,
  common,
  desktop,
  faq,
  filters,
  forms,
  guestList,
  homepage,
  hostList,
  landingPage,
  "offer-details": offerDetails,
  others,
  privacyPolicy,
  publicShelters,
  regulations,
};

declare module "next-i18next" {
  type DefaultResources = typeof dynamicResource;
  interface Resources extends DefaultResources {}
}
