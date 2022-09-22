// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const bienvenida = () => {
  const div = document.createElement('div');
  const titulo = document.createElement('p');
  const botonInicio = document.createElement('button');
  botonInicio.id = 'explora';
  const logo = document.createElement('img');
  logo.src = '/imagenes/Recurso 1.png';
  titulo.innerHTML = '<b>Atrévete</b> a explorar el realismo mágico de nuestra <b> geografía Colombiana.</b> <br> <b>Guarda tus memorias</b> y haz que mas personas se animen a conocerlas';
  botonInicio.textContent = 'Explora';
  botonInicio.addEventListener('click', () => {
    onNavigate('/registro');
  });

  div.append(logo, titulo, botonInicio);
  return div;
};
