import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from '../../firebase/configFirabese.js';

const auth = getAuth(app);

export { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,auth }