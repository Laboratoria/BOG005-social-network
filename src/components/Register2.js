import { onNavigate } from '../main.js';

export const Register2 = () => {
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
  header.append(title, paragraph);

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
  inputPassword.setAttribute('placeholder', 'Contraseña');
  inputPassword.setAttribute('id', 'password');

  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.setAttribute('requiered', '');
  inputConfirmPassword.setAttribute('placeholder', 'Confirma tu Contraseña');
  inputConfirmPassword.setAttribute('id', 'confirm-password');

  nameAndLastNameContainer.append(inputName, inputLastName);
  const buttonSignUp = document.createElement('button');
  buttonSignUp.textContent = 'Crear Cuenta';
  section1.append(
    inputEmail,
    nameAndLastNameContainer,
    inputEmail,
    inputPassword,
    inputConfirmPassword,
    buttonSignUp,
  );
  // Se crea contendeor pra registrarse si no tien una cuenta
  const section2 = document.createElement('section');
  section2.className = 'section2-Register';

  const linkRegister2 = document.createElement('a');
  linkRegister2.setAttribute('href', '');
  linkRegister2.textContent = ' Inicia Sesión';
  section2.append(linkRegister2);

  buttonSignUp.addEventListener('click', () => {
    onNavigate('/');
  });
  linkRegister2.addEventListener('click', () => {
    onNavigate('/wall');
  });

  div.append(header, section1, section2);

  return div;
};
