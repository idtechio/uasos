import type { ContainerProps } from "./types";
import { StyleSheet, ScrollView, View } from "react-native";

// ? ScrollView don't work with project default component file structure and styled-components ?

const CompositionContainer = ({ children }: ContainerProps) => {
  return (
    <ScrollView
      style={styles.containerWraper}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 960,
    width: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    marginRight: "auto",
    marginLeft: "auto",
  },
  containerWraper: {
    width: "100%",
  },
});

export default CompositionContainer;
