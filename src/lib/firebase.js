/* eslint-disable max-len */
// Import the functions you need from the SDKs you need

import {
  initializeApp,
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  doc,
  getDoc,

} from './utils.js';

import { firebaseConfig } from '../components/config.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initializa Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const user = () => getAuth(app).createUser;

// Inicializa Firebase Authentication y obtiene una referencia al servicio
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const signInUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const provider = new GoogleAuthProvider();
export const popupGoogle = () => signInWithPopup(auth, provider);

// Inicializa Cloud Firestore
export const db = getFirestore(app); // la conexión a la base de datos

export const savePost = (textPost) => addDoc(collection(db, 'posts'), { textPost });
export const getPosts = () => getDocs(collection(db, 'posts'));
export const onGetPosts = (callback) => onSnapshot(collection(db, 'post'), callback);
export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
export const getPost = (id) => getDoc(doc(db, 'posts', id));
