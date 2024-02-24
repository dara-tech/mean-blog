/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mean-blog-683b3.firebaseapp.com",
  projectId: "mean-blog-683b3",
  storageBucket: "mean-blog-683b3.appspot.com",
  messagingSenderId: "326733684656",
  appId: "1:326733684656:web:ced9d2e4e8dcdbbfa14075"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

