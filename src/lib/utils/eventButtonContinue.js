import { auth, createUser } from '../../firebase/authenticationFirebase.js';
import { showMessageError, showSuccessfulResponse } from './formValidator.js';

const eventButtonCreateUser = (path) => {
  if (path === '/signIn') {
    const buttonContinue = document.getElementById('submitContinueButton');
    if (buttonContinue) {
      buttonContinue.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const result = createUser(auth, email, password);
        result.then((userCredential) => {
          showSuccessfulResponse();
          if (userCredential) {
            window.location.href = '#wall';
            localStorage.setItem('Username', `${dataForm.name}`);
            const getName = localStorage.getItem('Username');
            const contentPost = document.querySelector('#wallOffPublication');
            if (contentPost) {
              contentPost.innerHTML += `<h1 id="greetingUserId" class="greetingUser">Hola ${getName}!</h1>`;
            }
          }
        })
          .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode)
            console.log('Esto es un error')
            showMessageError(errorCode)
          });
      });
    };
  };
};

export { eventButtonCreateUser };
