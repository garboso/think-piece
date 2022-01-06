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

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('Error creating user', error);
    }
  }

  await user.updateProfile({ ...additionalData });

  return getUserDocument(user.uid);
}

export const getUserDocument = async (uid) => {
  if (!uid) return;

  try {
    return firestore.collection('users').doc(uid);
  } catch (error) {
    console.error('Error fetching user', error);
  }
}