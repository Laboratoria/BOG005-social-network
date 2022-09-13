export default () => {
  const LoginSection = document.createElement("div");
  LoginSection.style.width = "80vw";
  LoginSection.style.background = "red";
  const viewLogin = `
     <main>
     <section id="contenedor"
     <article id="contenedorcentrado">
         <section id="login">
             <form id="loginform">
                 <label for="usuario">Usuario</label>
                 <input id="usuario" type="text" name="usuario" placeholder="Usuario" required
                 <label for="password">Contraseña</label>
                 <input id="password" type="password" placeholder="Contraseña" name="password" required
                 <button type="submit" title="Ingresar" name="Ingresar">Login</button>
             </form
         </section>
         <div id="derecho">
             <div class="titulo">
                 Bienvenido
             </div>
             <hr>
             <div class="pie-form">
                 <a href="#">¿Perdiste tu contraseña?</a>
                 <a href="#">¿No tienes Cuenta? Registrate</a>
                 <hr>
                 <a href="#">« Volver</a>
             </div>
         </div>
     </article>
 </section>
     </main>`;
  LoginSection.innerHTML = viewLogin;
  return LoginSection;
};
