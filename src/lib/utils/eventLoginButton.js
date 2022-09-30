import { auth, signIn } from '../../firebase/authenticationFirebase.js'

const eventLoginButton = () => {
  if (window.location.pathname === '/userSignIn') {
    const btnLogin = document.querySelector('#submitContinue');
    if (btnLogin) {
      btnLogin.addEventListener('click', (e) => {
        e.preventDefault()
        const email = document.querySelector('#userSi').value;
        const password = document.querySelector('#password').value;
        const result = signIn(auth, email, password)
        result.then((userCredential) => {
          if (userCredential) {
            const greetingUser = document.getElementById('greetingUserId');
            if (greetingUser) {
              greetingUser.innerHTML = '';
            }
            window.location.href = '#wall';
          }
        })
          .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode)
            const errorMessage = error.message;
          });
      });
    }
  }
};

export { eventLoginButton };
