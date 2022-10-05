import { router, historyHandler, eventHandler } from './lib/routes.js';

window.addEventListener('load', ()=>{
    router(window.location.hash)
    eventHandler(window.location.pathname)
});

window.addEventListener('hashchange', ()=>{
    router(window.location.hash)
    eventHandler(window.location.pathname)
});

window.addEventListener('popstate', historyHandler);
