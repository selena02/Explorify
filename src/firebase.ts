// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZv9jiedAr8ZvthE-ijDkYmMtiaEVQ-18",
  authDomain: "eventify-3b828.firebaseapp.com",
  projectId: "eventify-3b828",
  storageBucket: "eventify-3b828.appspot.com",
  messagingSenderId: "624544158567",
  appId: "1:624544158567:web:3895b953155b58b61815c2",
  measurementId: "G-57F16N5H83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
