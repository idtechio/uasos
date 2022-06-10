import { StyleSheet, Platform } from "react-native";
import { scale } from "../../../utils/scale";

export const styles = StyleSheet.create({
  dropdown: {
    ...Platform.select({
      web: {
        paddingTop: 10,
        paddingBottom: 11,
      },
      default: {
        paddingTop: scale(10),
        paddingBottom: scale(10),
      },
    }),
  },
  inputControlWrapper: {
    width: "100%",
    marginBottom: 0,
    zIndex: 0,
    ...Platform.select({
      web: {
        maxWidth: "initial",
      },
    }),
  },
});
