// import { getAuth, onAuthStateChanged } from './lib/firebase.js';
import { bienvenida } from './contenido/bienvenida.js';
import { muro } from './contenido/muro.js';
import { registro } from './contenido/registro.js';
import { login } from './contenido/login.js';

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

// export const onNavigate = (pathname) => {
//   window.history.pushState(
//     {},
//     pathname,
//     window.location.origin + pathname,
//   );
//   //
//   root.removeChild(root.firstChild);
//   root.appendChild(routes[pathname]);
// };
// const contenidoRuta = routes[window.location.pathname];
// root.appendChild(contenidoRuta);
// onNavigate(window.location.pathname);

// metodo de firebase ¿que hace onAuthStateChanged?
// onAuthStateChanged(getAuth(),user => {
//   if (user) {
//    onNavigate("/muro")
//   } else {
//    onNavigate("/")
//   }
//  });
