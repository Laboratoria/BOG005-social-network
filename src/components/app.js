import { iniciarSesion } from './login.js';
import { register } from './register.js';
const routes = {
  '/' : iniciarSesion,
  '/register' : register,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];
