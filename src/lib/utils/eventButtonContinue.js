import { getFormData } from './formValidator.js';
import { auth, testCreate } from '../../firebase/authenticationFirebase.js';
// const eventButtonContinue = () => {
//   if (window.location.pathname === '/signIn') {
//     const buttonContinue = document.getElementById('submitContinueButton');
//     if (buttonContinue) {
//       buttonContinue.addEventListener('click', () => {
//         const formData = getFormData();
//         console.log(formData);
//       });
//     }
//   }
// };

const eventButtonContinue = () => {
  if (window.location.pathname === '/signIn') {
    const formSignIn = document.getElementById('formSignInId');
    if (formSignIn) {
      formSignIn.addEventListener('submit', (e) => {
        e.preventDefault();
        const dataForm = getFormData();
       // console.log(dataForm);
        testCreate(auth, dataForm.email, dataForm.password);
        console.log('ya vamos a arreglar el css')
        // const formData = getFormData();
        // console.log(formData);
      });
    }
  }
};
export default eventButtonContinue;
