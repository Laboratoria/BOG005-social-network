import getFormData from './formValidator.js';

const eventButtonContinue = () => {
  const buttonContinue = document.getElementById('submitContinueButton');
  if (buttonContinue) {
    buttonContinue.addEventListener('click', () => {
      const formData = getFormData();
      console.log(formData);
    });
  }
};
export default eventButtonContinue;
