import { bienvenida } from "./contenido/bienvenida.js";
import { login } from "./contenido/login.js";
import { registro } from "./contenido/registro.js";
const root = document.getElementById ('root')
console.log(bienvenida);
console.log('registro: ', registro);
const routes = {
  '/': bienvenida(),
  '/registro': registro(),
  '/login':login(),
  };
export const onNavigate = (pathname) => {
    window.history.pushState (
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
// onNavigate(window.location.pathname);
