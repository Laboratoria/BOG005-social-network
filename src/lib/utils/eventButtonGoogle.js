import { auth, provider, signGoogle } from '../../firebase/authenticationFirebase.js';

const eventButtonGoogle = (path) => {
  if (path === '/signIn') {
    const buttonGoogle = document.getElementById('googleButton');
    if (buttonGoogle) {
      buttonGoogle.addEventListener('click', () => {
        signGoogle(auth, provider).then((result) => {
          if (result) {
            window.location.href = '#wall';
          }
        })
          .catch((error) => {
            if (error) {
              alert('!Ups hay un error')
            }
          });
      });
    };
  };
};

export { eventButtonGoogle };