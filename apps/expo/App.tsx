import React from "react";
import "./src/i18n";

import { HelloWorld } from "app/home-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HelloWorld} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
