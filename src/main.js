import { welcome } from './components/welcome.js';
import { landing } from './components/landing.js';
import { register } from './components/register.js';
import { login } from './components/login.js';
import { wall } from './components/wall.js';

const divRoot = document.getElementById('root');

const routes = {
  '/': welcome,
  '/landing': landing,
  '/register': register,
  '/login': login,
  '/wall': wall,
};
// funcion para trabajar la navegacion de la app anexando un registro al historial con .pushState
export const onNavigate = (pathname, objRoutes = routes) => {
  const divRoot2 = document.getElementById('root');
  window.history.pushState({}, pathname, window.location.origin + pathname);
  //  remueve el primer nodo (evita que se superpongan las vistas)
  // divRoot2.removeChild(divRoot.firstChild);
  // divRoot2.appendChild(objRoutes[pathname]());
  divRoot2.replaceChildren(objRoutes[pathname]());
};

const component = routes[window.location.pathname];

// genera que la flecha del navegador tambien permita regresar a la pagina anterior
window.onpopstate = () => {
  //  remueve el primer nodo (evita que se superpongan las vistas)
  divRoot.removeChild(divRoot.firstChild);
  divRoot.append(component());
};
window.addEventListener('load', () => {
  onNavigate(window.location.pathname);
});
// divRoot.appendChild(component());
