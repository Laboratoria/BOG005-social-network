import { db } from './firestore/firestore.js';
import {auth} from './auth/authentication.js'
import { app } from './config/configFireBase.js';
import { Feed } from "../pages/feed.js";
import { Login } from "../pages/login.js";
import { Register } from "../pages/register.js";



console.log('db ', db, 'auth ', auth); 

const routes = {
  '/': Login,
  //'/login': Login,
  '/register': Register,
  '/feed': Feed,
};

const root = document.getElementById('content');
root.innerHTML = routes[window.location.pathname];
console.log(window.location);

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
};
/*
const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};

root.appendChild(component()); 
*/
/* BOTÓN ACCEDER A REGISTER*/
let activeLogin = document.getElementById("logginButton");
activeLogin.addEventListener("click", function () {
  history.pushState(null, "register", "/register")
  const root = document.getElementById('content');
  root.innerHTML = Register;
}
);

/*BOTÓN ACCEDER AL FEED*/
let activeRegister = document.getElementById("signInButton");

activeRegister.addEventListener("click", function () {
  const root = document.getElementById('content');
  root.innerHTML = Feed;
}
);