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
    // const formSignIn = document.getElementById('formSignInId');
    const buttonContinue = document.getElementById('submitContinueButton');
    if (buttonContinue) {
      buttonContinue.addEventListener('click', () => {
        //e.preventDefault();
        const dataForm = getFormData();
        const result = testCreate(auth, dataForm.email, dataForm.password);
        console.log(result);
        result.then((userCredential) => {
          // window.location.href = '#wall';
          console.log('ok', userCredential);
        }).catch((error) => {
          console.error(error.message, 'no ok');
        })
       // if (result !== undefined) { //último intento de validación fué con gladys, la creó pero no entró en este if
          console.log('Evento botón continuar');
          //window.location.href = '#wall';
        // } else {
        //   console.log('Si hay errores');
        // }
        //window.location.href = '#wall'; // si redirecciona al muro pero no me permite ver el error
        // const formData = getFormData();
        // console.log(formData);
      });
    }
  }
};
export default eventButtonContinue;
