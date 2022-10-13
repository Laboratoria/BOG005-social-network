import { onNavigate } from '../main.js';
import { createUser, singUserGoogle, GoogleAuthProvider, profileUser } from '../lib/index.js';

export const register = () => {
  const registerView = document.createElement('section');
  registerView.classList.add('registerView');
  const containRegister = document.createElement('section');
  containRegister.classList.add('viewRegister');

  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('srcset', './image/logoLady.png');
  imgLogo.classList.add('imgLogo');

  const buttonGoogle = document.createElement('button'); /// botono google
  buttonGoogle.setAttribute('id', 'buttonGoogle');
  buttonGoogle.textContent = 'Registrarse con google';

  const formRegister = document.createElement('form'); /// se debe envolver en formulario //***PREGUNTAR A YEIMY  

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
  button.setAttribute('class', 'btn registration'); ///////////////***PREGUNTAR POR LA DIRERENCIA CON .classList.add(
  button.setAttribute('id', 'btnRegistration');
  const buttonBack = document.createElement('button');
  buttonBack.classList.add('btn');
  buttonBack.setAttribute('class', 'buttonBack');
  button.textContent = 'Registrarse';
  buttonBack.textContent = 'Regresar';

  buttonBack.addEventListener('click', (e) => { // evento para regresar a inicio
    e.preventDefault();///// Evita que se recarge la pagina según el caso ////**PREGUNTAR */
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
        const user = userCredential.user;
        console.log(user, "este es el usuario")
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

  buttonGoogle.addEventListener('click', (e) => {

    singUserGoogle() /// de firebase docs
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        onNavigate('/wall');
        // ...
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        if (errorCode == error.code) { console.log("upsi, hay error de " + error) }
        if (errorCode == error.message) { console.log("upsi, hay error de " + error) }

      });
  });
  registerView.append(containRegister);
  containRegister.append(imgLogo, buttonGoogle, formRegister);
  formRegister.append(inputEmail, inputPass, button, buttonBack, errorText);

  return registerView;
};