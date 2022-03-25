import {
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signInWithRedirect,
  getIdToken,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  RecaptchaVerifier,
  ConfirmationResult,
  sendPasswordResetEmail,
  confirmPasswordReset,
  sendEmailVerification,
} from "firebase/auth";
import { AccountApi, getAccountDTO } from "../client-api/account";
import { useState, useEffect } from "react";
import { auth } from "../../lib/firebase-app";

auth.useDeviceLanguage();

const useAuth = () => {
  const [identity, setIdentity] = useState<null | User>();
  const [account, setAccount] = useState<null | getAccountDTO>(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setIdentity(user);
      setAccount(
        user ? await AccountApi.getAccount(await getIdToken(user, true)) : null
      );
    });
  }, []);
  let getTokenForAPI = null;
  if (identity) {
    getTokenForAPI = async () => await getIdToken(identity, true);
  }
  return { identity, account, getTokenForAPI };
};

interface Authorization {
  logOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  signInWithPhone: (
    phoneNumber: string,
    recaptcha: any
  ) => Promise<ConfirmationResult>;
  initCaptcha: (containerId: string) => RecaptchaVerifier;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>;
  confirmPasswordResetEmail: (
    oobCode: string,
    password: string
  ) => Promise<void>;
  sendVerificationEmail: (user: User) => Promise<void>;
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
  async signInWithPhone(phoneNumber, recaptcha) {
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
        callback: () => console.log("success"),
        "expired-callback": () => console.log("failier"),
      },
      auth
    );
  },
  async sendPasswordResetEmail(email) {
    await sendPasswordResetEmail(auth, email);
  },
  async confirmPasswordResetEmail(oobCode, password) {
    await confirmPasswordReset(auth, oobCode, password);
  },
  async sendVerificationEmail(user) {
    await sendEmailVerification(user);
  },
};

export default useAuth;
export { Authorization };
