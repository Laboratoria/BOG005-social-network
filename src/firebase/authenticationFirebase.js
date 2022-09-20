import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from './configFirabese.js';
import { showMessageError, showSuccessfulResponse } from '../lib/utils/formValidator.js';

const auth = getAuth(app);
const testCreate = (auth, email, password) => {
  // let isRegister;
  if (email && password) {
return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //Signed in
      const user = userCredential.user;
      console.log(user.email);
      showSuccessfulResponse();
          // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      showMessageError(errorCode);
      
    });
  }

};

export { auth, testCreate };
