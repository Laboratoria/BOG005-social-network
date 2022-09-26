import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import { onNavigate } from '../main.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAHVluY138pnk8PKOw2nuTGMcEEkV4dpLY',
  authDomain: 'social-network-d51cd.firebaseapp.com',
  projectId: 'social-network-d51cd',
  storageBucket: 'social-network-d51cd.appspot.com',
  messagingSenderId: '447408493171',
  appId: '1:447408493171:web:221c363b010259179b9006',
  measurementId: 'G-19TVG0TJQD',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('requiered', '');
  inputPassword.setAttribute('placeholder', 'Contraseña');
  inputPassword.setAttribute('id', 'password');
  inputPassword.setAttribute('type', 'password');

  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.setAttribute('requiered', '');
  inputConfirmPassword.setAttribute('placeholder', 'Confirma tu Contraseña');
  inputConfirmPassword.setAttribute('id', 'confirm-password');
  inputConfirmPassword.setAttribute('type', 'password');

  const buttonSignUp = document.createElement('button');
  buttonSignUp.textContent = 'Registrate!';

  const google = document.createElement('a');
  google.setAttribute('href', '');
  google.textContent = 'Registrarse con google';
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

  section1.append(
    nameAndLastNameContainer,
    inputEmail,
    inputPassword,
    inputConfirmPassword,
    buttonSignUp,
    google,
    section2,
  );

  // Función registrarse
  buttonSignUp.addEventListener('click', () => {
    const confirmedPassword = document.getElementById('confirm-password');
    const createUsers = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          onNavigate('/wall');
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          if (password !== confirmedPassword) {
            alert(errorMessage);
          } return errorMessage;
          // ..
        });
    };

    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('password').value;
    createUsers(email, password);
  });

  linkLogin.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(header, section1);

  return div;
};
