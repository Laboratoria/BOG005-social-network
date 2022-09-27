import { router, handlerHistorial } from './lib/routes.js';

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

