import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "app/screens/home";

const Stack = createNativeStackNavigator<{
  "home-stack": undefined;
}>();

export function NativeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home-stack" component={HomeScreen} />
    </Stack.Navigator>
  );
}
