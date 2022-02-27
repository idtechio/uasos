import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import AddAccommodationForm from "../src/components/AddAccommodationForm";
import { StyleSheet, View } from "react-native";

export default function Account(props) {
  const hostAddAccommodation = false;

  return (
    <CompositionAppBody>
      {!hostAddAccommodation ? (
        <View style={styles.container}>
          <AddAccommodationForm />
        </View>
      ) : (
        <>lista</>
      )}
    </CompositionAppBody>
  );
}

const styles = StyleSheet.create({
  container: {
    // maxWidth: "50%",
    width: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    marginRight: "auto",
    marginLeft: "auto",
    flex: 1,
  },
});
