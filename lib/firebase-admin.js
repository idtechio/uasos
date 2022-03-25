import { initializeApp, getApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

import serviceAccount from "../sa_key.json";

let app;
try {
  app = getApp();
} catch (error) {
  app = initializeApp({ credential: cert(serviceAccount) });
}

const decodeToken = async function (token) {
  try {
    return await getAuth(app).verifyIdToken(token);
  } catch (error) {
    return false;
  }
};

const getUser = async function (uid) {
  try {
    return await getAuth(app).getUser(uid);
  } catch (error) {
    return false;
  }
};

const getAuthObj = () => getAuth(app);

export { app, getAuthObj, decodeToken, getUser };
