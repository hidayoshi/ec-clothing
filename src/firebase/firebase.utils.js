import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBEWYYYcMJni1Kzb-uMMCewEWJr4GPZ5DQ",
  authDomain: "ec-clothing-db.firebaseapp.com",
  databaseURL: "https://ec-clothing-db.firebaseio.com",
  projectId: "ec-clothing-db",
  storageBucket: "ec-clothing-db.appspot.com",
  messagingSenderId: "898674689182",
  appId: "1:898674689182:web:4864e76069db36b2f1678f",
  measurementId: "G-1K51EZGGLD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
