import { StyleSheet, Platform } from "react-native";
import { scale } from "app/utils/scale";

export const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    marginBottom: Platform.OS === "web" ? 20 : scale(20),
    width: "100%",
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#F5F4F4",
    borderWidth: 1,
    width: "max-content",
    padding: Platform.OS === "web" ? 10 : scale(10),
    borderRadius: 5,
    marginRight: Platform.OS === "web" ? 10 : scale(10),
    marginBottom: Platform.OS === "web" ? 10 : scale(10),
  },
  tagDisable: {
    opacity: 0.2,
  },
  tagText: {
    marginLeft: Platform.OS === "web" ? 88 : scale(8),
    color: "#003566",
  },
  header: {
    borderBottomColor: "#F5F4F4",
    borderBottomWidth: 1,
    paddingRight: Platform.OS === "web" ? 22 : scale(22),
    paddingLeft: Platform.OS === "web" ? 22 : scale(22),
    paddingTop: Platform.OS === "web" ? 16 : scale(16),
    paddingBottom: Platform.OS === "web" ? 16 : scale(16),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerRight: {
    alignItems: "flex-end",
  },
  headerRightText: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Platform.OS === "web" ? 8 : scale(8),
  },
  headerRightTextConent: {
    color: "#003566",
    marginLeft: Platform.OS === "web" ? 8 : scale(8),
  },
  place: {
    marginLeft: Platform.OS === "web" ? 12 : scale(12),
  },
  h1: {
    fontSize: 18,
    fontWeight: "600",
    color: "#003566",
  },
  subTitle: {
    color: "#003566",
  },
  content: {
    paddingRight: Platform.OS === "web" ? 22 : scale(22),
    paddingLeft: Platform.OS === "web" ? 22 : scale(22),
    paddingTop: Platform.OS === "web" ? 26 : scale(26),
    paddingBottom: Platform.OS === "web" ? 16 : scale(16),
    flexDirection: "row",
    flexWrap: "wrap",
  },
  footer: {
    borderTopColor: "#F5F4F4",
    borderTopWidth: 1,
    paddingRight: Platform.OS === "web" ? 22 : scale(22),
    paddingLeft: Platform.OS === "web" ? 22 : scale(22),
    paddingTop: Platform.OS === "web" ? 16 : scale(16),
    paddingBottom: Platform.OS === "web" ? 16 : scale(16),
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
