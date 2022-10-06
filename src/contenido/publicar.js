


export const publicar = () => {
const div = document.createElement("div");
div.id = "contenedor-publicar";
const  tituloP = document.createElement("p");
tituloP.id = "texto-publicar";
const crearPublicacion = document.createElement("input");
crearPublicacion.id = "contenido-publicar";
const buttonPublicar = document.createElement("button");
buttonPublicar.id = "cerrar-publicar";
const buttonX = document.createElement("button");
buttonX.id = "cerrar-publicar";


tituloP.textContent = "Crear publicación";
crearPublicacion.setAttribute("type", "textarea");
buttonPublicar.textContent="Publicar"


div.append(tituloP, buttonX,crearPublicacion, buttonPublicar);
return div;

}