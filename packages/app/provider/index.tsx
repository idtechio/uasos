import React from "react";
import { NavigationProvider } from "./navigation";
import { SafeAreaProvider } from "./safe-area/provider";
import { ThemeProvider } from "./theme";
import { primary } from "./theme/theme.config";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ThemeProvider theme={primary}>
        <NavigationProvider>
          <>{children}</>
        </NavigationProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
