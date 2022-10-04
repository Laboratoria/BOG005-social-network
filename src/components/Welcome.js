import { onNavigate } from '../main.js';
import { signInUser, popupGoogle } from '../lib/firebase.js';

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

  const google = document.createElement('button');
  google.className = 'google';

  const section2 = document.createElement('section');
  section2.className = 'section2';

  const account = document.createElement('p');
  account.textContent = '¿No tienes cuenta?';
  account.className = 'account';

  const linkRegister = document.createElement('a');
  linkRegister.setAttribute('href', '');
  linkRegister.textContent = 'Regístrate';

  section2.append(account, linkRegister);

  const errorAdvice = document.createElement('p');
  errorAdvice.setAttribute('id', 'errorApp');

  section1.append(inputEmail, inputPass, buttonLogin, google, section2, errorAdvice);

  linkRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  // Escuchador boton google

  google.addEventListener('click', () => {
    popupGoogle()
      .then(() => {
        onNavigate('/wall');
      });
  });

  // Escuchador boton Iniciar sesión

  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const loginEmail = inputEmail.value;
    const loginPass = inputPass.value;
    signInUser(loginEmail, loginPass)
      .then(() => {
        onNavigate('/wall');
      })
      .catch((error) => {
        const invalidEmail = 'Correo inválido';
        const passNone = 'Debe diligenciar una contraseña';

        if (error.code === 'auth/invalid-email') {
          errorAdvice.innerText = invalidEmail;
        } else if (error.code === 'auth/internal-error') {
          errorAdvice.innerText = passNone;
        }
      });
  });

  div.append(header, section1);

  return div;
};
