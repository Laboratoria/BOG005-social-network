import { onNavigate } from '../main.js';
import { googleSignIn } from '../firebase/connection.js';

export const landing = () => {
  const containerLanding = document.createElement('section');
  containerLanding.classList.add('container');

  const imgLogin = document.createElement('img');
  imgLogin.className = 'img-login';
  imgLogin.src = '/img/logo.png';
  imgLogin.alt = 'logo';

  const title = document.createElement('h1');
  title.textContent = 'ENJOY THE WORLD';
  title.className = 'titleL';

  const buttonRegisterG = document.createElement('button');
  buttonRegisterG.textContent = 'Regístrate con Google';
  buttonRegisterG.classList.add('buttonR');
  buttonRegisterG.setAttribute('id', 'google');

  const buttonRegisterE = document.createElement('button');
  buttonRegisterE.textContent = 'Regístrate con e-mail';
  buttonRegisterE.classList.add('buttonR');
  buttonRegisterE.setAttribute('id', 'e-mail');

  const question = document.createElement('h3');
  question.textContent = '¿Ya tienes una cuenta?';
  question.classList = 'question-l';

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Iniciar Sesión';
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
