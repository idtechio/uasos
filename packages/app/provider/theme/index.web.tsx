/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { ThemeProvider as ThemeProviderWeb } from "styled-components";

export function ThemeProvider({
  theme,
  children,
}: {
  children: React.ReactElement;
  theme: any;
}) {
  return <ThemeProviderWeb theme={theme}>{children}</ThemeProviderWeb>;
}
