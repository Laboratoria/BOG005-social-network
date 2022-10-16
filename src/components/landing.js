import { onNavigate } from '../main.js';
import { googleSignIn } from '../firebase/connection.js';

export const landing = () => {
  const containerLanding = document.createElement('section');
  containerLanding.classList.add('container');

  const imgLogin = document.createElement('img');
  imgLogin.className = 'img-world';
  imgLogin.src = '/img/logo.png';
  imgLogin.alt = 'logo';

  const title = document.createElement('h1');
  title.textContent = 'REGÍSTRATE';
  title.className = 'title1';

  const buttonRegisterG = document.createElement('button');
  buttonRegisterG.textContent = '   Registrarse con Google';
  buttonRegisterG.classList.add('buttons-register');
  buttonRegisterG.setAttribute('id', 'btn-google');

  const buttonRegisterE = document.createElement('button');
  buttonRegisterE.textContent = 'Registrarse con E-mail';
  buttonRegisterE.classList.add('buttons-register');
  buttonRegisterE.setAttribute('id', 'btn-email');

  const question = document.createElement('h3');
  question.textContent = '¿Ya tienes cuenta? usa el botón:';
  question.classList = 'question';

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Inicia Sesión';
  buttonLogin.classList.add('button');
  buttonLogin.setAttribute('id', 'i-sesion');

  buttonRegisterG.addEventListener('click', () => {
    googleSignIn();
  });

  buttonRegisterE.addEventListener('click', () => {
    onNavigate('/register');
  });

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });
  containerLanding.append(imgLogin, title, buttonRegisterG, buttonRegisterE, question, buttonLogin);
  return containerLanding;
};
