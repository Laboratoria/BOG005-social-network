// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const bienvenida = () => {
  const contenedorBienvenida = document.createElement('div');
  contenedorBienvenida.id = 'contenedor-bienvenida'
  const titulo = document.createElement('p');
  titulo.id = 'texto-bienvenida';

  const botonInicio = document.createElement('button');
  botonInicio.id = 'explora';

  const logo = document.createElement('img');
  logo.src = '/imagenes/Recurso1.png';

  logo.id = 'logo-bienvenida';
  titulo.innerHTML = '<b>Atrévete</b> a explorar el realismo mágico de nuestra <b> geografía Colombiana.</b> <br> <b>Guarda tus memorias</b> y haz que mas personas se animen a conocerlas';
  botonInicio.textContent = 'Explora';
  botonInicio.addEventListener('click', () => {
    onNavigate('/login');
  });

  contenedorBienvenida.append( logo, titulo, botonInicio);
  return contenedorBienvenida;
};
