import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA3PgKRBShpLrXHd6OPcxbWtgzNcSw4UjA",
  authDomain: "fir-authapp-378e9.firebaseapp.com",
  projectId: "fir-authapp-378e9",
  storageBucket: "fir-authapp-378e9.appspot.com",
  messagingSenderId: "613968605226",
  appId: "1:613968605226:web:b3b258f0ee12187b2d9353"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);