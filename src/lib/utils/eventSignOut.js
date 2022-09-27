import { auth, logOut } from '../../firebase/authenticationFirebase.js';

const eventSignOut = () => {
    const btnExit = document.getElementById('exitButtonId');
    if (btnExit) {
      btnExit.addEventListener('click', () => {
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
    }
  };

export { eventSignOut };
