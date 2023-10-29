// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD54HWOc6Z91fYQi-qDEW56FCKcqdnWt9g",
  authDomain: "login-page-78bae.firebaseapp.com",
  projectId: "login-page-78bae",
  storageBucket: "login-page-78bae.appspot.com",
  messagingSenderId: "94347930905",
  appId: "1:94347930905:web:d083a4daf55d73c1106988",
  measurementId: "G-MFY9C51433"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

