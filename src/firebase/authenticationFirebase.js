import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from './configFirabese.js';
import { showMessageError, showSuccessfulResponse } from '../lib/utils/formValidator.js';

const auth = getAuth(app);
const testCreate = (auth, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    //Signed in
      showSuccessfulResponse();
      const user = userCredential.user;
      console.log('Les mando el email', user.email);
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      showMessageError(errorCode);
    });
};

export { auth, testCreate };
