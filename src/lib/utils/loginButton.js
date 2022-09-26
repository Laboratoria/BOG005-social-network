import { auth, signInWithEmailAndPassword } from '../../firebase/authenticationFirebase.js';

const eventLoginButton = () => {
  if (window.location.pathname === '/userSignIn') {
    const btnLogin = document.querySelector('#submitContinue');
    if (btnLogin) {
      btnLogin.addEventListener('click', () => {
        const email = document.querySelector('#userSi').value;
        const password = document.querySelector('#passwordSi').value;
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential, 'se cumplió');
            const greetingUser = document.getElementById('greetingUserId');
            if (greetingUser) {
              greetingUser.innerHTML = '';
            }
            window.location.href = '#wall';
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      });
    }
  }
};

export { eventLoginButton };
