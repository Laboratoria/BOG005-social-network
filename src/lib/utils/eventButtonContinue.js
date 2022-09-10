// import formValidator from './formValidator.js';
import getFormData from './formValidator.js';

const eventButtonContinue = () => {
  const buttonContinue = document.getElementById('submitContinueButton');
  if (buttonContinue){
    buttonContinue.addEventListener('click', () => {
      // document.getElementById('contentPageId').innerHTML =
      // console.log(buttonContinue);
      console.log('si sirve')
      const formData = getFormData();
      console.log(formData);
    });
  }
  // buttonContinue?.addEventListener('click', () => {
  //   // document.getElementById('contentPageId').innerHTML =
  //   console.log(buttonContinue);
  //   const formData = getFormData();
  //   console.log(formData);
  // });
};
export default eventButtonContinue;
