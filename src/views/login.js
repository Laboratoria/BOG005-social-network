import { onNavigate } from '../main.js';
import {
  singUser, auth, provider, signInWithPopup, GoogleAuthProvider,
} from '../lib/firebase.js';

export const login = () => {
  const sectionLogin = document.createElement('section');
  sectionLogin.classList.add('sectionLogin');

  const containWelcome = document.createElement('article');
  containWelcome.classList.add('viewWelcome');
  const imgWelcome = document.createElement('img');
  imgWelcome.setAttribute('srcset', './image/imgWelcome.png');
  imgWelcome.classList.add('imgWelcome');

  const containLogin = document.createElement('section');
  containLogin.classList.add('viewLogin');
  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('srcset', './image/danaYogaLogo.png');
  imgLogo.classList.add('imgLogo');

  const formlogin = document.createElement('form');
  // inputs de texto para mail y contraseña
  const inputEmail = document.createElement('input');
  inputEmail.classList.add('input');
  inputEmail.setAttribute('type', 'email'); // para validar que sea un mail
  inputEmail.setAttribute('id', 'emaillogin');
  inputEmail.setAttribute('placeholder', 'Introduce Correo');
  inputEmail.setAttribute('required', ''); // se obliga como requerimiento

  const inputPass = document.createElement('input');
  inputPass.classList.add('input');
  inputPass.setAttribute('id', 'passlogin');
  inputPass.setAttribute('placeholder', 'Introduce Contraseña');
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('required', ''); // se obliga como requerimiento

  // botones de google registro y regresar
  const buttonGoogle = document.createElement('button');
  buttonGoogle.setAttribute('class', 'btnGoogle');
  buttonGoogle.textContent = 'Ingresar con Google';

  const button = document.createElement('button');
  button.setAttribute('class', 'btn login');
  button.textContent = 'Ingresar';

  const containRegister = document.createElement('div');
  containRegister.classList.add('contRegist');
  const regisText = document.createElement('p');
  regisText.textContent = '¿No tienes cuenta?';
  const buttonRegis = document.createElement('button');
  buttonRegis.classList.add('btnRegister');
  buttonRegis.textContent = '¡Regístrate!';

  buttonRegis.addEventListener('click', (e) => { // evento para regresar a inicio
    e.preventDefault();
    onNavigate('/register');
  });

  const errorText = document.createElement('p'); // imprimir errores en pantalla
  errorText.setAttribute('id', 'errorText');

  formlogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailLogin = inputEmail.value; // Guardamos los valores de mail y password de los inputs
    const passwordLogin = inputPass.value;
    singUser(emailLogin, passwordLogin)
      .then((userCredential) => { // Si el usuario se acredita, será dirigido al muro
        onNavigate('/wall');
      })
      .catch((error) => { // si hubo un error en el registro, retorna según el caso
        const errorCode = error.code;
        if (errorCode === 'auth/user-not-found') {
          errorText.textContent = 'Usuario no encontrado...';
        } else if (errorCode === 'auth/wrong-password') {
          errorText.textContent = '¡Email o contraseña incorrectos!';
        } else if (errorCode === 'auth/invalid-email') {
          errorText.textContent = '*El correo es inválido';
        }
      });
  });

  const optionText = document.createElement('p'); // para conectarse con google o con correo
  optionText.setAttribute('id', 'optionText');
  optionText.textContent = ('- Ingresa con correo -')

  buttonGoogle.addEventListener('click', (e) => { // Botón para ingresar con google
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        onNavigate('/wall');
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = provider.credentialFromError(error);
      });
  });

  sectionLogin.append(containWelcome, containLogin);
  containWelcome.append(imgWelcome);
  containLogin.append(imgLogo, buttonGoogle, optionText, formlogin);
  containRegister.append(regisText, buttonRegis);
  formlogin.append(inputEmail, inputPass, errorText, button, containRegister);

  return sectionLogin;
};
