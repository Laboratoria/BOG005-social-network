import { cerrarSesion } from "../lib/firebase.js";
import { onNavigate } from '../main.js';
export const muro = () => {
  const div = document.createElement('div');
  div.class = 'contenedor-muro';
  const logo = document.createElement('img');
  logo.id = 'logo';
  logo.src = '/imagenes/Recurso 1.png';
  

  const salir = document.createElement("button");
  salir.class = "salir";
  const casita = document.createElement("button");
  casita.class = "casita";
  const publicar = document.createElement("button");
  publicar.class = "publicar";
  const perfil = document.createElement("button");
  perfil.class = "perfil";


  salir.textContent = "Cerrar Sesión";
  // casita.innerHTML = "<span class="material-icons"><p>Inicio</p></span>" ;
  publicar.textContent = "Publicar";
  perfil.textContent = "Perfil";

  // Crear la funcion salir en firebase.js
  // Devuelva la metodo de firebase signOut()
  //Importar en muro 
  // añadir un manejador de eventos al boton salir
  // Dentro de la funcion del addEventListener llamar a la funcion salir
  
  
  salir.addEventListener('click', () => {
      cerrarSesion().then(() => {
        }).catch((error) => {
        console.error(error.message)
      })
  });
publicar.addEventListener('click', () => {
    onNavigate('/publicar');
  });
  div.append(logo, salir,casita,publicar,perfil);

  return div;
};
