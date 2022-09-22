
import { login } from './components/login.js';
import { register } from './components/register.js';
import { wall } from './components/wall.js';

const root = document.getElementById('root');

const routes = {
  '/': login, // clave y valor
  /* '/login': login, */
  '/register': register,
  '/wall': wall,
};

// función para anexar un registro al historial del navegador (.pushState)
export const onNavigate = (pathname) => {
  window.history.pushState(/// historial de rutas a alas que ha entrado
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
  //root.append(component());// insertando el nuevo nodo  *** ERROR
  root.append(routes[window.location.pathname]());// insertando el nuevo nodo  

};

root.appendChild(routes[window.location.pathname]());
console.log(routes[window.location.pathname]());// PREGUNTAR POR QUE NO SE ACTUALIZA 