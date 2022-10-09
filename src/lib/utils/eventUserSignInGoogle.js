import { auth, provider, signGoogle } from '../../firebase/authenticationFirebase.js';

const eventButtonGoogleUserSignIn = () => {
  if (window.location.pathname === '/userSignIn') {
    const buttonGoogle = document.getElementById('googleButtonUserSignIn');
    if (buttonGoogle) {
      buttonGoogle.addEventListener('click', () => {
        signGoogle(auth, provider).then((result) => {
          if (result) {
            window.location.href = '#wall';
          }
        })
          .catch((error) => {
            if (error) {
              alert('¡Ups hay un error!')
            }
          });
      });
    };
  };
};

export { eventButtonGoogleUserSignIn };