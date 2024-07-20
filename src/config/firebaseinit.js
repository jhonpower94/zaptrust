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
  apiKey: "AIzaSyDIEIhIFNHNgXY_2KTHisKQzrgnHW4OmuA",
  authDomain: "instantbank-d1bda.firebaseapp.com",
  projectId: "instantbank-d1bda",
  storageBucket: "instantbank-d1bda.appspot.com",
  messagingSenderId: "113006328336",
  appId: "1:113006328336:web:ad8347a7f9149a66386895"
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
