import signIn from '../page/signIn.js';

const eventButtonSignIn = () => {
  //Agregar window.location para enrutar la pagina 
  const buttonSignIn = document.getElementById('loginButtonId');
  buttonSignIn.addEventListener('click', () => {
    document.getElementById('welcome').innerHTML = signIn();
  });
};

export default eventButtonSignIn;
