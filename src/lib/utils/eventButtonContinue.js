import { getFormData } from './formValidator.js';
import { auth, testCreate } from '../../firebase/authenticationFirebase.js';

const eventButtonContinue = () => {
  if (window.location.pathname === '/signIn') {

    const buttonContinue = document.getElementById('submitContinueButton');
    if (buttonContinue) {
      buttonContinue.addEventListener('click', () => {
        const dataForm = getFormData();
        const result = testCreate(auth, dataForm.email, dataForm.password);
        console.log(result);
        result.then((userCredential) => {
          if(userCredential) {
          
            window.location.href = '#wall'
            console.log('email ->', userCredential.email)
          } 
        }).catch((error) => {
          console.error(error.message, 'no ok');
        })
          console.log('Evento botón continuar');
      });
    }
  }
};
export default eventButtonContinue;
