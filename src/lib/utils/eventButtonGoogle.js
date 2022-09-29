import { registerGoogle} from '../../firebase/authenticationFirebase.js';

const eventButtonGoogle = () => {
  if (window.location.pathname === '/signIn') {
    const buttonGoogle = document.getElementById('googleButton');
    if (buttonGoogle) {
      buttonGoogle.addEventListener('click', () => {
       registerGoogle()
      });
    };
  };
};

export { eventButtonGoogle };