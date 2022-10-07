import { Welcome } from './components/Welcome.js';
import { Register } from './components/Register.js';
import { Wall } from './components/Wall.js';

// variable que acceda al nodo en HTML llamado root

const rootDiv = document.getElementById('root');

// Variable que contendra un objeto que contiene la ruta y o que debe renderizar

export const routes = {
  '/': Welcome(), // cuando entre en '/' debe renderizar la página inicial
  '/register': Register(),
  '/wall': Wall(),
};

// recibe la ruta, despues utiliza el objeto window.history y lanza el pushState

export const onNavigate = (pathname) => {
  window.history.pushState(
    {}, // estado
    pathname, // la ruta como parte del titulo
    window.location.origin + pathname, // Dominio en el q estamos + la ruta a la q queremos ingresar
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]);
};

export const component = routes[window.location.pathname];
window.onpopstate = () => {
  rootDiv.removeChild(rootDiv.firstChild);
  rootDiv.append(component);
};
rootDiv.appendChild(component);
