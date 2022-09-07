// Este es el punto de entrada de tu aplicacion
import routes from './lib/routes.js';
import eventButtonSignIn from './lib/utils/eventButtonSignIn.js';

window.addEventListener('load', routes);
window.addEventListener('load', eventButtonSignIn);
