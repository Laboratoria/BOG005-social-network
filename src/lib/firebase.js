// importando los servicios de firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import {
  getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup,
  signInWithEmailAndPassword, signOut, GoogleAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
// import {
//   getFirestore, collection, addDoc, getDocs, getDoc, onSnapshot, doc, query,
//   serverTimestamp, orderBy, deleteDoc, updateDoc, arrayUnion, arrayRemove,
// } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

import config from './config.js'; // config es la llave de firebase

// Creando una constante para cada servicio
const firebaseApp = initializeApp(config);
const auth = getAuth(firebaseApp);
auth.languageCode = 'es';
const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const singUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
const loginOut = signOut(auth);
const provider = new GoogleAuthProvider();

// Detectando el estado de autenticación
onAuthStateChanged(auth, (user) => { /// dice si estamos comctados/////
  if (user != null) {
    console.log('Usuario Conectado');
  } else {
    console.log('No se encuentra el usuario');
  }
});

export {
  initializeApp, createUserWithEmailAndPassword, auth, createUser, singUser,
  loginOut, provider, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,
};
