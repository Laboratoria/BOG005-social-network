import getFormData from './formValidator.js';

const eventButtonContinue = () => {
  const buttonContinue = document.getElementById('submitContinue');
  console.log(buttonContinue);
  buttonContinue.addEventListener('click', () => {
    console.log('Llegó el evento');
    const formData = getFormData();
    console.log(formData);
  });
};

// window.addEventListener('load', eventButtonContinue);
export default eventButtonContinue;
