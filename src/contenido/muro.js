import { cerrarSesion,getCurrentUser } from "../lib/firebase.js";
import { obtpost, borrarPost, editarPost, actualizarPost, addLike, removeLike, guardarPublicaciones } from "../lib/firestore.js";


//Creacion de elementos o nodos en el muro
export const muro = () => {

  const div = document.createElement('div');
  div.id = 'contenedor-muro';
  const header = document.createElement('header');
  header.id = 'header-muro';
  const comentario = document.createElement('div');
  comentario.id = 'comentario'
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
  const pubRecientes = document.createElement("p");
  pubRecientes.id = "pubRecientes";
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
  pubRecientes.textContent = "Publicaciones Recientes";

  // Crear la funcion salir en firebase.js
  // Devuelva la metodo de firebase signOut()
  //Importar en muro 
  // añadir un manejador de eventos al boton salir
  // Dentro de la funcion del addEventListener llamar a la funcion salir
  let editEstatus = false
  let docId = "";
  const likes = [];
  // const contLikes = 0;


  buttonPublicar.addEventListener('click', async () => {
    guardarPublicaciones(crearPublicacion.value, likes)
    obtpost(querySnapshot => {
      let elementosPost = ''
      querySnapshot.forEach(doc => {

        const info = doc.data()
        //Contiene el caja para editar, borrar y guardar el post
        let arrayString = info.likes.toString()
        elementosPost += `
        <div> 
          <input class="input" id='id-${doc.id}' value="${info.post}" disabled/>
          <button class="btn-Borrar" data-id="${doc.id}">Borrar</button>
          <button class="btn-Editar" data-id="${doc.id}">Editar</button>
          <button class="btn-Guardar" data-id="${doc.id}">Guardar</button>
          <button class="btn-Like" data-id="${doc.id}" data-like=${arrayString}>Like</button>
          <span>${info.likes.length}</span>
          </div>
       `
      })
    // });
      //limpiar textArea
      crearPublicacion.value = '';
      //Funcion Borrar Post 
      comentario.innerHTML = elementosPost
      const btnsBorrar = comentario.querySelectorAll('.btn-Borrar');
      btnsBorrar.forEach(btn => {
        btn.addEventListener("click", ({ target: { dataset } }) => {
          borrarPost(dataset.id)
        })
      })  //ok
      //likes
      const btnLike = document.querySelectorAll(".btn-Like");
      btnLike.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          console.log('id del usuario: ', getCurrentUser().uid);
          const userId = getCurrentUser().uid;
          //id de usuarios agregado al array likes, pero convertidos en string
          const userIdsLikes =  e.target.dataset.like
          if (!userIdsLikes.includes(userId)) { 
            addLike(e.target.dataset.id, userId);
          } else{ 
            removeLike(e.target.dataset.id, userId);
          }          

          
        });
      });  //ok
    
    //Funcion Editar Post
    const btnsEditar = comentario.querySelectorAll('.btn-Editar');
    btnsEditar.forEach(btn => {
      btn.addEventListener("click", async (event) => {
        docId = event.target.dataset.id
        const doc = await editarPost(docId)

        const inputEditar = comentario.querySelector(`#id-${docId}`)
        console.log(inputEditar)
        inputEditar.disabled = false
        editEstatus = true;
      })
    })  //ok
    //Funcion Guardar Post

    const btnsGuardar = comentario.querySelectorAll('.btn-Guardar');
    btnsGuardar.forEach(btn => {

      btn.addEventListener("click", (event) => {
        const inputEditar = comentario.querySelector(`#id-${event.target.dataset.id}`)
        console.log(inputEditar)
        if (editEstatus) {
          editEstatus = false;
          actualizarPost(docId, {
            post: inputEditar.value
          })
        }

      })
    }) //ok
  })  //cierra boton publicar
})
 
  salir.addEventListener('click', () => {
    cerrarSesion().then(() => {
    })
      .catch((error) => {
        console.error(error.message)
      })
  })  //ok
  window.addEventListener('DOMContentLoaded', () => {
  })   //ok

  //Agregando elementos al div padre
  header.append(logo, salir);
  comentario.append(pubRecientes);
  div.append(header, tituloP, crearPublicacion, buttonPublicar, comentario, footer);
  footer.append(casita, perfil);
  return div
}