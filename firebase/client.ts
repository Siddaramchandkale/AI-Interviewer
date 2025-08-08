// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkuZa_xMtxyvSzUnLmxZ2Mb-SEr1209Xo",
  authDomain: "prepwise-7819b.firebaseapp.com",
  projectId: "prepwise-7819b",
  storageBucket: "prepwise-7819b.firebasestorage.app",
  messagingSenderId: "480042781429",
  appId: "1:480042781429:web:fe3121671906ea4de0d3bc",
  measurementId: "G-EYX11PSLGN"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);

export const db = getFirestore(app);