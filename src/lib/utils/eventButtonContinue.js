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
            localStorage.setItem('User', `${dataForm.user}`);
            //return userCredential;
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
