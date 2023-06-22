import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBG-eC2TeUrtc6YFIJvWXf_Q6OdjmrLf-c",
  authDomain: "netflix-clone-179ad.firebaseapp.com",
  projectId: "netflix-clone-179ad",
  storageBucket: "netflix-clone-179ad.appspot.com",
  messagingSenderId: "430581754500",
  appId: "1:430581754500:web:c5edeea78594875977f0d1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
