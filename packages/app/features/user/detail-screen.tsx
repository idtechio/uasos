import React from "react";
import { View, Text } from "react-native";
import { createParam } from "solito";
import { TextLink } from "solito/link";

const { useParam } = createParam<{ id: string }>();

export function UserDetailScreen() {
  const [id] = useParam("id");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{ textAlign: "center", marginBottom: 16, fontWeight: "bold" }}
      >{`User ID: ${id}`}</Text>

      <TextLink href="/home">👈 Go Home</TextLink>
    </View>
  );
}
