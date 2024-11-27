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
  apiKey: "AIzaSyABkoCoRv5N7ZhwOgqArMDnnpHfR8wx4KY",
  authDomain: "zaptrust-74911.firebaseapp.com",
  projectId: "zaptrust-74911",
  storageBucket: "zaptrust-74911.firebasestorage.app",
  messagingSenderId: "804696888438",
  appId: "1:804696888438:web:36f0798b42c874980a7b57"
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
