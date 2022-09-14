import { onNavigate } from '../main.js';

export const login = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');

  button.textContent = 'entrar';
  buttonBack.textContent = 'Regresa';
  title.textContent = 'Inicia Sesion';

  button.addEventListener('click', () => {
    onNavigate('/wall');
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(title, inputEmail, inputPass, button, buttonBack);

  return div;
};
