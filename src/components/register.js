 import { createUser,saveUserInfo } from '../lib/firebase/firebaseService.js';



export const register = () => {
    const registrar = document.createElement("section");
    registrar.className="login"
    registrar.innerHTML =

      `
      <div class="container">
      <h1 class="titulo">Explorer</h1>
      <figure class="imagenDescripcion">
      <img class="imginInisioSesion" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/travel-%26-tourism-logo-design-template-c613bcb6c381ed8ead4ce8549a79edda_screen.jpg?ts=1599762630">
      <figcaption>Leyenda de imágen del contenido de la pagina</figcaption>
      </figure> 
      <form action=""  id="registerForm">
      <input type="text" name="" id="nameRegister" class="camapoTexto" placeholder="Nombre">
        <input type="text" name="" id="emailRegister" class="camapoTexto" placeholder="Correo">
        <input type="password" pattern=".{6,}" name="" id="passwordRegister" class="camapoTexto" placeholder="Contraseña">

        <button  class="button register__button-google"  "type="submit">Registrarse</button>
      </form>
       
      </div> 
       `
  const registerForm = registrar.querySelector('#registerForm');
  const registerUsername = registrar.querySelector('#nameRegister');
  const registerEmail = registrar.querySelector('#emailRegister');
  const registerPassword = registrar.querySelector('#passwordRegister');

  registerForm.addEventListener('submit', (event) => {
    
    
    createUser(registerEmail.value, registerPassword.value)
    .then((userCredential) => {
      // console.log("token "+userCredential["user"]["accessToken"])    
      const user = userCredential.user;

      saveUserInfo(registerUsername.value, user.email, user.uid);
       alert("usuario registrado correctamente")

      window.location.hash ='#wall';
    })
    .catch((error) => {
      const errorCode = error.code;
       console.log(errorCode);
     
    });
  });
          return registrar; 
       };