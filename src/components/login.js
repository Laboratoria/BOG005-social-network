import { onNavigate } from '../main.js';
import { signInUser } from '../firebase/connection.js';

export const login = () => {
  const containerLogin = document.createElement('section');
  containerLogin.classList.add('container');

  const titleLo = document.createElement('h1');
  titleLo.textContent = 'ENJOY THE WORLD';
  titleLo.className = 'titleLo';

  const imgLogin = document.createElement('img');
  imgLogin.className = 'img-login';
  imgLogin.src = '/img/logo.png';
  imgLogin.alt = 'logo';

  const loginForm = document.createElement('section');
  loginForm.classList.add('form-login');

  const loginEmail = document.createElement('input');
  loginEmail.classList.add('inputE');
  loginEmail.setAttribute('type', 'email');
  loginEmail.setAttribute('id', 'email-login');
  loginEmail.setAttribute('placeholder', 'E-mail');
  loginEmail.setAttribute('required', '');

  const loginPassword = document.createElement('input');
  loginPassword.classList.add('inputL');
  loginPassword.setAttribute('type', 'password');
  loginPassword.setAttribute('id', 'password-login');
  loginPassword.setAttribute('placeholder', 'Password');
  loginPassword.setAttribute('required', '');

  const loginButton = document.createElement('button');
  loginButton.textContent = 'Sign In';
  loginButton.setAttribute('class', 'button-login button');

  const question = document.createElement('h3');
  question.textContent = 'Did You Forget Your Password?';

  const session = document.createElement('h3');
  session.textContent = 'Click Here';

  containerLogin.append(
    titleLo,
    imgLogin,
    loginEmail,
    loginPassword,
    loginButton,
    question,
    session,
  );

  containerLogin
    .querySelector('.button-login')
    .addEventListener('click', (e) => {
      console.log('se le dio click al botón');
      e.preventDefault();
      const emailLogin = loginEmail.value;
      const passLogin = loginPassword.value;

      signInUser(emailLogin, passLogin)
        .then(() => onNavigate('/wall'))
        .catch(() => onNavigate('/login'));
    });

  return containerLogin;
};
