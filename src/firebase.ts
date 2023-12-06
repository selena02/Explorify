import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZv9jiedAr8ZvthE-ijDkYmMtiaEVQ-18",
  authDomain: "eventify-3b828.firebaseapp.com",
  projectId: "eventify-3b828",
  storageBucket: "eventify-3b828.appspot.com",
  messagingSenderId: "624544158567",
  appId: "1:624544158567:web:3895b953155b58b61815c2",
  measurementId: "G-57F16N5H83",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
