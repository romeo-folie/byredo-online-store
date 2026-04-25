import * as admin from "firebase-admin";
import _ from "lodash";

const privateKey = process.env.FIREBASE_PRIVATE_KEY
  ? process.env.NODE_ENV === "production"
    ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
    : _.replace(process.env.FIREBASE_PRIVATE_KEY, new RegExp("\\\\n", "g"), "\n")
  : "";

const adminConfig: admin.AppOptions = {
  credential: admin.credential.cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL as string,
    privateKey: privateKey,
  }),
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
};

const adminApp = admin.apps.length === 0 ? admin.initializeApp(adminConfig) : admin.app();

export const adminAuth = admin.auth(adminApp);
export const adminDb = admin.firestore(adminApp);

export default adminApp;
