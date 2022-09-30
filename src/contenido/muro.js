import { cerrarSesion } from "../lib/firebase.js";
export const muro = () => {
  const div = document.createElement('div');
  div.class = 'contenedor-muro'
  const logo = document.createElement('img');
  logo.id = 'logo';
  logo.src = '/imagenes/Recurso 1.png';
  const salir = document.createElement('button');
  salir.id = 'Salir';
  salir.textContent = "Cerrar Sesión"

  // Crear la funcion salir en firebase.js
  // Devuelva la metodo de firebase signOut()
  //Importar en muro 
  // añadir un manejador de eventos al boton salir
  // Dentro de la funcion del addEventListener llamar a la funcion salir
  
  
  salir.addEventListener('click', () => {
      cerrarSesion().then(() => {
        console.log("hola")
      
      }).catch((error) => {
        console.error(error.message)
      })
  });
  div.append(logo, salir);

  return div;
};
