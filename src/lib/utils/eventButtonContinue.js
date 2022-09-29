import { register } from '../../firebase/authenticationFirebase.js';

const eventButtonCreateUser = () => {
  if (window.location.pathname === '/signIn') {
    const buttonContinue = document.getElementById('submitContinueButton');
    if (buttonContinue) {
      buttonContinue.addEventListener('click', () => {
        register();
      });
    };
  };
};

export { eventButtonCreateUser };
