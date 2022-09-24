import { auth, getUserData } from './authenticationFirebase.js';

const displayUserData = () => {
  const getName = localStorage.getItem('Username');
  if (window.location.pathname === '/wall') {
    getUserData(auth, getName);
  }
};

export { displayUserData };

// document.querySelector('#wallOffPublication').innerHTML += `<h1 class="ejemplo">Hola ${userName}!</h1>`;
// document.querySelector('#wallOffPublication').innerHTML += `<h1 class="ejemplo">Estás registrada con correo: ${user.email}</h1>`;