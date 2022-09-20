import { onNavigate } from '../main.js';
import { createUser } from '../firebase/connection.js';

export const register = () => {
  const containerRegister = document.createElement('section');
  containerRegister.classList.add('container');

  const registerForm = document.createElement('section');
  registerForm.classList.add('formRegister');

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
  registerButton.textContent = 'Regístrate';
  registerButton.setAttribute('class', 'buttonRegister button');

  const buttonBack = document.createElement('button');
  buttonBack.classList.add('button');
  buttonBack.textContent = 'Regresar';

  registerButton.addEventListener('click', () => {
    const emailR = registerEmail.value;
    const passR = registerPassword.value;
    console.log(createUser(emailR, passR));
    createUser(emailR, passR)
      .then(() => {
        console.log('dentroooo');
        onNavigate('/login'); // si ya se registreo que entre a muro
      })
      // no se usa... revisar
      .catch((error) => {});
  });

  // })
  buttonBack.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
  });

  const errorText = document.createElement('p');
  errorText.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailR = registerEmail.value;
    const passR = registerPassword.value;
    createUser(emailR, passR)
      .then((userCredential) => { // no se usa, revisar
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
    registerEmail,
    registerPassword,
    registerButton,
    buttonBack,
    errorText,
  );

  return containerRegister;
};
