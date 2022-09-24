import { auth, logOut } from './authenticationFirebase.js';

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

export { eventSignOut };
