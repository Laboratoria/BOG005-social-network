import { registerWithEmail } from "./../../auth.js";
import { saveData } from "./../../firestore.js";
export default () => {
  const registerSection = document.createElement("div");

  const viewRegister = `
    <main>
    <section id="contenedor">

    <article id="contenedorcentrado">
        <section id="singin">
        <h1>SingIn</h1>
            <form id="singinform">

            <label for="name">Name</label>
                <input id="name" type="text" name="name" placeholder="Name" required>
                <label for="usuario">Usuario</label>
                <input id="usuario" type="email" name="email" placeholder="Usuario" required>
                <label for="password">Contraseña</label>
                <input id="password" type="password" placeholder="Contraseña" name="password" required>
                <button type="submit" title="SingIn" name="SingIn">Sing In</button>
            </form>

        </section>

    </article>
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
    registerWithEmail(email, password);
    saveData(email, password, name);
  });

  return registerSection;
};
