import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getStorage, connectStorageEmulator } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCd-zhIZLQXpjRyuIiX1uhz_rrhunhZ_44",
  authDomain: "dapp-gamelobby.firebaseapp.com",
  projectId: "dapp-gamelobby",
  storageBucket: "dapp-gamelobby.appspot.com",
  messagingSenderId: "200591254650",
  appId: "1:200591254650:web:70a5ec398fafd96a6147c3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);
export const storage = getStorage(app);

if (process.env.NODE_ENV === 'development') {
  console.log("in development!");
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectFunctionsEmulator(functions, "localhost", 5001);
  connectStorageEmulator(storage, "localhost", 9199);
}

