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
  apiKey: "AIzaSyBgzQeIiWtAqQHPN7-pgoUThbbRCUw5h1c",
  authDomain: "zaptrust-25c9c.firebaseapp.com",
  projectId: "zaptrust-25c9c",
  storageBucket: "zaptrust-25c9c.firebasestorage.app",
  messagingSenderId: "965385429472",
  appId: "1:965385429472:web:9993458b992e8b2d098b85"
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
