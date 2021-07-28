import "./firebase";
import {init} from "next-firebase-auth";
import _ from "lodash";

const TWELVE_DAYS_IN_MS = 12 * 60 * 60 * 24 * 1000;

const initAuth = () => {
  init({
    debug: false,
    authPageURL: "/auth",
    appPageURL: "/",
    loginAPIEndpoint: "/api/login",
    logoutAPIEndpoint: "/api/logout",
    firebaseAdminInitConfig: {
      credential: {
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL || "",
        // Using JSON to handle newline problems when storing the
        // key as a secret in Vercel. See:
        // https://github.com/vercel/vercel/issues/749#issuecomment-707515089
        privateKey:
          process.env.NODE_ENV === "production"
            ? process.env.FIREBASE_PRIVATE_KEY
              ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
              : ""
            : process.env.FIREBASE_PRIVATE_KEY
            ? _.replace(
                process.env.FIREBASE_PRIVATE_KEY,
                new RegExp("\\\\n", "g"),
                "\n"
              )
            : "",
      },
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "",
    },
    firebaseClientInitConfig: {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY || "",
      // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      // databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "",
      // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    },
    cookies: {
      name: "byredo",
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: TWELVE_DAYS_IN_MS,
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: process.env.NEXT_PUBLIC_COOKIE_SECURE === "true",
      signed: true,
    },
  });
};

export default initAuth;
