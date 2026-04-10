import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import _ from "lodash";

const privateKey = process.env.FIREBASE_PRIVATE_KEY
  ? process.env.NODE_ENV === "production"
    ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
    : _.replace(process.env.FIREBASE_PRIVATE_KEY, new RegExp("\\\\n", "g"), "\n")
  : "";

const adminConfig = {
  credential: cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL as string,
    privateKey: privateKey,
  }),
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
};

const adminApp = getApps().length === 0 ? initializeApp(adminConfig) : getApp();

export const adminAuth = getAuth(adminApp);
export const adminDb = getFirestore(adminApp);

export default adminApp;
