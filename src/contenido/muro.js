
import { cerrarSesion } from "../lib/firebase.js";
import { obtpost, borrarPost, editarPost, guardarPost, actualizarPost } from "../lib/firestore.js";
import { guardarPublicaciones } from "../lib/firestore.js";



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
  let editEstatus = false
  let docId = "";
  const likes = [];

  buttonPublicar.addEventListener('click', async () => {
    console.log('valor del input: ', crearPublicacion.value);
    guardarPublicaciones(crearPublicacion.value, likes)
    obtpost(querySnapshot => {

      let elementosPost = ''
      querySnapshot.forEach(doc => {
        const info = doc.data()
        //Contiene el caja para editar, borrar y guardar el post
        elementosPost += `
        <div> 
          <input id='id-${doc.id}' value="${info.post}" disabled/>
          <button class="btn-Borrar" data-id="${doc.id}">Borrar</button>
          <button class="btn-Editar" data-id="${doc.id}">Editar</button>
          <button class="btn-Guardar" data-id="${doc.id}">Guardar</button>
        </div>
       `
      })
      //limpiar textArea
      crearPublicacion.value = '';
      //Funcion Borrar Post 
    comentario.innerHTML = elementosPost
    const btnsBorrar = comentario.querySelectorAll('.btn-Borrar');
    btnsBorrar.forEach(btn => {
      btn.addEventListener("click", ({ target: { dataset } }) => {
        borrarPost(dataset.id)
      })
    })


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
    })
//Funcion Guardar Post

    const btnsGuardar = comentario.querySelectorAll('.btn-Guardar');
    btnsGuardar.forEach(btn => {
      
      btn.addEventListener("click", (event) => {
      //  const pos = inputEditar.value;
      const inputEditar = comentario.querySelector(`#id-${event.target.dataset.id}`) 
      console.log(inputEditar)
       if (editEstatus) {
        editEstatus = false;
        actualizarPost(docId, {
          post: inputEditar.value
        })
      }  
        
      
      
      //  inputEditar.disabled = false
        
        
    
        //     savePostFirestore(post).then(() => {
        //     }).catch((error) => {
        //       console.log(error.message)
        //     })
        //   } else { //Si se edita, entonces actualiza la información
        //     getPost();
        //     updateDataPost(id, { title: post });
        //     editStatus = false;
        //   }
        //   inputPost.value = '';
        // });
      })
    })
  })
    })
    

      // comentario.reset();

    salir.addEventListener('click', () => {
      cerrarSesion().then(() => {
      })
        .catch((error) => {
          console.error(error.message)
        })
    })
window.addEventListener('DOMContentLoaded', () => {
  })

//Agregando elementos al div padre
    header.append(logo, salir);
    comentario.append(buttonX);
    div.append(header, tituloP, crearPublicacion, buttonPublicar, comentario, footer);
    footer.append(casita, perfil);
    return div
}