import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { authState } from "rxfire/auth";

// Set up Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCzNg9IVoyF6FQoCH-ZeTDtUqDlEJkNjXo",
  authDomain: "fexbank-232c4.firebaseapp.com",
  projectId: "fexbank-232c4",
  storageBucket: "fexbank-232c4.firebasestorage.app",
  messagingSenderId: "406611814711",
  appId: "1:406611814711:web:e01c2ac9b4b02272c3d2b2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);

const storage = getStorage(app);

// Listen only for logged in state
const loggedIn$ = authState(auth);

export {
  app,
  loggedIn$,
  auth,
  db,
  storage,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
