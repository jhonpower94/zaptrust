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
  apiKey: "AIzaSyArfn1YE928mrurnflUSqdu7-yTjPS0STo",
  authDomain: "alliant-96528.firebaseapp.com",
  projectId: "alliant-96528",
  storageBucket: "alliant-96528.appspot.com",
  messagingSenderId: "328237117952",
  appId: "1:328237117952:web:a725080596f7ff19d6dee5"
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
