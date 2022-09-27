import { login } from './views/login.js';
import { register } from './views/register.js';
import { wall } from './views/wall.js';
import { profile } from './views/profile.js';

const root = document.getElementById('root');

const routes = {
  '/': login, // clave y valor
  '/login': login,
  '/register': register,
  '/wall': wall,
  '/profile': profile,
};

// función para anexar un registro al historial del navegador (.pushState)
export const onNavigate = (pathname) => {
  window.history.pushState(
    {}, // estado vacio
    pathname, // title
    window.location.origin + pathname, // URL + (Ruta)
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};
// Renderiza sólo ésta parte de la ruta
const component = routes[window.location.pathname];

// onpopstate, se dispara realizando una acción en el navegador como volver
window.onpopstate = () => {
  root.removeChild(root.firstChild);// borrando el primer nodo
  root.append(routes[window.location.pathname]());// insertando el nuevo nodo
};

root.appendChild(component());
