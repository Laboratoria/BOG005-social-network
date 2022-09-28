import { registerWithEmail } from "./../../auth.js";
import { saveData } from "./../../firestore.js";
export default () => {
  const registerSection = document.createElement("div");
  registerSection.classList.add("background2");

  const viewRegister = /*html*/ `<main class="registerContent">
      <section id="ContainerRegister">
        <article id="headerregister">
          <img src="/src/img/title.png" alt="" />
          <h1 class="registerTitle">Regístrate</h1>
          <h2>
            ¡Comparte entre amigos tus <br />
            doramas favoritos!
          </h2>
        </article>
        <section id="singin">
          <form id="singinform">
            <label for="name">Nombre</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <label for="correo">Correo electrónico</label>
            <input
              id="correo"
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
            />
            <label for="usuario">País</label>
            <input
              id="usuario"
              type="text"
              name="usuario"
              placeholder="País"
              required
            />
            <label for="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              name="password"
              required
            />
            <button type="submit" title="enviar" name="SingIn">
              Crear cuenta
            </button>
            <br />
          </form>

          <a href="">Ya tengo cuenta</a>
          
        </section>
      </section>
    </main>`;
  registerSection.innerHTML = viewRegister;

  const form = registerSection.querySelector("#singinform");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
    registerWithEmail(email, password, name);
  });

  return registerSection;
};
