import { onNavigate } from '../main.js';

export const Welcome = () => {
  // contenedor que almacenará los 2 botones y dará un solo return
  const div = document.createElement('div');
  // se crea titulo y parrafo
  const title = document.createElement('h1');
  const paragraph = document.createElement('h2');
  // Se crean 2 botones
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');

  buttonLogin.textContent = 'Inicia Sesión';
  buttonRegister.textContent = 'Regístrate';
  title.textContent = 'Yummy Friends';
  paragraph.textContent = 'Aquí encontrarás ese dulce que le hace falta a  tu vida.';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });
  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  div.append(title, paragraph, buttonLogin, buttonRegister);

  return div;
};
