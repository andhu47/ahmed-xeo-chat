// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNNkNYT0AEd8AT-w6UhtRVtfoGt5GF2Jo",
  authDomain: "ahmed-xeo.firebaseapp.com",
  projectId: "ahmed-xeo",
  storageBucket: "ahmed-xeo.firebasestorage.app",
  messagingSenderId: "548601109269",
  appId: "1:548601109269:web:1f9fc9953a0cb7f60e671c",
  measurementId: "G-7L3PECBHPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
