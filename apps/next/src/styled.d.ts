import "styled-components";
import { Theme } from "./style/theme.config";

declare module "styled-components" {
  export type DefaultTheme = Theme;
}
