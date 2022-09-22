import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const auth = getAuth();

const firebaseConfig = {
    apiKey: "AIzaSyBviox7Zp3nx-sGoaoDa9mk8LWTflaBhTk",
    authDomain: "explora-colombia-b78b6.firebaseapp.com",
    projectId: "explora-colombia-b78b6",
    storageBucket: "explora-colombia-b78b6.appspot.com",
    messagingSenderId: "380681004176",
    appId: "1:380681004176:web:96d035f8ac2dff6bda2415",
    measurementId: "G-QE3NMHJ6VN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const crearUsuario = (email,password) => { 
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
};
