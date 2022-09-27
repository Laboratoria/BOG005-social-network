/* eslint-disable import/no-unresolved */
// eslint-disable-next-line quotes
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
// import { app } from './lib/component/configFirebase.js';
import { app } from './configFirebase.js';

const auth = getAuth(app);

export const createUser = (email, pass, name) => {
  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      //   result.user.updateProfile ({
      //     displayName: name;
      //   })
      const user = userCredential.user;
      console.log(user, name);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage, errorCode);
    });
};
