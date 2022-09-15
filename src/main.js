import { router, handlerHistorial } from './lib/routes.js';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
window.addEventListener('popstate', handlerHistorial);
