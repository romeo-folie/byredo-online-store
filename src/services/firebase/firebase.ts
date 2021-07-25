import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import admin from 'firebase-admin'

const clientConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const firebaseAdmin = admin.apps[0];

export default firebase;
