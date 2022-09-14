// importando los servicios de firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js';
import {
  getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import config from './config.js'; // config es la llave de firebase

// Creando una constante para cada servicio
const firebaseApp = initializeApp(config);
const auth = getAuth(firebaseApp);
const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const singUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
const loginOut = signOut(auth);

// Detectando el estado de autenticación
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('Usuario Conectado');
  } else {
    console.log('No se encuentra el usuario');
  }
});

export {
  initializeApp, createUserWithEmailAndPassword, auth, createUser, singUser, loginOut,
};
