import { initializeApp, getApp } from "firebase/app";
import config from "./firebase-config";

let app;
try {
  app = getApp();
} catch (error) {
  app = initializeApp(config);
}

export { app };
