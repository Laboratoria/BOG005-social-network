const userSignIn = () => {
  const viewUserSignIn = `
  <section class="viewUserSignIn"> 
  <figure class="logoSignIn">
  <img src="img/Logo.png" alt="LogoCICLAPP" class="logoHorizontal">
  <figcaption class="textLogo">CICLAPP</figcaption>
  </figure>

  <form class="formUserSignIn">
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

    <button type="button" class="googleSignIn" id="googleButtonUserSignIn">
    <img src="img/logo_google.svg" alt="GoogleIcon" class="GoogleIcon">
    <span>Inicia Sesión con Google</span>
    </button>

    <button type="submit" id="submitContinue" class="submitSignIn">Continuar</button>

    <a href="#signIn" id="goToRegisterId" class="continue userRegister">¿No tienes una cuenta? Regístrate</a>
  </form>
  </section>`;

  return viewUserSignIn;
};

export default userSignIn;
