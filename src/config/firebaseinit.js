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
  apiKey: "AIzaSyDbSBFx_0wAgOAhHOpaGyEHwqfbML0AuYE",
  authDomain: "firstcapital-c3ad3.firebaseapp.com",
  projectId: "firstcapital-c3ad3",
  storageBucket: "firstcapital-c3ad3.firebasestorage.app",
  messagingSenderId: "674754506095",
  appId: "1:674754506095:web:38840a40f048499abd0c9a"
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
