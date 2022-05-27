import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getApp } from "firebase/app";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCd-zhIZLQXpjRyuIiX1uhz_rrhunhZ_44",
  authDomain: "dapp-gamelobby.firebaseapp.com",
  projectId: "dapp-gamelobby",
  storageBucket: "dapp-gamelobby.appspot.com",
  messagingSenderId: "200591254650",
  appId: "1:200591254650:web:70a5ec398fafd96a6147c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();
connectAuthEmulator(auth, "http://localhost:9099");
export const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8080);
export const functions = getFunctions(getApp());
connectFunctionsEmulator(functions, "localhost", 5001);