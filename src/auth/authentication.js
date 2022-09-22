import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from '../config/configFireBase.js';

// const auth = getAuth();
export const auth = getAuth(app);
