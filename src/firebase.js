import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDG1GNVv_E1JApe3kUIoNy2Rk3fY_3XRiQ",
  authDomain: "think-piece-39e91.firebaseapp.com",
  projectId: "think-piece-39e91",
  storageBucket: "think-piece-39e91.appspot.com",
  messagingSenderId: "505504813109",
  appId: "1:505504813109:web:f0a9781c83da8709bf617c"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);