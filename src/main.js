import { Feed } from "../pages/feed.js";
import { Login } from "../pages/login.js";
import { Register } from "../pages/register.js";
import { createEmail } from "./auth/authentication.js";

const routes = {
  '/': Login,
  '/register': Register,
  '/feed': Feed,
};

/* PERMITE QUE LAS RUTAS MANIPULEN EN DOM CON LOS LITERAL TEMPLATES GUARDADOS EN PAGES */
const root = document.getElementById('root');
root.innerHTML = routes[window.location.pathname];


/* GENERAR RUTAS EN URLS*/

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    '',
    window.location.origin + pathname,
  );
};

let activeLogin = document.getElementById("logginButton");

/*ACCEDER A LA PÁGINA REGISTRATE*/

/*Botón regístrate*/
let activeRegister = document.getElementById("linkRegister");
if (activeRegister) {
  activeRegister.addEventListener("click", () => {
    history.pushState(null, "register", "/register");
    root.innerHTML = Register;
  });
}

const inputEmail = document.getElementById("emailUser");
const inputPass = document.getElementById("passWordUser");
let bottonRegister = document.getElementById("bottonRegister");

/*Botón para validar el registro*/
if (bottonRegister) {
  bottonRegister.addEventListener("click", () => {
    createEmail(inputEmail.value, inputPass.value); /* Comando de Firebase para Autenticación */
  });
}
