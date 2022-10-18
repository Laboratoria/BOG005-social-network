// Este es el punto de entrada de tu aplicacion
import home from "./lib/views/home.js";
import { changeRoute } from "./lib/router.js";

const init = () => {
  document.getElementById("content").appendChild(home());
  changeRoute(window.location.hash);
  window.addEventListener("hashchange", () => {
    changeRoute(window.location.hash);
  });
};
window.addEventListener("load", init);
