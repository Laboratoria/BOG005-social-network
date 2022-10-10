import { guardarPublicaciones} from "../lib/firestore.js"
import { onNavigate } from "../main.js";
export const publicar = () => {
const div = document.createElement("div");
div.id = "contenedor-publicar";
const ctntex = document.createElement('section');
div.id = 'ctntex';
const  tituloP = document.createElement("p");
tituloP.id = "texto-publicar";
const crearPublicacion = document.createElement("textarea");
crearPublicacion.id = "contenido-publicar";
const buttonPublicar = document.createElement("button");
buttonPublicar.id = "cerrar-publicar";
const buttonX = document.createElement("button");
buttonX.id = "cerrar-publicar";


tituloP.textContent = "Crear publicación";
crearPublicacion.setAttribute('placeholder', "¿Que has conocido hoy de Colombia?");
buttonPublicar.textContent="Publicar"

const likes = []

buttonPublicar.addEventListener('click', () => {
  console.log('valor del input: ', crearPublicacion.value);
 guardarPublicaciones(crearPublicacion.value, likes, "xyz123")
 .then(()=>onNavigate("/muro"))
 .catch((error)=> console.error(error.message))
 

 })
div.append(tituloP, buttonX,crearPublicacion, buttonPublicar);
return div;

}