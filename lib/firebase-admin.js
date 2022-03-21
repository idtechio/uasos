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
    return user;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("!!", error);
    return false;
  }
};

const getUser = async function (uid) {
  try {
    return await getAuth(app).getUser(uid);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("!!", error);
    return false;
  }
};

const updateUser = async function (token, data) {
  try {
    const user = await getAuth(app).verifyIdToken(token);
    await getAuth(app).updateUser(user.uid, { displayName: data.name });
    return user;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("!!", error);
    return false;
  }
};

const getAuthObj = async () => await getAuth(app);

export { app, getAuthObj, decodeToken, getUser, updateUser };
