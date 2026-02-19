import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.F_PROJECT_ID,
      clientEmail: process.env.F_CLIENT_EMAIL,
      privateKey: process.env.F_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

export const adminApp = admin;
