// import { onNavigate } from '../main.js';
import { createUser, userProfile } from '../firebase/connection.js';
import { onNavigate } from '../main.js';

export const register = () => {
  const containerRegister = document.createElement('section');
  containerRegister.classList.add('container');

  const imgLogin = document.createElement('img');
  imgLogin.className = 'img-world';
  imgLogin.src = '/img/logo.png';
  imgLogin.alt = 'logo';

  const title = document.createElement('h1');
  title.textContent = 'REGÍSTRATE';
  title.className = 'title1';

  const registerForm = document.createElement('section');
  registerForm.classList.add('formRegister');

  const userName = document.createElement('input');
  userName.classList.add('input');
  userName.setAttribute('type', 'text');
  userName.setAttribute('placeholder', 'Usuario');
  userName.setAttribute('required', '');
  userName.id = 'userName';

  const registerEmail = document.createElement('input');
  registerEmail.classList.add('input');
  registerEmail.setAttribute('type', 'email');
  registerEmail.setAttribute('placeholder', 'Email');
  registerEmail.setAttribute('required', '');

  const registerPassword = document.createElement('input');
  registerPassword.classList.add('input');
  registerPassword.setAttribute('type', 'password');
  registerPassword.setAttribute('placeholder', 'Contraseña');
  registerPassword.setAttribute('required', '');

  const registerButton = document.createElement('button');
  registerButton.textContent = 'Enviar';
  registerButton.setAttribute('class', 'buttonRegister button');
  registerButton.setAttribute('id', 'buttonStartRegister');

  const question = document.createElement('h3');
  question.textContent = '¿Ya eres miembro?';
  question.classList = 'question';

  const session = document.createElement('a');
  session.classList.add('link');
  session.setAttribute('href', '#');
  session.textContent = 'Inicia Sesión';

  registerButton.addEventListener('click', () => {
    const emailRegister = registerEmail.value;
    const passRegister = registerPassword.value;
    const userRegister = userName.value;
    console.log(emailRegister, passRegister, userRegister);

    createUser(emailRegister, passRegister)
      .then(() => {
        // const user = credential.user;
        userProfile(userRegister);
        // console.log(credential.user);
        // onNavigate('/wall');
      })
      .catch(() => {
        console.log('fail');
      });
    return createUser;
  });

  session.addEventListener('click', () => {
    onNavigate('/login');
  });

  containerRegister.append(registerForm);
  registerForm.append(
    title,
    imgLogin,
    userName,
    registerEmail,
    registerPassword,
    registerButton,
    question,
    session,
  );

  return containerRegister;
};
