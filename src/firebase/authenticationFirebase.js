import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from './configFirabese.js';
import { showMessageError, showSuccessfulResponse } from '../lib/utils/formValidator.js';

const auth = getAuth(app);
const testCreate = (auth, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showSuccessfulResponse();
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      showMessageError(errorCode);
    });

}

const logOut = () => {
  return signOut(auth).then(() => {
    auth.signOut();
    console.log('Ha salido de la sesión');

  }).catch((error) => {
    console.error('Ha ocurrido un error al intentar salir', error);
  });
}

const eventSignOut = () => {
  const btnExit = document.getElementById('exitButtonId');
  if (btnExit) {
    btnExit.addEventListener('click', () => {
      // console.log('Estoy tratando de cerrar sesión:');
      const result = logOut(auth);
      result.then(() => {
        const getUserCredential = localStorage.getItem('UserCredentialFb');
        console.log(getUserCredential, 'Fuera de aquí');
        localStorage.removeItem('UserCredentialFb');
        localStorage.removeItem('User');
        localStorage.removeItem('Username');
        window.location.href = '#welcome';
      }).catch((error) => {
        console.error(error);
      });
    });
    // }
  }
};

export {
  auth,
  testCreate,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  eventSignOut,
  logOut,
};
