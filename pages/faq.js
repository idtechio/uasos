import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import { Text, StyleSheet, View } from "react-native";

export default function App(props) {
  return (
    <CompositionAppBody>
      <CompositionContainer>
        <h1>FAQ</h1>
        <h2>Jak usnunać konto</h2>
        <Text>Aby usunąć konto wejdź na swój profil i kliknij usuń konto</Text>
      </CompositionContainer>
    </CompositionAppBody>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  comming: {
    textAlign: "center",
    marginTop: "30vh",
    justifyContent: "center",
    alignItems: "center",
  },
});

/**
 * Temporary dumy data
 * TODO: api/getAccommodations
 */
