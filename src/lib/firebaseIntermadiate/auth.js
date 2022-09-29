import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from '../../firebase/configFirabese.js';

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, auth, provider };
