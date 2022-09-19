import { onNavigate } from '../main.js';
import { singUser, auth, provider, signInWithPopup, GoogleAuthProvider } from '../lib/index.js';

export const login = () => {
  const containLogin = document.createElement('section');
  containLogin.classList.add('viewLogin');

  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('srcset', './image/ladyCodeLogo.jpg');
  imgLogo.classList.add('imgLogo');

  const formlogin = document.createElement('form');
  // inputs de texto para mail y contraseña
  const inputEmail = document.createElement('input');
  inputEmail.classList.add('input');
  inputEmail.setAttribute('type', 'email'); // para validar que sea un mail
  inputEmail.setAttribute('id', 'emaillogin');
  inputEmail.setAttribute('placeholder', 'Introduce tu correo');
  inputEmail.setAttribute('required', ''); // se obliga como requerimiento

  const inputPass = document.createElement('input');
  inputPass.classList.add('input');
  inputPass.setAttribute('id', 'passlogin');
  inputPass.setAttribute('placeholder', 'Introduce tu contraseña');
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('required', ''); // se obliga como requerimiento

  // botones de google registro y regresar
  const buttonGoogle = document.createElement('button');
  buttonGoogle.setAttribute('class', 'btnGoogle');

  const button = document.createElement('button');
  button.setAttribute('class', 'btn login');
  const buttonRegis = document.createElement('button');
  buttonRegis.classList.add('btn');
  buttonGoogle.textContent = 'Continuar con Google';
  button.textContent = 'Ingresar';
  buttonRegis.textContent = '¿No tienes cuenta? Registrate';

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
        if (errorCode === 'auth/email-already-in-use') {
          errorText.textContent = '*El correo ya existe';
        } else if (errorCode === 'auth/weak-password') {
          errorText.textContent = '*Contraseña débil, debe tener al menos 6 carácteres';
        } else if (errorCode === 'auth/invalid-email') {
          errorText.textContent = '*El correo es inválido';
        }
      });
  });

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

  containLogin.append(imgLogo, buttonGoogle, formlogin);
  formlogin.append(inputEmail, inputPass, errorText, button, buttonRegis);

  return containLogin;
};
