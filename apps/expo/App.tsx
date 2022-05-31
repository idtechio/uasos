import React from "react";
import { useFonts } from "expo-font";
import "./src/i18n";

import { NativeNavigation } from "app/navigation/native";
import { Provider } from "app/provider";

export default function App() {
  const [loaded] = useFonts({
    RobotoBlack: require("app/assets/fonts/Roboto-Black.ttf"),
    RobotoBold: require("app/assets/fonts/Roboto-Bold.ttf"),
    RobotoItalic: require("app/assets/fonts/Roboto-Italic.ttf"),
    RobotoLight: require("app/assets/fonts/Roboto-Light.ttf"),
    RobotoMedium: require("app/assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("app/assets/fonts/Roboto-Regular.ttf"),
    RobotoThin: require("app/assets/fonts/Roboto-Thin.ttf"),
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
