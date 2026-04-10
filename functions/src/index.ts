import * as functions from "firebase-functions/v1";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp();
const db = getFirestore();

export const createUserDocument = functions.auth.user().onCreate((user) => {
  return db.collection("users")
    .doc(user.uid)
    .set(JSON.parse(JSON.stringify(user)));
});
