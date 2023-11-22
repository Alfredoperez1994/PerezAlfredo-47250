import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aika-petshop.firebaseapp.com",
  projectId: "aika-petshop",
  storageBucket: "aika-petshop.appspot.com",
  messagingSenderId: "346805189112",
  appId: "1:346805189112:web:09e4195af4855c33fb3e0d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);