export const signIn = ` 
      <picture>
        <img id="logo" src="./images/logo2.png" alt="logo">
      </picture>
      <div class="form-container-signIn">
        <form class="formContainer">
          <input class="inputForm" type="email" placeholder="Email" id="inputEmail">
          <input class="inputForm" type="password" placeholder="Contraseña" id="inputPassword">
          <button class="btnSignIn" id="btnSignIn">Iniciar Sesión</button>
          
          <div class="optionSignIn">
          <hr>
          <p>o</p>
          <hr>
          </div>
          
          <button class="btnGoogle" id="btnGoogle" type="submit"><img src="./images/google.png">Continuar con
            Google</button>
        </form>
        <a href="/signUp" class="linkSign" onclick="onNavigate()">No tienes una cuenta? Registrate</a>
      </div>`;
