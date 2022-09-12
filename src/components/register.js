import { onNavigate } from '../main.js';

export const register = () => {
  const containRegis = document.createElement('section');
  containRegis.classList.add('viewRegister');

  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('srcset', './image/ladyCodeLogo.jpg');
  const inputEmail = document.createElement('input');
  inputEmail.classList.add('input');
  inputEmail.setAttribute('placeholder', 'Introduce tu correo');
  const inputPass = document.createElement('input');
  inputPass.classList.add('input');
  inputPass.setAttribute('placeholder', 'Introduce tu contraseña');
  const button = document.createElement('button');
  button.classList.add('btn');
  button.textContent = 'Crear cuenta';
  const buttonBack = document.createElement('button');
  buttonBack.classList.add('btn');
  buttonBack.textContent = 'Regresa';

  button.addEventListener('click', () => {
    onNavigate('/login');
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  containRegis.append(imgLogo, inputEmail, inputPass, button, buttonBack);

  return containRegis;
};
