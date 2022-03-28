import {
  initializeApp,
  getApp,
  FirebaseApp,
  FirebaseOptions,
} from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

const options: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "---",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: FirebaseApp;
try {
  app = getApp();
} catch (e) {
  app = initializeApp(options);
}

let auth: Auth;
try {
  auth = getAuth(app);
} catch (e) {
  throw new Error("Firebase Auth is not defined");
}

export { app, auth };
