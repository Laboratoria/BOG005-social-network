import { onNavigate } from '../main.js';
import { createUser } from '../lib/index.js';

export const register = () => {
  const containRegis = document.createElement('section');
  containRegis.classList.add('viewRegister');

  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('srcset', './image/ladyCodeLogo.jpg');
  imgLogo.classList.add('imgLogo');

  const formRegister = document.createElement('form');
  // inputs de texto para mail y contraseña
  const inputEmail = document.createElement('input');
  inputEmail.classList.add('input');
  inputEmail.setAttribute('type', 'email'); // para validar que sea un mail
  inputEmail.setAttribute('id', 'emailRegister');
  inputEmail.setAttribute('placeholder', 'Introduce tu correo');
  inputEmail.setAttribute('required', ''); // se obliga como requerimiento

  const inputPass = document.createElement('input');
  inputPass.classList.add('input');
  inputPass.setAttribute('id', 'passRegister');
  inputPass.setAttribute('placeholder', 'Introduce tu contraseña');
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('required', ''); // se obliga como requerimiento
  // botones de registro y regresar
  const button = document.createElement('button');
  button.setAttribute('class', 'btn registration');
  const buttonBack = document.createElement('button');
  buttonBack.classList.add('btn');
  button.textContent = 'Registrarse';
  buttonBack.textContent = 'Regresar';

  buttonBack.addEventListener('click', (e) => { // evento para regresar a inicio
    e.preventDefault();
    onNavigate('/');
  });

  const errorText = document.createElement('p'); // imprimir errores en pantalla
  errorText.setAttribute('id', 'errorText');

  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = inputEmail.value; // Guardamos los valores de mail y password de los inputs
    const password = inputPass.value;
    createUser(email, password)
      .then((userCredential) => { // Si el usuario se acredita, será dirigido al muro
        onNavigate('/wall');
      })
      .catch((error) => { // si hubo un error en el registro, retorna según el caso
        const errorCode = error.code;
        if (errorCode === 'auth/email-already-in-use') {
          errorText.textContent = '*El correo ya existe';
        } else if (errorCode === 'auth/weak-password') {
          errorText.textContent = '*Contraseña débil, debe tener al menos 6 carácteres';
        } else if (errorCode === 'auth/invalid-email') {
          errorText.textContent = '*El correo es inválido';
        }
      });
  });

  containRegis.append(imgLogo, formRegister);
  formRegister.append(inputEmail, inputPass, button, buttonBack, errorText);

  return containRegis;
};
