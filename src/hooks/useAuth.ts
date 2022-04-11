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
  updatePhoneNumber,
  PhoneAuthProvider,
  createUserWithEmailAndPassword,
  linkWithPhoneNumber,
  getAuth,
  PhoneAuthCredential,
  getRedirectResult,
  UserCredential,
  applyActionCode,
  updateEmail,
  fetchSignInMethodsForEmail,
  SignInMethod,
} from "firebase/auth";
import { AccountApi, getAccountDTO } from "../client-api/account";
import { useState, useEffect } from "react";
import { auth } from "../../lib/firebase-app";
import { useQuery } from "react-query";

auth.useDeviceLanguage();

const useAuth = () => {
  const [identity, setIdentity] = useState<null | User>(null);
  const [account, setAccount] = useState<null | getAccountDTO>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const account = await AccountApi.getAccount()
        .then((res) => res)
        .catch(() => null);
      setAccount(account);
      if (user && user.emailVerified && !account?.confirmedEmail) {
        await AccountApi.updateAccount({
          payload: { perferredLang: account?.prefferedLang },
        });
        const updatedAccount = await AccountApi.getAccount()
          .then((res) => res)
          .catch(() => null);
        setAccount(updatedAccount);
      }
      if (user && !account) {
        await AccountApi.updateAccount({
          payload: {},
        });
        const updatedAccount = await AccountApi.getAccount()
          .then((res) => res)
          .catch(() => null);
        setAccount(updatedAccount);
      }

      setIdentity(user);
      setLoaded(true);
    });
  }, []);
  let getTokenForAPI = null;
  if (identity) {
    getTokenForAPI = async () => await getIdToken(identity, true);
  }
  const refetchAccount = async () => {
    const account = await AccountApi.getAccount();
    setAccount(account);
  };

  return { identity, account, getTokenForAPI, loaded, refetchAccount };
};

interface Authorization {
  logOut: () => Promise<void>;
  signInWithGoogle: () => Promise<UserCredential | null>;
  signInWithFacebook: () => Promise<UserCredential | null>;
  signInWithPhone: (
    phoneNumber: string,
    recaptcha: RecaptchaVerifier
  ) => Promise<ConfirmationResult>;
  initCaptcha: (containerId: string) => RecaptchaVerifier;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>;
  confirmPasswordResetEmail: (
    oobCode: string,
    password: string
  ) => Promise<void>;
  sendVerificationEmail: (user: User) => Promise<void>;
  updatePhone: (phoneCredential: PhoneAuthCredential) => Promise<void>;
  initUpdatePhone: (
    phoneNumber: string,
    recaptcha: RecaptchaVerifier
  ) => Promise<string>;
  createUser: (email: string, password: string) => Promise<void>;
  linkWithPhone: (
    phoneNumber: string,
    recaptcha: RecaptchaVerifier
  ) => Promise<ConfirmationResult>;
  applyCode: (code: string) => Promise<void>;
  updateMail: (email: string) => Promise<void>;
  getSignInMethods: () => Promise<string[]>;
}
const Authorization: Authorization = {
  async logOut() {
    await signOut(auth);
  },
  async signInWithGoogle() {
    await signInWithRedirect(auth, new GoogleAuthProvider());
    const res = await getRedirectResult(auth);
    return res;
  },
  async signInWithFacebook() {
    signInWithRedirect(auth, new FacebookAuthProvider());
    const res = await getRedirectResult(auth);
    return res;
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
        // eslint-disable-next-line no-console
        callback: () => console.log("success"),
        // eslint-disable-next-line no-console
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
  async initUpdatePhone(phoneNumber, recaptcha) {
    const provider = new PhoneAuthProvider(auth);
    return await provider.verifyPhoneNumber(phoneNumber, recaptcha);
  },
  async updatePhone(phoneCredential) {
    const user = getAuth().currentUser;

    if (!user) {
      throw new Error("No user");
    }
    await updatePhoneNumber(user, phoneCredential);
  },
  async createUser(email, password) {
    await createUserWithEmailAndPassword(auth, email, password);
  },
  async linkWithPhone(phoneNumber, recaptcha) {
    const user = getAuth().currentUser;
    if (!user) {
      throw new Error("No user");
    }
    return await linkWithPhoneNumber(user, phoneNumber, recaptcha);
  },
  async applyCode(code) {
    await applyActionCode(auth, code);
  },
  async updateMail(email) {
    const user = getAuth().currentUser;
    if (!user) {
      throw new Error("No user");
    }
    await updateEmail(user, email);
  },

  async getSignInMethods(user?: User | null) {
    const auth = getAuth();
    const targetUser = user ?? getAuth().currentUser;

    if (!targetUser?.email || !auth) {
      return [];
    }

    const methods = await fetchSignInMethodsForEmail(auth, targetUser.email);

    return methods;
  },
};

type Keys = "GOOGLE" | "FACEBOOK";
type SignInValueTypes = typeof SignInMethod[Keys];

const useCanEditEmail = () => {
  const { data } = useQuery(
    ["sign_in_methods"],
    Authorization.getSignInMethods
  );

  const can = data?.some((value) =>
    [SignInMethod.FACEBOOK, SignInMethod.GOOGLE].includes(
      value as SignInValueTypes
    )
  );

  return can;
};

export default useAuth;
export { Authorization, useCanEditEmail };
