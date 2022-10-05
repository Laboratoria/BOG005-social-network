// importando los servicios de firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import {
  getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup,
  signInWithEmailAndPassword, signOut, GoogleAuthProvider, updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import {
  getFirestore, collection, addDoc, getDocs, getDoc, onSnapshot, doc, query,
  orderBy, deleteDoc, updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';


import config from './config.js'; // config es la llave de firebase

// Creando una constante para cada servicio
const firebaseApp = initializeApp(config);
const auth = getAuth();
auth.languageCode = 'es';
const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const singUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
const loginOut = signOut(auth);
const provider = new GoogleAuthProvider();
const profileUser = (user, displayName) => updateProfile(user, { displayName });

//Conectando y guardando con firestore
const db = getFirestore();
const savePostFirestore = async(contentPost) => {
  await addDoc(collection(db, 'posts'), 
  {title: contentPost, 
   like: false, 
   name: auth.currentUser.displayName, 
   email: auth.currentUser.email})
};
// Traer el post de firestore a muro
const postUserProfile = () => query(collection(db, 'posts'));
// Traer la data de los post guardados
const getDataPost = (id) => getDocs(doc(db,'posts', id));
// Actualizando la data
const updateDataPost = (id, newData) => updateDoc(doc(db,'posts', id), newData);
const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
const getOnePost = (id) => getDoc(doc(db, 'posts', id));

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
  getFirestore, collection, addDoc, savePostFirestore, postUserProfile, onSnapshot, 
  getDataPost, updateDataPost, deletePost, getOnePost, profileUser,
};
