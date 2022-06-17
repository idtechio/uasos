/* eslint-disable @typescript-eslint/ban-types */
import {
  initializeApp,
  getApp,
  cert,
  App,
  ServiceAccount,
} from "firebase-admin/app";
import { Auth, DecodedIdToken, getAuth, UserRecord } from "firebase-admin/auth";

const serviceAccount: ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: (process.env.FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
};

let app: App;
try {
  app = getApp();
} catch (e) {
  app = initializeApp({ credential: cert(serviceAccount) });
}

const auth: Auth = getAuth(app);

const decodeToken = async function (
  idToken: string
): Promise<DecodedIdToken | Boolean> {
  try {
    return await auth.verifyIdToken(idToken);
  } catch (e) {
    return false;
  }
};

const getUser = async function (uid: string): Promise<UserRecord | Boolean> {
  try {
    return await auth.getUser(uid);
  } catch (e) {
    return false;
  }
};

export { app, auth, decodeToken, getUser };
