import { getFormData } from './formValidator.js';
import { auth, createUser } from '../../firebase/authenticationFirebase.js';

const register = () => {
  const dataForm = getFormData();
        const result = createUser(auth, dataForm.email, dataForm.password);
        result.then((userCredential) => {

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
            console.error(error.message, 'no ok');
          });
}

const eventButtonContinue = () => {
  if (window.location.pathname === '/signIn') {
    const buttonContinue = document.getElementById('submitContinueButton');
    if (buttonContinue) {
      buttonContinue.addEventListener('click', () => {
        register();
      });
    };
  };
};


export { eventButtonContinue };
