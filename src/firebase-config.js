import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBwW328jzZ4BQEdf-aqAP5zRwwnFNoPDlY",
    authDomain: "curd-app-d39dd.firebaseapp.com",
    projectId: "curd-app-d39dd",
    storageBucket: "curd-app-d39dd.appspot.com",
    messagingSenderId: "387065751007",
    appId: "1:387065751007:web:d06b0aa43dbea6963b506a",
    measurementId: "G-9ZL1TPEHHV",
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);