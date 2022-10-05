// import { onNavigate } from '../main.js';
import { createUser } from '../firebase/connection.js';

export const register = () => {
  const containerRegister = document.createElement('section');
  containerRegister.classList.add('container');

  const imgLogin = document.createElement('img');
  imgLogin.className = 'img-login';
  imgLogin.src = '/img/logo.png';
  imgLogin.alt = 'logo';

  const title = document.createElement('h1');
  title.textContent = 'REGISTER';
  title.className = 'titleR';

  const registerForm = document.createElement('section');
  registerForm.classList.add('formRegister');

  const userName = document.createElement('input');
  userName.classList.add('inputName');
  userName.setAttribute('type', 'text');
  // userName.setAttribute('id', 'userName');
  userName.setAttribute('placeholder', 'Nickname');
  userName.setAttribute('required', '');

  const registerEmail = document.createElement('input');
  registerEmail.classList.add('inputEmail');
  registerEmail.setAttribute('type', 'email');
  // registerEmail.setAttribute('id', 'emailRegister');
  registerEmail.setAttribute('placeholder', 'E-mail');
  registerEmail.setAttribute('required', '');

  const registerPassword = document.createElement('input');
  registerPassword.classList.add('inputPass');
  registerPassword.setAttribute('type', 'password');
  // registerPassword.setAttribute('id', 'passwordRegister');
  registerPassword.setAttribute('placeholder', 'Password');
  registerPassword.setAttribute('required', '');

  const registerButton = document.createElement('button');
  registerButton.textContent = 'Sign In';
  registerButton.setAttribute('class', 'buttonRegister button');
  registerButton.setAttribute('id', 'buttonStartRegister');

  const question = document.createElement('h3');
  question.textContent = 'Already a member?';
  question.classList = 'question';

  const session = document.createElement('h3');
  session.textContent = 'Sign In';
  session.className = 'here';

  registerButton.addEventListener('click', () => {
    const emailRegister = registerEmail.value;
    const passRegister = registerPassword.value;
    console.log(emailRegister, passRegister);

    createUser(emailRegister, passRegister)
      .then(() => {
        console.log('dentroooo');
        // onNavigate('/wall');
      })
      .catch(() => {
        console.log('fail');
      });
    return createUser;
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
