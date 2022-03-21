import { app } from "../../../lib/firebase-front";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signInWithRedirect,
  getIdToken,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  RecaptchaVerifier,
} from "firebase/auth";
import { useEffect, useState } from "react";
import AuthAPI from "./authAPI";

const auth = getAuth(app);
auth.useDeviceLanguage();

const useAuth = function () {
  const [identityUser, setIdentityUser] = useState();
  const [account, setAccount] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      // eslint-disable-next-line no-console
      console.log("!!! auth state changed", user);

      setIdentityUser(user);
      setAccount(
        user ? AuthAPI.getAccount(await getIdToken(user, true)) : null
      );
    });
  }, []);

  const getTokenForAPI = async () => await getIdToken(identityUser, true);

  return [identityUser, account, getTokenForAPI];
};

const logOut = async () => {
  await signOut(auth);
};

const signWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};
const signWithFacebook = () => {
  const provider = new FacebookAuthProvider();
  signInWithRedirect(auth, provider);
};
const signInWithEmail = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
const signInWithPhone = async (phone, recaptchaVerifier) => {
  await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
};
const initRecaptcha = (containerId) => {
  return new RecaptchaVerifier(
    containerId,
    {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // onSignInSubmit();
      },
      "expired-callback": () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
      },
    },
    auth
  );
};

export default useAuth;
export {
  signWithGoogle,
  signWithFacebook,
  signInWithEmail,
  signInWithPhone,
  initRecaptcha,
  logOut,
};
