import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import { Text, StyleSheet, View } from "react-native";

export default function App(props) {
  return (
    <CompositionAppBody>
      <CompositionContainer>
        <View style={styles.comming}>
          <Text style={styles.titleText}>
            Tu powstaje kompleksowa platforma pomocy dla Ukrainy
          </Text>
        </View>
      </CompositionContainer>
    </CompositionAppBody>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  comming: {
    textAlign: "center",
    marginTop: "30vh",
  },
});

/**
 * Temporary dumy data
 * TODO: api/getAccommodations
 */
