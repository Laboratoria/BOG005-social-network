import { auth, logOut } from '../../firebase/authenticationFirebase.js';

const eventButtonSignOut = () => {
  const btnExit = document.getElementById('exitButtonId');
  if (btnExit) {
    btnExit.addEventListener('click', () => {
      logOut(auth).then(() => {
        const getUserCredential = localStorage.getItem('UserCredentialFb');
        console.log(getUserCredential, 'Has cerrado sesión');
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

export { eventButtonSignOut };
