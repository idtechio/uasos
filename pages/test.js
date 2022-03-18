import { useEffect, useState } from "react";
import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
// import { Text } from "react-native";
import { Button } from "react-native-web";

import { app } from "../lib/firebase-front";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
  getIdToken,
  signOut,
  GoogleAuthProvider,
  // FacebookAuthProvider,
  // PhoneAuthProvider,
} from "firebase/auth";
import { TextInput } from "react-native";

export default function App() {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  // const email = "michal@szkodzinski.pl";
  // const password = "Michal1";
  const auth = getAuth(app);
  auth.useDeviceLanguage();

  useEffect(() => {
    onAuthStateChanged(auth, setUser);
    // signInWithEmailAndPassword(auth, email, password).catch((e) =>
    //   setError(e.message)
    // );
  }, []);

  const onPress = async () => {
    const token = await getIdToken(user, true);
    // eslint-disable-next-line no-console
    console.log("!!", user.uid, token);
    fetch(`/api/test/test`, {
      method: "post",
      body: JSON.stringify({ token }),
    });
  };

  const logOut = async () => {
    await signOut(auth);
  };
  const signWithPass = async () => {
    try {
      const x = await signInWithEmailAndPassword(auth, login, pass);
      setUser(x.user);
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  };

  const signWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <CompositionAppBody>
      <CompositionContainer>
        <h1>Test</h1>
        {user && (
          <>
            Name: {user.displayName}, Email: {user.email}, Phone:{" "}
            {user.phoneNumber}
          </>
        )}
        {!user && <>Signed out</>}

        {error && error}
        <Button title="test token" onPress={onPress}></Button>
        {user && <Button title="sign out" onPress={logOut}></Button>}
        {!user && (
          <>
            <TextInput
              name="login"
              title="login"
              onChange={(e) => setLogin(e.target.value)}
              value={login}
            />
            <TextInput
              type="password"
              name="password"
              title="password"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
            <Button title="login" onPress={signWithPass}></Button>
            <Button title="google" onPress={signWithGoogle}></Button>
          </>
        )}
      </CompositionContainer>
    </CompositionAppBody>
  );
}
