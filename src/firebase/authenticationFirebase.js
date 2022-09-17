import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from './configFirabese.js';
import { messageValidator } from '../lib/utils/formValidator.js';

const auth = getAuth(app);
const testCreate = (auth, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    //Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    // const errorMessage = error.message;
    const errorInput = errorCode.includes('email') ? 'email' : 'password';
    console.log(errorInput);
    messageValidator(errorInput, errorCode);
  });
}; 

export { auth, testCreate };

/** Errores Firebase
Firebase: Password should be at least 6 characters (auth/weak-password).
auth/invalid-email 
auth/email-already-in-use
*/

/**
 * si es un error -> mostrar en pantalla el error
 * -> agregarle estilo al mensaje
 */