import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "app/screens/home";

const Stack = createNativeStackNavigator<{
  home: undefined;
}>();

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
