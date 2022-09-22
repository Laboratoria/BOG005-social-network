import { onNavigate } from "../main.js";
export const bienvenida = () => {

    const div = document.createElement('div');
    const titulo = document.createElement ('h2');
    const botonInicio = document.createElement('button');
    const logo = document.createElement ('img');
    logo.src = '/imagenes/Recurso 1.png';
    titulo.textContent = "Atrévete a explorar lo bello de nuestra geografia Colombiana, guarda tus memorias y haz que mas personas se animen a conocerlas";
    botonInicio.textContent = "Explora";
    botonInicio.addEventListener ('click',() => {
        onNavigate('/registro');
    });
    div.append(logo,titulo,botonInicio);

return div;
};
