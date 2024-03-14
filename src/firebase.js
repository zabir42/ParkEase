// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvN2np3yZtWaA23x7UPQGiwAjPgVwNdcU",
  authDomain: "parkinglot-50fda.firebaseapp.com",
  projectId: "parkinglot-50fda",
  storageBucket: "parkinglot-50fda.appspot.com",
  messagingSenderId: "858284488143",
  appId: "1:858284488143:web:bbbe844fd8ad8a3cea4eba",
  measurementId: "G-HQDNMLQ84K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (err) {
    throw Error;
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    throw Error;
  }
};

export {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail
};

