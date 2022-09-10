import signIn from '../page/signIn.js';
/**
 * Esta función nos llevará a la siguiente página usando window.location
 * en este momento esta ruta es provisional
 */

const eventButtonSignIn = () => {
  const buttonSignIn = document.getElementById('loginButtonId');
  buttonSignIn.addEventListener('click', () => {
    const header = document.getElementById('header');
    const sectionwelcome = document.getElementById('sectionWelcomeId');
    const signPage = signIn();
    document.getElementById('contentPageId').removeChild(header);
    document.getElementById('contentPageId').removeChild(sectionwelcome);
    document.getElementById('contentPageId').append(signPage.article, signPage.buttonContinue);
  });
};
export default eventButtonSignIn;
