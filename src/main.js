import { router, handlerHistorial } from './lib/routes.js';
import { app, analytics } from './firebase/configFirabese.js';
import { auth } from './firebase/authenticationFirebase.js';
import { getFirestore } from './firebase/firestoreFirebase.js';
import { getStorage } from './firebase/storageFirebase.js';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
window.addEventListener('popstate', handlerHistorial);

console.log('Inicialización de firebase', app);
console.log('Inicialización de analytic', analytics);
console.log('Autenticación', auth);
console.log('Firestore', getFirestore());
console.log('Storage', getStorage());
