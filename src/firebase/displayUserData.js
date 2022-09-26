import { auth, onAuthStateChanged, eventSignOut } from './authenticationFirebase.js';

const displayUserData = () => {
  if (window.location.pathname === '/wall') {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('UserCredentialFb', JSON.stringify(user.email));
        const contentGretting = document.querySelector('#wallOffPublication');
        console.log(contentGretting);
        if (contentGretting !== null) {
          contentGretting.innerHTML += `<h1 id="showUserEmailId" class="greetingUser">Usuario en sesión: ${user.email}</h1>`;
          eventSignOut();
        }
      } else {
        document.querySelector('#wallOffPublication').innerHTML += `<h1 id="showUserEmailId" class="greetingUser">Hola resgistrate en nuestra red social</h1>`;
      }
    });
  }
};

export { displayUserData };
