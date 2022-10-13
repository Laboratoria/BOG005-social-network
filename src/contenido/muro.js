
import { cerrarSesion } from "../lib/firebase.js";
import { obtpost, borrarPost, editarPost } from "../lib/firestore.js";
import { guardarPublicaciones } from "../lib/firestore.js";
 


// onSnapshot(pubRef(), (querySnapshot) => {
//   // console.log(querySnapshot)
//   querySnapshot.forEach((element) => {
//     console.log(element);
//   });


//Creacion de elementos o nodos en el muro
export const muro = () => {
  let editEstatus = false
  const div = document.createElement('div');
  div.id = 'contenedor-muro';
  const header = document.createElement('header');
  header.id = 'header-muro';
  const comentario = document.createElement('div');
  comentario.id = 'comentario'
  const divPost = document.createElement('div');
  divPost.id = 'divPost'
  const footer = document.createElement('footer')
  footer.id = "footer"
  const logo = document.createElement('img');
  logo.id = 'muro-logo';
  logo.src = '/imagenes/Recurso 1.png';
  const tituloP = document.createElement("p");
  tituloP.id = "texto-publicar";
  const crearPublicacion = document.createElement("textarea");
  crearPublicacion.id = "crearPublicacion";
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
  let formularioPub = ""
  formularioPub += `
  <form id = "form-pub">
    <input type = "text" placeholder = "Lugar" id = "titulo-pub" >
    <textarea id= "contenido-publicar" rows=3 placeholder = "¿Que has conocido hoy de Colombia?"
  </form>
  `

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
    obtpost((querySnapshot => {
      //Funcion Borrar Post 
      let elementosPost = ''
      querySnapshot.forEach(doc => {
        const info = doc.data()
        elementosPost += `
        <div> 
          <div>${info.post}</div>
          <button class="btn-Borrar" data-id="${doc.id}">Borrar</button>
          <button class="btn-Editar" data-id="${doc.id}">Editar</button>
          </div>
     `
      })
    
      comentario.innerHTML = elementosPost
      const btnsBorrar = comentario.querySelectorAll('.btn-Borrar');
      btnsBorrar.forEach(btn => {
        btn.addEventListener("click", ({ target: { dataset } }) => {
          borrarPost(dataset.id)
        })
      })
      const btnsEditar = comentario.querySelectorAll('.btn-Editar');
      btnsEditar.forEach(btn => {
        btn.addEventListener("click", async(event) => {
          const doc = await editarPost(event.target.dataset.id)
          const inf = doc.data()
          ['crearPublicacion'].value
          editEstatus = true;
        })
      })
    }))
    comentario.addEventListener("submit",(e)=>{
      e.preventDefault();
      const guardarComentario = comentario["crearPublicacion"];
      guardarPublicaciones(post.value);
      comentario.reset();
    })
  })






  salir.addEventListener('click', () => {
    cerrarSesion().then(() => {
    })
      .catch((error) => {
        console.error(error.message)
      })
  })

window.addEventListener('DOMContentLoaded',() => {

})







header.append(logo, salir);
comentario.append(crearPublicacion, tituloP, buttonX, buttonPublicar, divPost);
div.append(header, comentario, footer);
footer.append(casita, perfil);
return div
};
