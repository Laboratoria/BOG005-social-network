import { login } from './components/login.js';
import { register } from './components/register.js';
import { wall } from './components/wall.js';

const routes = {
  '/': login(), // clave y valor
  '/login': login(),
  '/register': register(),
  '/wall': wall(),
};

// función para anexar un registro al historial del navegador (.pushState)
export const onNavigate = (pathname, routesList=routes) => {
  const root = document.getElementById('root');
  window.history.pushState(
    {}, // estado vacio
    pathname, // title
    window.location.origin + pathname, // URL + (Ruta)
  );
  root.replaceChildren(routesList[pathname]);
};
// Renderiza sólo ésta parte de la ruta
const component = routes[window.location.pathname];

// onpopstate, se dispara realizando una acción en el navegador como volver
window.onpopstate = () => {
  // root.removeChild(root.firstChild);// borrando el primer nodo
  // root.append(routes[window.location.pathname]());// insertando el nuevo nodo
  onNavigate(window.location.pathname);
};

window.addEventListener('load', () => onNavigate(window.location.pathname));

