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

  const nameAndLastNameContainer = document.createElement('section');
  nameAndLastNameContainer.className = 'name-lastName-container';

  const inputName = document.createElement('input');
  inputName.setAttribute('requiered', '');
  inputName.setAttribute('placeholder', 'Nombre');
  inputName.setAttribute('id', 'name');

  const inputLastName = document.createElement('input');
  inputLastName.setAttribute('requiered', '');
  inputLastName.setAttribute('placeholder', 'Apellido');
  inputLastName.setAttribute('id', 'lastName');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('requiered', '');
  inputEmail.setAttribute('placeholder', 'Correo electrónico');
  inputEmail.setAttribute('id', 'emailLogin');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('requiered', '');
  inputPassword.setAttribute('placeholder', 'Crear contraseña');
  inputPassword.setAttribute('id', 'password');

  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.setAttribute('requiered', '');
  inputConfirmPassword.setAttribute('placeholder', 'Confirma tu contraseña');
  inputConfirmPassword.setAttribute('id', 'confirm-password');

  nameAndLastNameContainer.append(inputName, inputLastName);

  const buttonSignUp = document.createElement('button');
  buttonSignUp.textContent = 'Regístrate';

  const google = document.createElement('a');
  google.setAttribute('href', '');
  google.textContent = 'Registrarse con google';
  google.className = 'google';
  const facebook = document.createElement('a');
  facebook.setAttribute('href', '');
  facebook.textContent = 'Registrarse con facebook';
  facebook.className = 'facebook';
  section1.append(
    inputEmail,
    nameAndLastNameContainer,
    inputEmail,
    inputPassword,
    inputConfirmPassword,
    buttonSignUp,
    google,
    facebook,
  );

  // Se crea contendeor pra registrarse si no tiene una cuenta
  const section2 = document.createElement('section');
  section2.className = 'section2';
  const account = document.createElement('p');
  account.textContent = '¿Tienes Cuenta?';
  account.className = 'account';
  const linkLogin = document.createElement('a');
  linkLogin.setAttribute('href', '');
  linkLogin.textContent = ' Inicia Sesión';
  section2.append(account, linkLogin);

  buttonSignUp.addEventListener('click', () => {
    onNavigate('/wall');
  });
  linkLogin.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(header, section1, section2);

  return div;
};
