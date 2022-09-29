import { login } from '../../firebase/authenticationFirebase.js'

const eventLoginButton = () => {
  if (window.location.pathname === '/userSignIn') {
    const btnLogin = document.querySelector('#submitContinue');
    if (btnLogin) {
      btnLogin.addEventListener('click', (e) => {
        e.preventDefault()
        login()
      });
    }
  }
};

export { eventLoginButton };
