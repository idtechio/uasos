import { ActivityIndicator, View } from "react-native";

export default function Spinner() {
  return (
    <View style={{ margin: "auto" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
