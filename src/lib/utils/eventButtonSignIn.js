// import signIn from '../page/signIn.js';

/**
 * Esta función nos llevará a la siguiente página usando window.location
 * en este momento esta ruta es provisional
 */
const eventButtonSignIn = () => {
  const buttonSignIn = document.getElementById('loginButtonId');
  buttonSignIn.addEventListener('click', () => {
    console.log('Hay evento');
    // document.getElementById('contentPageId').innerHTML = signIn();
  });
};

export default eventButtonSignIn;
