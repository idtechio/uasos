import { initializeApp, getApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signInWithRedirect,
  // getIdToken,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  RecaptchaVerifier,
  Auth,
  ConfirmationResult,
} from "firebase/auth";
import { useState, useEffect } from "react";

// TODO Delete afterwards only for test purposes
let app;
try {
  app = getApp();
} catch (e) {
  app = initializeApp({
    apiKey: "AIzaSyDMkJxobsqjQOKeOgZh0bLOwTptF3DfTyM",
    authDomain: "ukrn-hlpr-dev.firebaseapp.com",
    projectId: "ukrn-hlpr-dev",
    storageBucket: "ukrn-hlpr-dev.appspot.com",
    messagingSenderId: "727398461288",
    appId: "1:727398461288:web:af67d40f717ab97143b0dd",
  });
}

const auth = getAuth(app);
auth.useDeviceLanguage();

const useAuth = () => {
  const [identity, setIdentity] = useState<null | User>();
  const [account, setAccount] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setIdentity(user);
      // TODO add account fetch when api will be done
    });
  }, []);
  return { identity };
};

interface Authorization {
  logOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  signInWithPhone: (
    auth: Auth,
    phoneNumber: string,
    recaptcha: any
  ) => Promise<ConfirmationResult>;
  initCaptcha: (containerId: string) => RecaptchaVerifier;
  signInWithEmail: (email: string, password: string) => Promise<void>;
}
const Authorization: Authorization = {
  async logOut() {
    await signOut(auth);
  },
  async signInWithGoogle() {
    signInWithRedirect(auth, new GoogleAuthProvider());
  },
  async signInWithFacebook() {
    signInWithRedirect(auth, new FacebookAuthProvider());
  },
  async signInWithPhone(auth, phoneNumber, recaptcha) {
    return await signInWithPhoneNumber(auth, phoneNumber, recaptcha);
  },
  async signInWithEmail(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
  },
  initCaptcha(containerId) {
    return new RecaptchaVerifier(
      containerId,
      {
        size: "invisible",
        callback: () => null,
        "expired-callback": () => null,
      },
      auth
    );
  },
};

export default useAuth;
export { Authorization };
