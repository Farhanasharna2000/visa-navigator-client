// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmvd6irrtBdHRNE7bPgegqzZ4WAiDJktI",
  authDomain: "visa-navigator-2803f.firebaseapp.com",
  projectId: "visa-navigator-2803f",
  storageBucket: "visa-navigator-2803f.firebasestorage.app",
  messagingSenderId: "392435514025",
  appId: "1:392435514025:web:4b9b7b53fc6d1bb81547b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);