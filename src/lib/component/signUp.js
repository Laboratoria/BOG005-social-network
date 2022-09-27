import { createUser } from './authFirebase.js';

// import { onNavigate } from '../../main.js';
// import{ app } from './lib/component/configFirebase.js';
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
export const signUp = `
    <picture>
      <img id="logo" src="./images/logo2.png" alt="logo">
    </picture>
    <div class="form-container-signIn">
      <h1 class="formTittle">Ingresa tus datos</h1>
      <form class="formContainer">
        <input class="inputForm" type="text" placeholder="Nombre" id="inputName">
        <input class="inputForm" type="email" placeholder="Email" id="inputEmail">
        <input class="inputForm" type="password" placeholder="Contraseña" id="inputPassword">
        
      </form>
      <div>
      <button class="btnSignIn btnSignUp" id="btnSignUp"  type="submit" onclick="register()">Registrarse</button>
      </div>
      <a href="/" class="linkSign" onclick="onNavigate('/signIn')">Ya tienes una cuenta? Inicia Sesión</a>
    </div>`;

//     const btnSignUp = document.getElementById('btnSignUp');
// btnSignUp.addEventListener('click', onNavigate('routes[window.location.pathname]'));

// window.allData = function () {
//   onNavigate('/principalPage');

// };

window.register = function () {
  const name = document.getElementById('inputName').value;
  const email = document.getElementById('inputEmail').value;
  const pass = document.getElementById('inputPassword').value;
  console.log('name', name);
  createUser(email, pass, name);
};
