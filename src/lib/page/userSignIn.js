import { auth, signInFirebase } from '../../firebase/authenticationFirebase.js';

const userSignIn = () => {
  const viewUserSignIn = `
  <figure class="logoSignIn">
  <img src="img/Logo.png" alt="LogoCICLAPP" class="logoHorizontal">
  <figcaption class="textLogo">CICLAPP</figcaption>
  </figure>

  <form class="formSignIn">
  <article class="itemsInput">
    <label for="user" id="emailLabelSi">Correo</label>
    <input type="text" id="userSi" placeholder="Ingresa tu correo">
    <p class="errorMessageEmail" id="errorMessageEmailId"></p>
  </article>
  <article class="itemsInput">
    <label for="password" id="passwordLabelSi" >Contraseña</label>
    <input type="password" id="passwordSi" placeholder="Ingresa tu contraseña">
    <p class="errorMessagePassword" id="errorMessagePasswordId"></p>
    </article>
    <p class="o">- O -</p>

    <button type="button" class="googleSignIn" id="googleButtons">
    <img src="img/logo_google.svg" alt="GoogleIcon" class="GoogleIcon">
    <span>Inicia Sesion con Google</span>
    </button>

    <button type="submit" id="submitContinue" class="submitSignIn">Continuar</button>

    <a href="#signIn" id="goToRegisterId" class="continue userRegister">¿No tienes una cuenta? Registrate</a>
  </form>`;

  //return viewUserSignIn;
  const loginContainer = document.createElement('section');
  loginContainer.setAttribute('class', 'viewUserSignIn')
  loginContainer.innerHTML = viewUserSignIn

  loginContainer.querySelector('#submitContinue').addEventListener('click',(e)=> {
    e.preventDefault()
    const email = document.querySelector('#userSi').value;
    const password = document.querySelector('#passwordSi').value;
    const result = signInFirebase(auth, email, password)
    result.then((userCredential) => {
      if (userCredential) {
        const greetingUser = document.getElementById('greetingUserId');
        if (greetingUser) {
          greetingUser.innerHTML = '';
        }
        window.location.href = '#wall';
      }
    })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
        const errorMessageEmail = document.querySelector("#errorMessageEmailId")
        const errorPassWord = document.querySelector("#errorMessagePasswordId")
        const contentInputEmail = document.querySelector("#emailLabelSi")
        const contentInputPassword = document.querySelector("#passwordLabelSi")
        if (errorCode === 'auth/invalid-email'){
          errorMessageEmail.textContent = 'Correo inválido';
          contentInputEmail.style.color = "#F56F6F";
          contentInputPassword.style.color = "#FFFFFF";
        } else if (errorCode === 'auth/user-not-found'){
          errorMessageEmail.textContent = 'Correo no encontrado';
          contentInputEmail.style.color = "#F56F6F";
          contentInputPassword.style.color = "#FFFFFF";
        } else if (errorCode === 'auth/wrong-password'){
          errorPassWord.textContent = 'Error en password'
          errorMessageEmail.style.display = "none"
          contentInputPassword.style.color = "#F56F6F";
          contentInputEmail.style.color = "#FFFFFF";
        }
        const errorMessage = error.message;
      });
  })

  return loginContainer;
};

export default userSignIn;

/* <p>- O -</p>
<a href="#">Registrate con Google</a>
<button type="button" id="submitContinue">Continuar</button> */