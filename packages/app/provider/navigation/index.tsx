import React from "react";
import { NavigationContainer } from "@react-navigation/native";

export function NavigationProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  return <NavigationContainer>{children}</NavigationContainer>;
}
