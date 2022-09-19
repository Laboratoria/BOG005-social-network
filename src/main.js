import { bienvenida } from "./contenido/bienvenida.js";
import { registro } from "./contenido/registro.js";
const root = document.getElementById ('root')
const routes = {
    '/':bienvenida,
    '/registro':registro,
};
export const onNavigate = (pathname) => {
    window.history.pushState (
        {},
        pathname,
        window.location.origin + pathname,
    );
    root.appendChild(routes[pathname]());
};
const contenidoRuta = routes[window.location.pathname];
root.appendChild(contenidoRuta());
