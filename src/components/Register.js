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

  // Se crea contenedor para inicio de sesión con correo, google y facebook
  const section1 = document.createElement('section');
  section1.className = 'section1';
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('requiered', '');
  inputEmail.setAttribute('placeholder', 'Correo electrónico');
  inputEmail.setAttribute('id', 'emailLogin');

  const buttonSignUp = document.createElement('button');
  buttonSignUp.textContent = 'Registrarse';
  const google = document.createElement('a');
  google.setAttribute('href', '');
  google.textContent = 'Registrarse con google';
  google.className = 'google';
  const facebook = document.createElement('a');
  facebook.setAttribute('href', '');
  facebook.textContent = 'Registrarse con facebook';
  facebook.className = 'facebook';
  section1.append(inputEmail, buttonSignUp, google, facebook);

  // Se crea contendeor pra registrarse si no tien una cuenta
  const section2 = document.createElement('section');
  section2.className = 'section2';
  const account = document.createElement('p');
  account.textContent = '¿Tienes Cuenta?';
  account.className = 'account';
  const linkRegister = document.createElement('a');
  linkRegister.setAttribute('href', '');
  linkRegister.textContent = ' Inicia Sesión';
  section2.append(account, linkRegister);

  buttonSignUp.addEventListener('click', () => {
    onNavigate('/register2');
  });
  linkRegister.addEventListener('click', () => {
    onNavigate('/wall');
  });

  div.append(header, section1, section2);

  return div;
};
