import React from "react";
import { useFonts } from "expo-font";
import "./src/i18n";

import { NativeNavigation } from "app/navigation/native";
import { Provider } from "app/provider";

export default function App() {
  const [loaded] = useFonts({
    RobotoBlack: require("./assets/fonts/Roboto-Black.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoItalic: require("./assets/fonts/Roboto-Italic.ttf"),
    RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoThin: require("./assets/fonts/Roboto-Thin.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  );
}
