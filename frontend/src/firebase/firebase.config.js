// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPLT-VHY5nXMKtI8NXbsHUQlJgRCjHC-I",
  authDomain: "book-store-app-23e56.firebaseapp.com",
  projectId: "book-store-app-23e56",
  storageBucket: "book-store-app-23e56.firebasestorage.app",
  messagingSenderId: "120219900654",
  appId: "1:120219900654:web:e4f87029ced3c2412d71ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)