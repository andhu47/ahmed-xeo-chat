// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// firebase-config.js  (no imports here, no initializeApp here)
const cfg = {
  apiKey: "AIzaSyCNkNIYTOAE0d8AT-w6UhtRVtfoGt5GF23o",
  authDomain: "ahmed-xeo.firebaseapp.com",
  projectId: "ahmed-xeo",
  storageBucket: "ahmed-xeo.appspot.com",        // ← corrected
  messagingSenderId: "548601109269",
  appId: "1:548601109269:web:1f9fc9953a0cb7f60e671c",
  // measurementId is optional; ok to leave it in or remove
  measurementId: "G-7LP3ECBHPF"
};

export default cfg;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
