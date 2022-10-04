import { login } from './views/login.js';
import { register } from './views/register.js';
import { wall } from './views/wall.js';
import { profile } from './views/profile.js';
import { auth, onAuthStateChanged } from './lib/firebase.js';

const routes = {
  '/': login(), // clave y valor
  '/login': login(),
  '/register': register(),
  '/wall': wall(),
  '/profile': profile(),
};

// función para anexar un registro al historial del navegador (.pushState)
const onNavigate = (pathname, routesList=routes) => {
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
  onNavigate(window.location.pathname);
};

window.addEventListener('load', () => onNavigate(window.location.pathname));

// Detectando el estado de autenticación
onAuthStateChanged(auth, (user) => { /// dice si estamos comctados/////
  if (user) {
    onNavigate('/wall')
  } else {
    console.log('No se encuentra el usuario');
    onNavigate('/')
  }
});

export { onNavigate }