/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { ThemeProvider as ThemeProviderNative } from "styled-components/native";

export function ThemeProvider({
  theme,
  children,
}: {
  children: React.ReactElement;
  theme: any;
}) {
  return <ThemeProviderNative theme={theme}>{children}</ThemeProviderNative>;
}
