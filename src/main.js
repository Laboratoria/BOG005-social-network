import { router, handlerHistorial } from './lib/routes.js';

window.addEventListener('load', ()=>{
    router(window.location.hash)
});
window.addEventListener('hashchange', ()=>{
    router(window.location.hash)
});
window.addEventListener('popstate', handlerHistorial);

