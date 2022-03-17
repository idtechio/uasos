// import * as admin from "firebase-admin";

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//       privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//     }),
//   });
// }

// const db = admin.firestore();
// // const db = {};

// export { db };

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMkJxobsqjQOKeOgZh0bLOwTptF3DfTyM",
  authDomain: "ukrn-hlpr-dev.firebaseapp.com",
  projectId: "ukrn-hlpr-dev",
  storageBucket: "ukrn-hlpr-dev.appspot.com",
  messagingSenderId: "727398461288",
  appId: "1:727398461288:web:af67d40f717ab97143b0dd",
};

const app = initializeApp(firebaseConfig);

export { app };
