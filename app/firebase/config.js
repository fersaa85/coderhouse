// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYjYqPc-lvgCfaHdCKEbEMhQ1_Mr42M4I",
  authDomain: "coderhouse-c2563.firebaseapp.com",
  projectId: "coderhouse-c2563",
  storageBucket: "coderhouse-c2563.appspot.com",
  messagingSenderId: "929342106241",
  appId: "1:929342106241:web:8b34f2127646563496fb80",
  measurementId: "G-CSJRW52NR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db }

