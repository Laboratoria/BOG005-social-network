import { router, handlerHistorial } from './lib/routes.js';
import { getPost } from './firebase/firestoreFirebase.js'
// import { app, analytics } from './firebase/configFirabese.js';
// import { auth } from './firebase/authenticationFirebase.js';
// import { getFirestore } from './firebase/firestoreFirebase.js';
// import { getStorage } from './firebase/storageFirebase.js';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
window.addEventListener('popstate', handlerHistorial);

// const allPosts = document.getElementById('allPosts');
// window.addEventListener('DOMContentLoaded', async () => {
//     let html = ''
//     const querySanpshot = await getPost()
//     querySanpshot.forEach(doc => {
//         const post = doc.data()
//         html += `
//         <div>
//         <p> ${post}</p> 
//         </div>`
//     });
//     allPosts.innerHTML = html;
// })

// console.log('Inicialización de firebase', app);
// console.log('Inicialización de analytic', analytics);
// console.log('Autenticación', auth);
// console.log('Firestore', getFirestore());
// console.log('Storage', getStorage());
