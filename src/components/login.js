import { onNavigate } from '../main.js';
import { signInUser } from '../firebase/connection.js';

export const login = () => {
  const containerLogin = document.createElement('section');
  containerLogin.classList.add('container');

  const title = document.createElement('h1');
  title.textContent = 'ENJOY THE WORLD';

  const imgLogin = document.createElement('img');
  imgLogin.className = 'img-login';
  imgLogin.src = '/img/logo.png';
  imgLogin.alt = 'logo';

  const loginForm = document.createElement('section');
  loginForm.classList.add('form-login');

  const loginEmail = document.createElement('input');
  loginEmail.classList.add('input');
  loginEmail.setAttribute('type', 'email');
  loginEmail.setAttribute('id', 'email-login');
  loginEmail.setAttribute('placeholder', 'E-mail');
  loginEmail.setAttribute('required', '');

  const loginPassword = document.createElement('input');
  loginPassword.classList.add('input');
  loginPassword.setAttribute('type', 'password');
  loginPassword.setAttribute('id', 'password-login');
  loginPassword.setAttribute('placeholder', 'contraseña');
  loginPassword.setAttribute('required', '');

  const loginButton = document.createElement('button');
  loginButton.textContent = 'Ingresa';
  loginButton.setAttribute('class', 'button-login button');

  const question = document.createElement('h3');
  question.textContent = '¿Ya eres miembro?';

  const session = document.createElement('h3');
  session.textContent = 'Inicia tu sesión';

  loginButton.addEventListener('click', () => {
    onNavigate('/wall'); // Debería dirigir al Home, muro o perfil
  });

  const errorText = document.createElement('p');

  containerLogin.append(
    title,
    imgLogin,
    loginEmail,
    loginPassword,
    loginButton,
    question,
  );

  containerLogin.querySelector('.button-login').addEventListener('click', (e) => {
    console.log('se le dio click al botón');
    e.preventDefault();
    const emailL = loginEmail.value;
    const passL = loginPassword.value;
    signInUser(emailL, passL)
    .then(()=>onNavigate('/wall'))
    .catch((err)=>onNavigate('/login'))
  });

  
  return containerLogin;
};
