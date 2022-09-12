import { onNavigate } from '../main.js';
// import { auth, db } from '../lib/index.js';

export const register = () => {
  const containRegis = document.createElement('section');
  containRegis.classList.add('viewRegister');

  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('srcset', './image/ladyCodeLogo.jpg');
  imgLogo.classList.add('imgLogo');

  const inputEmail = document.createElement('input');
  inputEmail.classList.add('input');
  inputEmail.setAttribute('placeholder', 'Introduce tu correo');
  const inputPass = document.createElement('input');
  inputPass.classList.add('input');
  inputPass.setAttribute('placeholder', 'Introduce tu contraseña');
  inputPass.setAttribute('type', 'password');

  const button = document.createElement('button');
  button.setAttribute("class", "btn registration");
  const buttonBack = document.createElement('button');
  buttonBack.classList.add('btn');
  button.textContent = 'Registrarse';
  buttonBack.textContent = 'Regresar';

  button.addEventListener('click', () => {
    onNavigate('/login');
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  containRegis.append(imgLogo, inputEmail, inputPass, button, buttonBack);

  return containRegis;
};

// console.log(auth, db);