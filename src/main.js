// Este es el punto de entrada de tu aplicacion
import router from './lib/routes.js';
import eventButtonSignIn from './lib/utils/eventButtonSignIn.js';
import eventButtonContinue from './lib/utils/eventButtonContinue.js';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
window.addEventListener('load', eventButtonSignIn);

window.addEventListener('load', () => {
  setTimeout(() => {
    eventButtonContinue();
  }, 2000);
});

  // window.addEventListener('DOMContentLoaded', () => {
    // setTimeout(() => {
      // eventButtonContinue();
    // }, 2000);
// });
