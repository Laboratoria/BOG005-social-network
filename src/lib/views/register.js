export default () => {
  const registerSection = document.createElement("div");
  registerSection.style.width = "80vw";
  const viewRegister = `

    <main class="registercontent">
    
    <section id="contenedor">
    <article id="headerregister">
    <img src="/src/img/LOGO.png" alt="">
    <h1>Registrate</h1>
    <h2>¡Comparte entre amigos tus <br> doramas favoritos!</h2>
  </article>

        <section id="singin">

            <form id="singinform">
                <label for="name">Nombre</label>
                <input id="name" type="text" name="name" placeholder="Name" required>
                <label for="correo">Correo electrónico</label>
                <input id="correo" type="text" name="name" placeholder="Correo electrónico" required>
                <label for="usuario">Usuario</label>
                <input id="usuario" type="text" name="usuario" placeholder="Usuario" required>
                <label for="password">Contraseña</label>
                <input id="password" type="password" placeholder="Contraseña" name="password" required>
                <button type="submit" title="enviar" name="SingIn">Crear cuenta</button> <br>
            </form>
          <a href="#home"> Ya tengo cuenta</a>
          <figure class="imgLandinPageCont">
          <section id="background">
          <img alt="Cinema vector" class="imgLandinPage" src="/src/img/tvs sin fondo (2).png" />
          </section>
        </figure>
        </section>


    </section>
    </main>`;
  registerSection.innerHTML = viewRegister;
  return registerSection;
};
