const userSignIn = () => {
  const viewUserSignIn = `
  <section class="viewUserSignIn"> 
  <figure class="logoSignIn">
  <img src="img/Logo.png" alt="LogoCICLAPP" class="logoHorizontal">
  <figcaption class="textLogo">CICLAPP</figcaption>
  </figure>

  <form class="formSignIn">
  <article class="itemsInput">
    <label for="user">Correo</label>
    <input type="text" id="userSi" placeholder="Ingresa tu correo">
  </article>
  <article class="itemsInput">
    <label for="password">Contraseña</label>
    <input type="password" id="passwordSi" placeholder="Ingresa tu contraseña">
    </article>
    <p class="o">- O -</p>

    <button type="button" class="googleSignIn" id="googleButtons">
    <img src="img/logo_google.svg" alt="GoogleIcon" class="GoogleIcon">
    <span>Inicia Sesion con Google</span>
    </button>

    <button type="submit" id="submitContinue" class="submitSignIn">Continuar</button>

    <a href="#signIn" id="goToRegisterId" class="continue userRegister">¿No tienes una cuenta? Registrate</a>
  </form>
  </section>`;

  return viewUserSignIn;
};

export default userSignIn;

/* <p>- O -</p>
<a href="#">Registrate con Google</a>
<button type="button" id="submitContinue">Continuar</button> */