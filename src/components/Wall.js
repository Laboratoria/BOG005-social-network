import { onNavigate } from '../main.js';

export const Wall = () => {
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

  paragraph.textContent = 'Inicia Sesión';
  button.textContent = 'Entrar';
  buttonBack.textContent = 'Regresar';
  title.textContent = 'Yummy Friends';
  button.addEventListener('click', () => {
    onNavigate('/');
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(title, paragraph, inputEmail, inputPass, button, buttonBack);

  return div;
};
