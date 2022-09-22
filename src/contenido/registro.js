/* eslint-disable max-len */
// import { onNavigate } from "../main.js";
import { crearUsuario} from "../lib/firebase.js";
export const registro = () => {
  // Se crean las etiquetas
  const div = document.createElement('div');
  const logo = document.createElement('img');
  logo.id = 'logo';
  const enlaceInicio = document.createElement('a');
  enlaceInicio.id = 'enlace';
  const textoLogin = document.createElement('p');
  textoLogin.id = 'textlogin';
  const login = document.createTextNode('Iniciar Sesión');
  login.id = 'inicioSesion';
  const formulario = document.createElement('form');
  formulario.id = 'formulario';
  const correoUsuario = document.createElement('input');
  correoUsuario.id = 'correo';
  const contraseñaUsuario = document.createElement('input');
  contraseñaUsuario.id = 'contraseña';
  const buttonRegistro = document.createElement('button');
  buttonRegistro.id = 'registro';

  // Se muestran en pantalla
  textoLogin.textContent = '¿Ya tienes cuenta en Explora Colombia?';
  enlaceInicio.appendChild(login);
  enlaceInicio.title = 'Iniciar Sesión';
  enlaceInicio.href = 'https://developer.mozilla.org/es/docs/Web/API/Node/appendChild';
  document.body.appendChild(enlaceInicio);
  formulario.innerHTML = '<b>Registrate</b> para conocer más de Colombia y guarda tus momentos inolvidables.';
  correoUsuario.setAttribute('placeholder', 'Correo Electronico');
  contraseñaUsuario.setAttribute('placeholder', 'Contraseña Usuario');
  buttonRegistro.textContent = 'Regístrate';
  logo.src = '/imagenes/Recurso 1.png';

  // Agregamos elementos a nuestro div

  div.append(logo, textoLogin, enlaceInicio, formulario, correoUsuario, contraseñaUsuario, buttonRegistro);
  return div;
};
