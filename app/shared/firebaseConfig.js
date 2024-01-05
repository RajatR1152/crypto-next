import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDKNHAvS8kqzqOhU_7McBlU9DWl1Be-Tfk",
  authDomain: "crypto-c8e10.firebaseapp.com",
  projectId: "crypto-c8e10",
  storageBucket: "crypto-c8e10.appspot.com",
  messagingSenderId: "582263425956",
  appId: "1:582263425956:web:22cacd73f55a41333ecf31",
  measurementId: "G-DFRTKXC9CK"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);