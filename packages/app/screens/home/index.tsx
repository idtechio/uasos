import React from "react";
import { View, Text } from "react-native";

import { SafeAreaView } from "app/provider/safe-area";

export const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View>
        <Text>This is HOME SCREEN</Text>
      </View>
    </SafeAreaView>
  );
};
