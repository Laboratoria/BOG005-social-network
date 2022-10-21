
import { bienvenida } from './contenido/bienvenida.js';
import { muro } from './contenido/muro.js';
import { registro } from './contenido/registro.js';
import { login } from './contenido/login.js';
import {usuariosR} from './lib/firebase.js';
import {getAuth,  onAuthStateChanged} from './lib/firebase.js';


// const root = document.getElementById("root");
const routes = {
  '/': bienvenida(),
  '/registro': registro(),
  '/muro': muro(),
  '/login': login(),

};

export const onNavigate = (pathname, paramRoutes = routes) => {
  const root = document.getElementById('root');
  root.replaceChildren(paramRoutes[pathname]);
};
window.addEventListener('load', () => {
  onNavigate(window.location.pathname);
});

usuariosR ();

