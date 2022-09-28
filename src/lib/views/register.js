import { registerWithEmail } from "./../../auth.js";
import { saveData } from "./../../firestore.js";
export default () => {
  const registerSection = document.createElement("div");
  registerSection.classList.add("background");

  const viewRegister = /*html*/ `<section class="registerContent">
    
          <figure>
          <img src="/src/img/title.png" alt="logo" />
          </figure>
          <article><h2>¡Únete! Comparte  lo que amas. <br> Conoce a otros. Vive la experiencia </h2></article>

        <section class="singin">
        <h1>Regístrate</h1>
          <form id="singInForm">
            
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Nombre"
              required
            />
            
            <input
              id="correo"
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
            />
            
            <input
              id="usuario"
              type="text"
              name="usuario"
              placeholder="País"
              required
            />
           
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              name="password"
              required
            />
          <div class= "submitContainer">
          <button type="submit" title="enviar" name="SingIn">
          Crear cuenta
        </button>
        </div>
        </form>
          <a href="">Ya tengo cuenta</a>
      </section>

    </section>`;
  registerSection.innerHTML = viewRegister;

  const form = registerSection.querySelector("#singInForm");

  form.addEventListener("submit", (e) => {
    console.log("hola");
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
    registerWithEmail(email, password, name);
  });

  return registerSection;
};
