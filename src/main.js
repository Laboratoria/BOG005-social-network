// Este es el punto de entrada de tu aplicacion
import {router, handlerHistorial} from './lib/routes.js';



window.addEventListener('load', router);
window.addEventListener('hashchange', router);
window.addEventListener('popstate', handlerHistorial);



