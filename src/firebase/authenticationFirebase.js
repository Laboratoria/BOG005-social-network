import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from './configFirabese.js';
import { showMessageError, showSuccessfulResponse } from '../lib/utils/formValidator.js';
//import { eventSignOut } from './signOut.js';
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

// const getUserData = (auth) => {
//   onAuthStateChanged(auth, (user) => {
//    if (user) {
//     localStorage.setItem('UserCredentialFb', JSON.stringify(user.email));
//     console.log(user);
//      return user;
      
//     } else {
//       console.log('Hacer sin user')
//    }
//   });
// }

const getUserData = (auth) => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
       const getName = localStorage.getItem('Username');
       localStorage.setItem('UserCredentialFb', JSON.stringify(user.email));
       document.querySelector('#wallOffPublication').innerHTML += `<h1 class="ejemplo">Hola ${getName}!</h1>`
       document.querySelector('#wallOffPublication').innerHTML += `<h1 class="ejemplo">Estás registrada con correo: ${user.email}</h1>`;
       eventSignOut();
       console.log(user);
        return user;
         
       } else {
         console.log('Hacer sin user')
      }
      resolve(user);
     },reject);
 });
};

const logOut = () => {
  return signOut(auth).then(() => {
    // Sign-out successful.
      console.log('Ha salido de la sesión');
     
      //return userCredential
    }).catch((error) => {
      console.error('Ha ocurrido un error al intentar salir', error);
    // An error happened.
    });
}


const eventSignOut = () => {
  //if (window.location.pathname === '/wall') {
    const btnExit = document.getElementById('exitButtonId');
    if (btnExit) {
      btnExit.addEventListener('click', () => {
        // console.log('Estoy tratando de cerrar sesión:');
       const result = logOut(auth);
       result.then(() => {
          const getUserCredential = localStorage.getItem('UserCredentialFb');
          console.log(getUserCredential, 'Fuera de aquí');
          localStorage.removeItem('UserCredentialFb');
      }).catch((error) => {
          console.error(error);
        });
      });
   // }
  }
};

// function getCurrentUser(auth) {
//   return new Promise((resolve, reject) => {
//      const unsubscribe = auth.onAuthStateChanged(user => {
//         unsubscribe();
//         resolve(user);
//      }, reject);
//   });
// }





const loginUser = (auth, email, password)=> {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
      console.log('Logueado', user);
      return user;
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log('Error code', errorCode);
      const errorMessage = error.message;
      console.log('Error message', errorMessage);
    });
};



export {
  auth,
  testCreate,
  getUserData,
  loginUser,
  logOut,
};
