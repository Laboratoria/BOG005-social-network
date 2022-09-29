import { router, historyHandler, eventHandler } from './lib/routes.js';

window.addEventListener('load', ()=>{
    router(window.location.hash)
    eventHandler()
});

window.addEventListener('hashchange', ()=>{
    router(window.location.hash)
    eventHandler()
});

window.addEventListener('popstate', historyHandler);
