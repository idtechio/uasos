import { Dimensions } from "react-native";

const { width: DEVICE_WIDTH } = Dimensions.get("window");

// We use width from our design tamplate
const BASE_WIDTH = 390;

export const scale = (size) => {
  return (DEVICE_WIDTH / BASE_WIDTH) * size;
};
