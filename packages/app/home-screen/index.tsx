import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { useTranslation } from "expo-next-translation";

export function HelloWorld() {
  const { t: withoutScreenName } = useTranslation("common");

  // if you wish to get from screen.json file, use 'screen' instead of 'common'
  const { t: withScreenName } = useTranslation("guestList");

  return (
    <View style={styles.container}>
      <Text>{withoutScreenName("test")}</Text>
      <Text>{withScreenName("arrival")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
