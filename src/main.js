import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { bienvenida } from "./contenido/bienvenida.js";
import { muro} from "./contenido/muro.js";

import { registro } from "./contenido/registro.js";
const root = document.getElementById ('root')
console.log(bienvenida);
console.log('registro: ', registro);
const routes = {
  '/': bienvenida(),
  '/registro': registro(),
  '/muro':muro(),
  };
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  //
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]);
};
const contenidoRuta = routes[window.location.pathname];
root.appendChild(contenidoRuta);
onNavigate(window.location.pathname);

//metodo de firebase ¿que hace onAuthStateChanged?
onAuthStateChanged(getAuth(),user => {
  if (user) {
    console.log(user)
   onNavigate("/muro")
  } else {
   onNavigate("/")
  }
 });
