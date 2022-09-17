import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

 import { app } from './configFirabese.js';


const auth = getAuth(app);
const testCreate = (auth, email, password) => {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log(errorMessage);
    // ..
  });
}
export { auth, testCreate };
