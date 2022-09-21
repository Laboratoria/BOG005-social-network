import { onNavigate } from '../main.js';
import { singUser, singUserGoogle, GoogleAuthProvider } from '../lib/index.js';

export const login = () => {
  const containLogin = document.createElement('section');
  containLogin.classList.add('viewLogin');

  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('srcset', './image/ladyCodeLogo.jpg');
  imgLogo.classList.add('imgLogo');

  const buttonGoogle = document.createElement('button'); /// botono google
  buttonGoogle.setAttribute('id', 'buttonGoogle');
  buttonGoogle.textContent = 'iniciar con google';


  const formLogin = document.createElement('form');
  const inputEmail = document.createElement('input');
  inputEmail.classList.add('input');
  inputEmail.setAttribute('type', 'email'); // para validar que sea un mail
  inputEmail.setAttribute('id', 'emailLogin');
  inputEmail.setAttribute('placeholder', 'Introduce tu correo');
  inputEmail.setAttribute('required', ''); // se obliga como requerimiento

  const inputPass = document.createElement('input');
  inputPass.classList.add('input');
  inputPass.setAttribute('id', 'passLogin');
  inputPass.setAttribute('placeholder', 'Introduce tu contraseña');
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('required', ''); // se obliga como requerimiento
  // botones de registro y regresar
  const button = document.createElement('button');
  button.setAttribute('class', 'btn login'); ///////////////***PREGUNTAR POR LA DIRERENCIA CON .classList.add(
  const buttonBack = document.createElement('button');
  buttonBack.classList.add('btn');
  button.textContent = 'Ingresar';
  buttonBack.textContent = 'Regresar';

  buttonBack.addEventListener('click', (e) => { // evento para regresar a inicio
    e.preventDefault();///// Evita que se recarge la pagina según el caso ////**PREGUNTAR */
    onNavigate('/');
  });

  const errorText = document.createElement('p'); // imprimir errores en pantalla
  errorText.setAttribute('id', 'errorText');

  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = inputEmail.value; // Guardamos los valores de mail y password de los inputs
    const password = inputPass.value;
    singUser(email, password)
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
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            //const email = error.customData.email;
            console.log(error);
            // The AuthCredential type that was used.
            //const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            if (errorCode == error.code){ console.log("upsi, hay error de " + error)}
            if (errorCode == error.message){ console.log("upsi, hay error de " + error)}
            //if (errorCode == error.customData.email){ console.log("upsi, hay error de " + error)}

        });
});

  containLogin.append(imgLogo, buttonGoogle, formLogin);
  formLogin.append(inputEmail, inputPass, button, buttonBack, errorText);


  return containLogin;
};
