import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEBlnMYWSsfk1PIYAyZy8EJgwLNnxEskc",
  authDomain: "user-email-password-auth-d38bf.firebaseapp.com",
  projectId: "user-email-password-auth-d38bf",
  storageBucket: "user-email-password-auth-d38bf.appspot.com",
  messagingSenderId: "954431363696",
  appId: "1:954431363696:web:5a1b1cec463565078772b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;