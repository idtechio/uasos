import { AuthenticationProvider } from "app/features/auth/AuthContext";
import React from "react";
import { NavigationProvider } from "./navigation";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <AuthenticationProvider>
      <NavigationProvider>
        <>{children}</>
      </NavigationProvider>
    </AuthenticationProvider>
  );
}
