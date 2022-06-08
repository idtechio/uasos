import { Theme } from "app/provider/theme/theme.config";

export interface CommonTheme {
  theme?: Theme;
}

export type AppBodyProps = {
  children?: React.ReactNode;
} & CommonTheme;
