/* eslint-disable @typescript-eslint/no-empty-interface */

import type { LocalesTypes } from "app/common-i18n";

declare module "next-i18next" {
  type DefaultResources = LocalesTypes;
  interface Resources extends DefaultResources {}
}
