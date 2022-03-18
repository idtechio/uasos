import { initializeApp, getApp, cert } from "firebase-admin/app";
import serviceAccount from "../sa_key.json";
import { getAuth } from "firebase-admin/auth";

let app;
try {
  app = getApp();
} catch (error) {
  app = initializeApp({ credential: cert(serviceAccount) });
}

const decodeToken = async function (token) {
  try {
    const user = await getAuth(app).verifyIdToken(token);
    await getAuth(app).updateUser(user.uid, { displayName: "Michal Sz" });
    return user;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("!!", error);
    return false;
  }
};

export { app, decodeToken };
