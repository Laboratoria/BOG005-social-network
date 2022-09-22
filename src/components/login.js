
 import {  googleSignIn,saveUserInfo,loginUser } from '../lib/firebase/firebaseService.js';

export const login = () => {
	const sectionLogin = document.createElement('section');
	sectionLogin.className = 'sectionLogin';
	sectionLogin.innerHTML = `<section class="login">
	<div class="container">
		<figure class="imagenDescripcion">
			<img class="imgLogo" src="IMG/Explore-removebg-preview.png">
			<figcaption>Leyenda de imágen del contenido de la pagina</figcaption>
		</figure>
		<form class="formDatos">
			<input type="text" name="" id="emailLogin" class="camapoTexto" placeholder="Correo">
			<input type="password" pattern=".{6,}" name="" id="paswordLogin" class="camapoTexto" placeholder="Contraseña">
			<p id="passwordhidden">las credenciales no coinciden</p>
			<button class="buttonIniciar" type="submit">Iniciar sesion</button>
		</form>
		<button class="button googleLogin" "type="submit">Google</button>
		<p class="registrarse">¿No tienes cuenta?<a href="#register">Registrate</a></p>


	</div>;      
  
   </section>`;

   const googleButt = sectionLogin.querySelector('.googleLogin');
   googleButt.addEventListener('click', () => {
	 googleSignIn()
	   .then((result) => {
		 const user = result.user;
		  window.location.hash = '#wall';
		  saveUserInfo(user.email, user.email, user.uid);
	   });
   });
	  return sectionLogin;
  
	  }

            
   