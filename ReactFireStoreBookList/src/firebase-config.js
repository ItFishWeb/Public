import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAYDteq0kxlwVxnmroOaeKb0Z2xmfzSlwg",
  authDomain: "fir-app-a20b3.firebaseapp.com",
  projectId: "fir-app-a20b3",
  storageBucket: "fir-app-a20b3.appspot.com",
  messagingSenderId: "216743765225",
  appId: "1:216743765225:web:e43bf99c274ad941f2fc78",
  measurementId: "G-DBHZ9TZ5Q2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
