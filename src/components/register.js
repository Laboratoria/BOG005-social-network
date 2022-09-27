import { onNavigate } from '../main.js';
import { createUser } from '../firebase/connection.js';

export const register = () => {
  const containerRegister = document.createElement('section');
  containerRegister.classList.add('container');

  const title = document.createElement('h1');
  title.textContent = 'REGISTRATE';
  title.className = 'titleR';

  const registerForm = document.createElement('section');
  registerForm.classList.add('formRegister');

  const inputName = document.createElement('input');
  inputName.classList.add('input');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('id', 'inputName');
  inputName.setAttribute('placeholder', 'Nombre');
  inputName.setAttribute('required', '');

  const inputLastName = document.createElement('input');
  inputLastName.classList.add('input');
  inputLastName.setAttribute('type', 'text');
  inputLastName.setAttribute('id', 'inputLastName');
  inputLastName.setAttribute('placeholder', 'Apellido');
  inputLastName.setAttribute('required', '');

  const registerEmail = document.createElement('input');
  registerEmail.classList.add('input');
  registerEmail.setAttribute('type', 'email');
  registerEmail.setAttribute('id', 'emailRegister');
  registerEmail.setAttribute('placeholder', 'E-mail');
  registerEmail.setAttribute('required', '');

  const registerPassword = document.createElement('input');
  registerPassword.classList.add('input');
  registerPassword.setAttribute('type', 'password');
  registerPassword.setAttribute('id', 'passwordRegister');
  registerPassword.setAttribute('placeholder', 'contraseña');
  registerPassword.setAttribute('required', '');

  const registerButton = document.createElement('button');
  registerButton.textContent = 'Iniciar Sesión';
  registerButton.setAttribute('class', 'buttonRegister button');

  const question = document.createElement('h3');
  question.textContent = '¿Olvidaste tu Contraseña?';
  question.classList = 'question';

  const session = document.createElement('h3');
  session.textContent = 'Aquí';
  session.className = 'here';

  registerButton.addEventListener('click', () => {
    const nameR = inputName.value;
    const emailR = registerEmail.value;
    const passR = registerPassword.value;
    console.log(createUser(nameR, emailR, passR));

    createUser(nameR, emailR, passR)
      .then(() => {
        console.log('dentroooo');
        onNavigate('/wall'); // si ya se registreo que entre a muro
      })
      .catch(() => {});
  });

  const errorText = document.createElement('p');
  errorText.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameR = inputName.value;
    const emailR = registerEmail.value;
    const passR = registerPassword.value;
    createUser(nameR, emailR, passR)
      .then(() => {
        onNavigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/email-already-in-use') {
          errorText.textContent = 'El e-mail ingresado ya existe';
        } else if (errorCode === 'auth/weak-password') {
          errorText.textContent = 'Su contraseña debe tener al menos 6 caracteres';
        } else if (errorCode === 'auth/invalid-email') {
          errorText.textContent = 'No es un e-mail válido';
        }
      });
  });

  containerRegister.append(registerForm);
  registerForm.append(
    title,
    inputName,
    inputLastName,
    registerEmail,
    registerPassword,
    registerButton,
    question,
    session,
    errorText,
  );

  return containerRegister;
};
