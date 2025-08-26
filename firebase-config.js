// Firebase configuration for the Ahmed ⇄ Xeo private chat app.
//
// This file should only export the configuration object for your
// Firebase project.  Do not import or initialize Firebase here – the
// application code in your HTML will take care of that.  Keeping this
// file free of SDK imports allows the site to run on GitHub Pages
// without bundling tools.  It also makes it easy to regenerate the
// configuration if you ever rotate your API keys.

const cfg = {
  // The API key used to identify your project when talking to Firebase.
  apiKey: "AIzaSyCNkNIYTOAE0d8AT-w6UhtRVtfoGt5GF23o",

  // Your Auth domain is always <project-id>.firebaseapp.com
  authDomain: "ahmed-xeo.firebaseapp.com",

  // The unique identifier for your Firebase project.
  projectId: "ahmed-xeo",

  // The Cloud Storage bucket for your project.  Note that the suffix
  // must be `.appspot.com`; do not use the `firebasestorage.app` URL.
  storageBucket: "ahmed-xeo.appspot.com",

  // Sender ID used for Firebase Cloud Messaging.  This is a public
  // identifier and safe to include in client code.
  messagingSenderId: "548601109269",

  // The app ID identifies the specific web app within your Firebase project.
  appId: "1:548601109269:web:1f9fc9953a0cb7f60e671c",

  // Optional: measurement ID for Google Analytics.  You may remove
  // this line if you are not using Analytics.
  measurementId: "G-7LP3ECBHPF",
};

export default cfg;
