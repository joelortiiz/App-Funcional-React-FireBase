// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCslQF6yKQob0iaazuLj_xLnqtp_bE6Lnk",
//   authDomain: "pre-proyecto-95618.firebaseapp.com",
//   projectId: "pre-proyecto-95618",
//   storageBucket: "pre-proyecto-95618.appspot.com",
//   messagingSenderId: "960451682049",
//   appId: "1:960451682049:web:86616409b978cdc404c500",
//   measurementId: "G-732BR0112S"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
//const analytics = getAnalytics(app);
export default db;