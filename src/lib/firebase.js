/* eslint-disable max-len */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAHVluY138pnk8PKOw2nuTGMcEEkV4dpLY',
  authDomain: 'social-network-d51cd.firebaseapp.com',
  projectId: 'social-network-d51cd',
  storageBucket: 'social-network-d51cd.appspot.com',
  messagingSenderId: '447408493171',
  appId: '1:447408493171:web:221c363b010259179b9006',
  measurementId: 'G-19TVG0TJQD',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Firebase Authentication and get a reference to the service
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const signInUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const provider = new GoogleAuthProvider();
export const popupGoogle = () => signInWithPopup(auth, provider);
