import { onNavigate } from '../main.js';

export const Register = () => {
  // contenedor que almacenará header, las 2 secciones y dará un solo return
  const div = document.createElement('div');
  div.className = 'container';

  // Header
  const header = document.createElement('header');
  header.className = 'header';
  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'Yummy Friends';
  const paragraph = document.createElement('h2');
  paragraph.className = 'paragraph';
  paragraph.textContent = 'Aquí encontrarás ese dulce que le hace falta a  tu vida.';
  const signUp = document.createElement('h2');
  signUp.className = 'signUp';
  signUp.textContent = 'Regístrate';
  header.append(title, paragraph, signUp);

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
