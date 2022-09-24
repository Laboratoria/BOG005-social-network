import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from './configFirabese.js';
import { showMessageError, showSuccessfulResponse } from '../lib/utils/formValidator.js';
// import { wallAuthenticatedUser } from '../lib/utils/wallAuthenticatedUser.js';

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

const getUserData = (auth, userName) => {

  onAuthStateChanged(auth, (user) => {
    if (user) {
        //const uid = user.uid;
        // console.log(uid);
        // wallAuthenticatedUser(user);
        console.log(user);
      // document.querySelector('#wallOffPublication').innerHTML += `<h1 class="ejemplo">Hola ${userName}!</h1>`;
      // document.querySelector('#wallOffPublication').innerHTML += `<h1 class="ejemplo">Estás registrada con correo: ${user.email}</h1>`
      return user;
    } else {
      // document.querySelector('#wallOffPublication').innerHTML += `<h1 class="ejemplo">Hola USUARIO!</h1>`;
      // document.querySelector('#wallOffPublication').innerHTML += `<h1 class="ejemplo">Aún no estás registrada en nuestra red</h1>`
       //return 'el usuario Salió'
          //console.log('salió')      
                // User is signed out
                // ...
    }
  });
};

const loginUser = (auth, email, password)=> {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
      return user;
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

const logOut = () => {
  return signOut(auth).then((userCredential) => {
    // Sign-out successful.
      console.log('Ha salido de la sesión', userCredential);
      return userCredential
    }).catch((error) => {
      console.error('Ha ocurrido un error al intentar salir', error);
    // An error happened.
    });
}

export {
  auth,
  testCreate,
  getUserData,
  loginUser,
  logOut,
};
