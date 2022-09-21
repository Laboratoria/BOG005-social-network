import { onNavigate } from '../main.js';

export const Welcome = () => {
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
  const signIn = document.createElement('h2');
  signIn.className = 'signIn';
  signIn.textContent = 'Iniciar Sesión';
  header.append(title, paragraph, signIn);

  // Se crea contenedor para inicio de sesión con correo, google y facebook
  const section1 = document.createElement('section');
  section1.className = 'section1';
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('requiered', '');
  inputEmail.setAttribute('placeholder', 'Correo electrónico');
  inputEmail.setAttribute('id', 'emailLogin');
  inputEmail.setAttribute('type', 'email');
  const inputPass = document.createElement('input');
  inputPass.setAttribute('requiered', '');
  inputPass.type = 'password';
  inputPass.setAttribute('placeholder', 'Contraseña');
  inputPass.setAttribute('id', 'passwordLogin');
  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Inicia Sesión';
  const google = document.createElement('a');
  google.setAttribute('href', '');
  google.textContent = 'Iniciar sesión con google';
  google.className = 'google';
  const facebook = document.createElement('a');
  facebook.setAttribute('href', '');
  facebook.textContent = 'Iniciar sesión con facebook';
  facebook.className = 'facebook';
  section1.append(inputEmail, inputPass, buttonLogin, google, facebook);

  // Se crea contendeor pra registrarse si no tien una cuenta
  const section2 = document.createElement('section');
  section2.className = 'section2';
  const account = document.createElement('p');
  account.textContent = '¿No tienes cuenta?';
  account.className = 'account';
  const linkRegister = document.createElement('a');
  linkRegister.setAttribute('href', '');
  linkRegister.textContent = 'Regístrate';
  section2.append(account, linkRegister);

  buttonLogin.addEventListener('click', () => {
    onNavigate('/wall');
  });
  linkRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  div.append(header, section1, section2);

  return div;
};
