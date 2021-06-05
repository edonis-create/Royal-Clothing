import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCwatY6aErZyaY0xrmooue54yntDP0GaT0",
  authDomain: "royal-db-24a11.firebaseapp.com",
  projectId: "royal-db-24a11",
  storageBucket: "royal-db-24a11.appspot.com",
  messagingSenderId: "995691423735",
  appId: "1:995691423735:web:d6362bcdd851eeb83b70f2",
  measurementId: "G-MNL7392WLB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
