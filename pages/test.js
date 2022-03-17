import { useEffect, useState } from "react";
import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
// import { Text } from "react-native";
import { app } from "../lib/firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  getIdToken,
} from "firebase/auth";
import { Button } from "react-native-web";

export default function App() {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  const email = "michal@szkodzinski.pl";
  const password = "Michal1";
  const auth = getAuth(app);

  useEffect(() => {
    // eslint-disable-next-line no-console
    onAuthStateChanged(auth, setUser);
    signInWithEmailAndPassword(auth, email, password).catch(setError);
  }, []);

  const onPress = async () => {
    const token = await getIdToken(user);
    // eslint-disable-next-line no-console
    console.log("!!", user.uid, token);
    fetch(`/api/test/test/`, {
      method: "post",
      body: JSON.stringify({ token }),
    });
  };

  return (
    <CompositionAppBody>
      <CompositionContainer>
        <h1>Test</h1>
        {user && user.email}
        {error && error}
        <Button title="eee" onPress={onPress}></Button>
      </CompositionContainer>
    </CompositionAppBody>
  );
}
