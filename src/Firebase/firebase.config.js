// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9JdEEo00vZSYB7QxLCv1k_RPR9B569lI",
  authDomain: "visa-navigator-client-as.firebaseapp.com",
  projectId: "visa-navigator-client-as",
  storageBucket: "visa-navigator-client-as.firebasestorage.app",
  messagingSenderId: "558785741971",
  appId: "1:558785741971:web:59036a5fd17caacdcaf966"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app