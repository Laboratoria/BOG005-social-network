import { getFormData } from './formValidator.js';
import { auth, testCreate } from '../../firebase/authenticationFirebase.js';

const eventButtonContinue = () => {
  if (window.location.pathname === '/signIn') {
    const buttonContinue = document.getElementById('submitContinueButton');
    if (buttonContinue) {
      buttonContinue.addEventListener('click', () => {
        const dataForm = getFormData();
        const result = testCreate(auth, dataForm.email, dataForm.password);
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
      });
    }
  }
};
export default eventButtonContinue;
