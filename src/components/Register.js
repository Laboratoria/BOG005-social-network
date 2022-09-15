import { onNavigate } from '../main.js';

export const Register = () => {
  // contenedor que almacenará los 2 botones y dará un solo return
  const div = document.createElement('div');
  // se crea titulo y parrafo
  const title = document.createElement('h1');
  const paragraph = document.createElement('h2');
  // Se crean 2 botones
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');

  button.textContent = 'Crear cuenta';
  buttonBack.textContent = 'Regresa';
  title.textContent = 'Regístrate';
  button.addEventListener('click', () => {
    onNavigate('/');
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(title, paragraph, inputEmail, inputPass, button, buttonBack);

  return div;
};
