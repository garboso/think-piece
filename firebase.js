import { initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDG1GNVv_E1JApe3kUIoNy2Rk3fY_3XRiQ",
  authDomain: "think-piece-39e91.firebaseapp.com",
  projectId: "think-piece-39e91",
  storageBucket: "think-piece-39e91.appspot.com",
  messagingSenderId: "505504813109",
  appId: "1:505504813109:web:f0a9781c83da8709bf617c"
};

export const firestore = firebase.firestore();
firestore.settings({ timestampInSnapshots: true });

const app = initializeApp(firebaseConfig);