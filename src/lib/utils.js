// Autenticación
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

// Firebase

import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc,
  doc, getDoc, updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

// Export Auth
export {
  initializeApp, getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
};

// Export Firestore
export {
  getFirestore, collection, addDoc, getDocs, deleteDoc, onSnapshot, doc, getDoc, updateDoc,
};
