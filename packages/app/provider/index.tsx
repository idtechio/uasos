import React, { useMemo } from "react";
import { NavigationProvider } from "./navigation";
import { ProgressToastProvider } from "./progress-toast-provider";
import { QueryClientProvider } from "./react-query";
import { SafeAreaProvider } from "./safe-area/provider";
import { ThemeProvider } from "./theme";
import { primary, useBreakPointGetter } from "./theme/theme.config";

export function Provider({ children }: { children: React.ReactNode }) {
  const getBreakPoint = useBreakPointGetter();
  const theme = useMemo(() => ({ ...primary, getBreakPoint }), [getBreakPoint]);

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider>
          <ProgressToastProvider>
            <NavigationProvider>
              <>{children}</>
            </NavigationProvider>
          </ProgressToastProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
