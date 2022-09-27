import { onNavigate } from '../main.js';
import { createUser, popupGoogle } from '../lib/firebase.js';

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

  nameAndLastNameContainer.append(inputName, inputLastName);

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('requiered', '');
  inputEmail.setAttribute('placeholder', 'Correo electrónico');
  inputEmail.setAttribute('id', 'emailLogin');
  inputEmail.setAttribute('type', 'email');

  const inputPass = document.createElement('input');
  inputPass.setAttribute('requiered', '');
  inputPass.setAttribute('placeholder', 'Contraseña');
  inputPass.setAttribute('id', 'password');
  inputPass.setAttribute('type', 'password');

  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.setAttribute('requiered', '');
  inputConfirmPassword.setAttribute('placeholder', 'Confirma tu Contraseña');
  inputConfirmPassword.setAttribute('id', 'confirm-password');
  inputConfirmPassword.setAttribute('type', 'password');

  const buttonSignUp = document.createElement('button');
  buttonSignUp.textContent = 'Registrate!';

  const google = document.createElement('button');
  google.className = 'google';

  const section2 = document.createElement('section');
  section2.className = 'section2';

  const account = document.createElement('p');
  account.textContent = '¿Tienes Cuenta?';
  account.className = 'account';

  const linkLogin = document.createElement('a');
  linkLogin.setAttribute('href', '');
  linkLogin.textContent = 'Inicia Sesión';

  section2.append(account, linkLogin);

  const errorAdvice = document.createElement('p');
  errorAdvice.setAttribute('id', 'errorApp');

  section1.append(
    nameAndLastNameContainer,
    inputEmail,
    inputPass,
    inputConfirmPassword,
    buttonSignUp,
    google,
    section2,
    errorAdvice,
  );

  linkLogin.addEventListener('click', () => {
    onNavigate('/');
  });

  // Escuchador boton google

  google.addEventListener('click', () => {
    popupGoogle()
      .then(() => {
        onNavigate('/wall');
      });
  });

  // Escuchador boton Registrarse

  buttonSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    const registerEmail = inputEmail.value;
    const registerPass = inputPass.value;
    createUser(registerEmail, registerPass)
      .then(() => {
        onNavigate('/wall');
      })
      .catch((error) => {
        const usedEmail = 'Este email ya se encuentra en uso';
        const invalidEmail = 'Este email no es válido';

        if (error.code === 'auth/email-alredy-in-use') {
          errorAdvice.innerText = usedEmail;
        } else if (error.code === 'auth/invalid-email') {
          errorAdvice.innerText = invalidEmail;
        }
      });
  });
  div.append(header, section1);

  return div;
};
