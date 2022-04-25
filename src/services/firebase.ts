import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyCv1BiXY2FLa_jq3ksq8PhxnZvxLvXZYsE",
    authDomain: "crudreactcommerce.firebaseapp.com",
    projectId: "crudreactcommerce"
  });
  
  export const db = getFirestore(firebaseConfig)
  export const itemCollection =  collection(db, 'itens')
  export const storage = getStorage(firebaseConfig);