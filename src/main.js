// Este es el punto de entrada de tu aplicacion
import { iniciarSesion } from './components/login.js';
//import { register } from './components/register.js';
document.getElementById("root").innerHTML=iniciarSesion().outerHTML;

//document.getElementById("root").innerHTML=register().outerHTML;

