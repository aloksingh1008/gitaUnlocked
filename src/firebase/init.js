// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1juu1_ksRrJV7c6jLelsy-peIjhcAIug",
  authDomain: "gitaunlocked-ca484.firebaseapp.com",
  projectId: "gitaunlocked-ca484",
  storageBucket: "gitaunlocked-ca484.firebasestorage.app",
  messagingSenderId: "646337790913",
  appId: "1:646337790913:web:e51808118464b400c6a540"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// init firestore service
const db = getFirestore(app)
export default db