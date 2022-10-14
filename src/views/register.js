import { onNavigate } from '../main.js';
import { createUser, auth, provider, signInWithPopup, GoogleAuthProvider } from '../lib/firebase.js';

export const register = () => {
  const sectionRegister = document.createElement('section');
  sectionRegister.classList.add('sectionRegister');

  const containWelcome = document.createElement('article');
  containWelcome.classList.add('viewWelcome');
  const imgWelcome = document.createElement('img');
  imgWelcome.setAttribute('srcset', './image/imgWelcome.png');
  imgWelcome.classList.add('imgWelcome');

  const containRegis = document.createElement('section');
  containRegis.classList.add('viewRegister');
  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('srcset', './image/danaYogaLogo.png');
  imgLogo.classList.add('imgLogo');

  const formRegister = document.createElement('form');
  // inputs de texto para mail y contraseña
  const inputEmail = document.createElement('input');
  inputEmail.classList.add('input');
  inputEmail.setAttribute('type', 'email'); // para validar que sea un mail
  inputEmail.setAttribute('id', 'emailRegister');
  inputEmail.setAttribute('placeholder', 'Introduce Correo');
  inputEmail.setAttribute('required', ''); // se obliga como requerimiento

  const inputPass = document.createElement('input');
  inputPass.classList.add('input');
  inputPass.setAttribute('id', 'passRegister');
  inputPass.setAttribute('placeholder', 'Introduce Contraseña');
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('required', ''); // se obliga como requerimiento

  // botones de google registro y regresar
  const buttonGoogle = document.createElement('button');
  const imgLogoGoogle = document.createElement('img');
  imgLogoGoogle.classList.add('imgLogoGoogle');
  buttonGoogle.setAttribute('class', 'btnGoogle');
  buttonGoogle.textContent = 'Ingresar con Google';


  const button = document.createElement('button');
  button.setAttribute('class', 'btn registration');
  button.textContent = 'Registrarse';

  const buttonBack = document.createElement('button');
  buttonBack.classList.add('btnBack');
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
          errorText.textContent = '¡Éste correo ya existe!';
        } else if (errorCode === 'auth/weak-password') {
          errorText.textContent = 'Contraseña débil, debe tener al menos 6 carácteres';
        } else if (errorCode === 'auth/invalid-email') {
          errorText.textContent = 'Éste correo es inválido';
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

  sectionRegister.append(containWelcome, containRegis);
  containWelcome.append(imgWelcome);
  containRegis.append(imgLogo, buttonGoogle, formRegister);
  formRegister.append(inputEmail, inputPass, errorText, button, buttonBack)

  return sectionRegister;
};
