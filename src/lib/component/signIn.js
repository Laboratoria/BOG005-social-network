/* eslint-disable import/no-cycle */
import { onNavigate } from '../../main.js';

export const signIn = ` 
      <picture>
        <img id="logo" src="./images/logo2.png" alt="logo">
      </picture>
      <div class="form-container-signIn">
        <form class="formContainer">
          <input class="inputForm" type="email" placeholder="Email" id="inputEmail">
          <input class="inputForm" type="password" placeholder="Contraseña" id="inputPassword">
          </form>
          <div>
          <button class="btnSignIn" id="btnSignIn" onclick="allData()" >Iniciar Sesión</button>
          
          <div class="optionSignIn">
          <hr>
          <p>o</p>
          <hr>
          </div>
          
          <button class="btnGoogle" id="btnGoogle" type="submit"><img src="./images/google.png">Continuar con
            Google</button>
            </div>
        <a href="/signUp" class="linkSign" onclick="onNavigate()">No tienes una cuenta? Registrate</a>
      </div>`;

// const btnSignIn = document.getElementById('btnSignIn');
// console.log(btnSignIn);
// // btnSignIn.addEventListener('click', onNavigate('/principalPage'));

window.allData = function () {
  onNavigate('/principalPage');
};
