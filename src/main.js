import { Welcome } from './components/Welcome.js';
import { Wall } from './components/Wall.js';
import { Register } from './components/Register.js';

// variable que acceda al nodo en HTML llamado root
const root = document.getElementById('root');

// Variable que contendra un objeto que contiene la ruta y o que debe renderizar
const routes = {
  '/': Welcome, // cuando entre en '/' debe renderizar la página inicial
  '/wall': Wall,
  '/register': Register,
};
// recibe la ruta, despues utiliza el objeto window.history y lanza el pushState
export const onNavigate = (pathname) => {
  window.history.pushState(
    {}, // estado
    pathname, // la ruta como parte del titulo
    window.location.origin + pathname, // Dominio en el q estamos + la ruta a la q queremos ingresar
  );
  root.removeChild(root.firstChild); // Borra lo que hay e inserta lo nuevo
  root.appendChild(routes[pathname]()); // Linea que inserta lo nuevo
};

// La ruta esta entrando a partir del window.location.pathname
const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};
root.appendChild(component());
