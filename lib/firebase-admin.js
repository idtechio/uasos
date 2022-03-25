import { initializeApp, getApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
};

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
