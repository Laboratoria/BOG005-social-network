import { auth, loginUser } from '../../firebase/authenticationFirebase.js';

const eventLoginButton = () => {
  if (window.location.pathname === '/userSignIn') {
    const btnLogin = document.querySelector('#submitContinue');
    if (btnLogin) {
      const email = document.querySelector('#userSi');
      const password = document.querySelector('#passwordSi');
      const result = loginUser(auth, email, password);
      result.then((userCredential) => {
          console.log(userCredential);
      })
      .catch((error) => {
          console.log(error);
        });
    }
  }
};

export { eventLoginButton };
