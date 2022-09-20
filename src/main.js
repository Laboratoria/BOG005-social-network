import { welcome } from './components/welcome.js';
import { landing } from './components/landing.js';
import { register } from './components/register.js';
import { login } from './components/login.js';

const divRoot = document.getElementById('root');

const routes = {
  '/': welcome,
  '/landing': landing,
  '/register': register,
  '/login': login,
};
// funcion para trabajar la navegacion de la app anexando un registro al historial con .pushState
export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  //  remueve el primer nodo (evita que se superpongan las vistas)
  divRoot.removeChild(divRoot.firstChild);
  divRoot.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

// genera que la flecha del navegador tambien permita regresar a la pagina anterior
window.onpopstate = () => {
  //  remueve el primer nodo (evita que se superpongan las vistas)
  divRoot.removeChild(divRoot.firstChild);
  divRoot.append(component());
};

divRoot.appendChild(component());
