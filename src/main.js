import { iniciarSesion } from './components/login.js';

document.getElementById('root').innerHTML = iniciarSesion().outerHTML;
