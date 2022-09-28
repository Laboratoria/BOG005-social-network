//import { router, handlerHistorial } from './lib/routes.js';
import { router, historyHandler, eventHandler } from './lib/routes.js';
//import { eventButtonContinue } from './lib/page/signIn.js';
//import { eventButtonContinue } from './firebase/authenticationFirebase.js';

window.addEventListener('load', ()=>{
    router(window.location.hash)
    eventHandler()
    //eventButtonContinue();
});



window.addEventListener('hashchange', ()=>{
    router(window.location.hash)
    eventHandler()
});
window.addEventListener('popstate', historyHandler);
