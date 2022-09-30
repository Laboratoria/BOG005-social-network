
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
			<input type="text" name="" id="emailLogin" class="texField" placeholder="Email">
			<p id="gmailNotFound">gmail not found</p>
			<input type="password" pattern=".{6,}" name="" id="passwordLogin" class="texField" placeholder="Password">
			<p  id="invalidPassword">Invalid password</p>
			<button class="buttonStar" type="submit">Log in</button>
		</form>
		<button class="button googleLogin" "type="submit">Google</button>
		<p class="registrarse">¿No tienes cuenta?<a href="#register">Registrate</a></p>


	</div>;      
  
   </section>`;
<<<<<<< Updated upstream

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

            
   
=======
  const invalidPasswor = sectionLogin.querySelector('#invalidPassword');
  const gmailNotFoun = sectionLogin.querySelector('#gmailNotFound');
  const loginForm = sectionLogin.querySelector('.formDatos');
  const loginEmail = sectionLogin.querySelector('#emailLogin');
  const loginPassword = sectionLogin.querySelector('#passwordLogin');
  
  gmailNotFoun.style.display = 'none';
  invalidPasswor.style.display = 'none';
  loginForm.addEventListener('submit', () => {
    loginUser(loginEmail.value, loginPassword.value)
      .then(() => {
		
		  // console.log("token "+userCredential["user"]["accessToken"])
		    window.location.hash = '#wall';
		    loginForm.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
			 if (errorCode === 'auth/user-not-found') {
				gmailNotFoun.style.display = 'block';

			 } else if (errorCode === 'auth/wrong-password') {
				invalidPasswor.style.display = 'block';
        }
		  });
  });

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
};
>>>>>>> Stashed changes
