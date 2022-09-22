
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,
    signInWithPopup,
  } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
  import {
    addDoc, collection, getFirestore, onSnapshot,
  } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js';
  import { firebaseConfig } from './firebaseConfig.js';
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(app);
  const firestoreConnection = getFirestore(app);
  
  // Authentication
  
  export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
  
  // Authentication with Google
  // Popup
  export const googleSignIn = () => signInWithPopup(auth, provider);
  
   export const saveUserInfo = (userName, userEmail, userID) => {
     addDoc(collection(firestoreConnection, 'Users'), { userName, userEmail, userID });
   };

  