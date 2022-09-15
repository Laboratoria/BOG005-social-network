import { onNavigate } from '../main.js';

export const Welcome = () => {
  // contenedor que almacenará los 2 botones y dará un solo return
  const div = document.createElement('header');
  div.className = 'container';
  // se crea titulo y parrafo
  const title = document.createElement('h1');
  title.className = 'title';
  const paragraph = document.createElement('h2');
  paragraph.className = 'paragraph';

  // Mensaje Para iniciar Sesión
  const signIn = document.createElement('h2');
  signIn.className = 'signIn';
  signIn.textContent = 'Iniciar Sesión';
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

  div.append(title, paragraph, signIn, buttonLogin, buttonRegister);

  return div;
};
