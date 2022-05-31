import * as functions from "firebase-functions";
import {DocumentReference} from "@google-cloud/firestore";

import admin = require("firebase-admin");
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const uploadColors = functions.https.onCall((data, context) => {
  // Message text passed from the client.
  const colors = data.colors;
  // Authentication / user information is automatically added to the request.
  const uid = context.auth?.uid;
  const docRef = admin.firestore().collection("colors").doc(uid!);
  return docRef.set(colors);
});

export const retrieveColors = functions.https.onCall((data, context) => {
  // Authentication / user information is automatically added to the request.
  const uid = context.auth?.uid;
  const docRef: DocumentReference = admin.firestore()
      .collection("colors").doc(uid!);
  return docRef.get().then((docSnap) => {
    const data = docSnap.data();
    return data;
  });
});
