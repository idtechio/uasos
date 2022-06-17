import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "app/screens/login";

const Stack = createNativeStackNavigator<{
  login: undefined;
}>();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
