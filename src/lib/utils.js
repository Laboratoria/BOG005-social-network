// Autenticación
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

// Firebase

import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc,
  doc, getDoc, updateDoc, arrayUnion,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

// Export Auth
export {
  initializeApp, getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};

// Export Firestore
export {
  // eslint-disable-next-line max-len
  getFirestore, collection, addDoc, getDocs, deleteDoc, onSnapshot, doc, getDoc, updateDoc, arrayUnion,
};
