import { cerrarSesion } from "../lib/firebase.js";
import { pubRef } from "../lib/firestore.js";
import { guardarPublicaciones } from "../lib/firestore.js";


// onSnapshot(pubRef(), (querySnapshot) => {
// console.log(querySnapshot)
// querySnapshot.forEach((element) => {
// console.log(element);
// });
// });


//Creacion de elementos o nodos en el muro
export const muro = () => {
const div = document.createElement('div');
div.id = 'contenedor-muro';
const logo = document.createElement('img');
logo.id = 'muro-logo';
logo.src = '/imagenes/Recurso 1.png';
const tituloP = document.createElement("p");
tituloP.id = "texto-publicar";
const crearPublicacion = document.createElement("textarea");
crearPublicacion.id = "contenido-publicar";
const buttonPublicar = document.createElement("button");
buttonPublicar.id = "creacionPublicar";
const buttonX = document.createElement("button");
buttonX.id = "cerrar-publicar";
const salir = document.createElement("button");
salir.id = "salir";
const casita = document.createElement("button");
casita.class = "casita";
const perfil = document.createElement("button");
perfil.class = "perfil";


salir.textContent = "Cerrar Sesión";
// casita.innerHTML = "<span class="material-icons"><p>Inicio</p></span>" ;
perfil.textContent = "Perfil";
tituloP.textContent = "Crear publicación";
crearPublicacion.setAttribute('placeholder', "¿Que has conocido hoy de Colombia?");
buttonPublicar.textContent = "Publicar";

// Crear la funcion salir en firebase.js
// Devuelva la metodo de firebase signOut()
//Importar en muro 
// añadir un manejador de eventos al boton salir
// Dentro de la funcion del addEventListener llamar a la funcion salir

const likes = [];

buttonPublicar.addEventListener('click', async () => {
  console.log('valor del input: ', crearPublicacion.value);
  guardarPublicaciones(crearPublicacion.value, likes, "xyz123")
  
   const querySnapshot = await pubRef()
  // querySnapshot.forEach( (doc) => {
  console.log(querySnapshot)
})
//   .then(() => onSnapshot(pubRef(), (querySnapshot) => {
//     
//       .catch((error) => console.error(error.message))
//     })
//   }))
// })

salir.addEventListener('click', () => {
  cerrarSesion().then(() => {
  })
    .catch((error) => {
      console.error(error.message)
    })
})

div.append(logo, salir, casita, perfil, tituloP, buttonX, crearPublicacion, buttonPublicar);
return div
};
