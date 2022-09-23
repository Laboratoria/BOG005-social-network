// Este es el punto de entrada de tu aplicacion
// este era el main

// import { myFunction } from './lib/index.js';

// myFunction();

import { signIn } from './lib/component/signIn.js';
import { signUp } from './lib/component/signUp.js';
import { principalPage } from './lib/component/principalPage.js';

const routes = {
  '/': signIn,
  '/signUp': signUp,
  '/principalPage': principalPage,
};
const rootDiv = document.getElementById('root');

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
};

// console.log(window.location.pathname);
rootDiv.innerHTML = routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

// const btnSignUp = document.getElementById('btnSignUp');
// btnSignUp.addEventListener('click', onNavigate('routes[window.location.pathname]'));

// const btnSignIn = document.getElementById('btnSignIn');
// btnSignIn.addEventListener('click', onNavigate('/principalPage'));
