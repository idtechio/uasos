/* eslint-disable no-undef */

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import { attachCustomCommands } from "cypress-firebase";

const { API_KEY } = Cypress.env();

const fbConfig = {
  apiKey: API_KEY,
};

firebase.initializeApp(fbConfig);

attachCustomCommands({ Cypress, cy, firebase });
