import { base } from "./theme.config";

const BP = {
  sm: `${base.breakPoints.sm}px`,
  md: `${base.breakPoints.md}px`,
  lg: `${base.breakPoints.lg}px`,
  xl: `${base.breakPoints.xl}px`,
  xxl: `${base.breakPoints.xxl}px`,
};

export const mediaQuery = {
  sm: `@media (min-width: ${BP.sm})`,
  md: `@media (min-width: ${BP.md})`,
  lg: `@media (min-width: ${BP.lg})`,
  xl: `@media (min-width: ${BP.xl})`,
};
