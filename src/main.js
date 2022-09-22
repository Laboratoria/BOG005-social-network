// Este es el punto de entrada de tu aplicacion
import home from "./lib/views/home.js";
import { changeRoute } from "./lib/router.js";
import { COMPONENTS } from "./index.js";

const init = () => {
  document.getElementById("content").appendChild(home());
  changeRoute(window.location.hash, COMPONENTS);
  window.addEventListener("hashchange", () => {
    changeRoute(window.location.hash, COMPONENTS);
  });
};
window.addEventListener("load", init);

// BOTON MENU HAMBURGUESA  -----------  No funciona

// const navToggle = document.querySelector(".nav-toggle");
// const navMenu = document.querySelector(".nav-menu");

// navToggle.addEventListener("click", () => {
//   navMenu.classList.toggle(".nav-menu_visible")
// });

