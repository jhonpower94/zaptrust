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
  apiKey: "AIzaSyCX-NvzP645xIzwtNeHUxMGxH_kNRJLOM4",
  authDomain: "rabobank-2c011.firebaseapp.com",
  projectId: "rabobank-2c011",
  storageBucket: "rabobank-2c011.appspot.com",
  messagingSenderId: "346885747209",
  appId: "1:346885747209:web:4e6a2d24ac500d0f4f3ed8"
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
