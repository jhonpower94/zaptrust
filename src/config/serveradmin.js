import {
  doc, setDoc
} from "firebase/firestore";

import { db } from "./firebaseinit";


export const addUsers = async (docid, userdatas) => {
    const querydoc = doc(db, `users/${docid}`);
    await setDoc(querydoc, userdatas);
  };
