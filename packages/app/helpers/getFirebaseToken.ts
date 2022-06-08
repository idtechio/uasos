import { getAuth } from "firebase/auth";

export const getFirebaseToken = async () =>
  await getAuth().currentUser?.getIdToken();
