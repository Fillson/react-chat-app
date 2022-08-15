// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUKITbyubVwFt8jxl6ij_PbAm1foUxICk",
  authDomain: "chat-app-1b184.firebaseapp.com",
  projectId: "chat-app-1b184",
  storageBucket: "chat-app-1b184.appspot.com",
  messagingSenderId: "2137132579",
  appId: "1:2137132579:web:c87bf21fc0dee0b3c7ab96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
