import { loginWithEmail, signInWithGoogle } from "../../auth.js";

export default () => {
  const homeSection = document.createElement("div");
  homeSection.classList.add("background");

  const viewHome = /*html*/ `<section class="container">
      <figure>
        <img
          alt="Logotipo de MovieManía"
          class="titleImg"
          src="img/title.png"
        />
      </figure>
      <article>
        <h2 class="textLandingPage">
          ¡Comparte entre amigos tus  doramas favoritos!

        </h2>
      </article>
      <form id="form">
       

        <input type="email" name="email" placeholder="Correo" class="inputMail" required/>
        <input type="password" name="password" placeholder="Contraseña" class="inputPassword" required/>
        
        <button class="loginButton"><h4>Ingresar</h4></button>
         <a class="googleButton">
          <img
            alt="Logo de google gmail"
            class="googleImg"
            src="img/google.png"
          />
          <h4 class="googleText">Ingresa con Google</h4>
        </a>
        <a href="#register" class="registerButton"><h4>Regístrate</h4></a>
      </form>
    </section>
    <figure class="imgContainer">
        <img src="img/tvs.png" alt="Imagen de televisores" />
    </figure>
    `;

  homeSection.innerHTML = viewHome;

  const form = homeSection.querySelector("#form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    loginWithEmail(email, password);
  });

  const googleButton = homeSection.querySelector(".googleButton");
  googleButton.addEventListener("click", (e) => {
    signInWithGoogle();
  });
  return homeSection;
};
