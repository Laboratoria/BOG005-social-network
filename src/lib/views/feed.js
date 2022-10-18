
import { signOutUser, auth, auth2} from "../../auth.js";
import { subirImagenAlFirebase } from "../../storage.js";
import { saveData, saveDataPosts, getPosts, onGetPost, getPost, updatePost, deletePost } from "./../../firestore.js";


export default () => {
  let editStatus = false;
  let id ='';
  // const userDatas = dataUser().onAuthStateChanged
  // console.log(userDatas);
  console.log('StatusEdit', editStatus);
  const feedSection = document.createElement("div");
  feedSection.classList.add("feed");

  const viewFeed = /*html*/ `
      <section id="sectionFeed">
      <header class="header">
        <nav class="navbar">
          <div class="logo">
            <img src="./img/logoheart.png" alt="Logo de la marca" />
            <a class="toggle-button">
              <span class="bar"></span>
              <span class="bar"></span>
            </a>
          </div>
          <div class="navbar-links">
            <ul>
              <li><a class="cta">Nuevo Post</a></li>
              <li><a class="signOut" id="signOut">Cerrar Sesión</a></li>
            </ul>
            <figure class="imgUserNavC">
                <img
                 alt="Foto del usuario"
                 class="imgUserNav"
                 src="img/dany.webp"
                />
            </figure>
          </div>
        </nav>
      </header>


      <div class="postsContainer">

      </div>
      <input type="file" class="btn-modal" />
      <div class="modal-container">
         <div class="modal modal-close">
        <p class="close">X</p>
        <form class="modal-textos">
          <h2>Realiza una publicación</h2>
          <p class="modal-textos-2">Publica un video, imagen o comentario</p>
          <div class="col s12 m6 registro-formulario">
            <div class="input-field">
              <input
                id="tituloNewPost"
                name="newPostTitle"
                type="text"
                maxlength="30"
                data-length="30"
                required
              />
              <label for="tituloNewPost">Titulo</label>
            </div>
            <div class="input-field">
              <textarea
                id="descripcionNewPost"
                name="newPostText"
                type="text"
                maxlength="200"
                data-length="200"
                class="materialize-textarea"
                required
              ></textarea>
              <label for="descripcionNewPost">Comentarios</label>
            </div>

            <div class="progress-panel">
              <form class="form-imagenes">
                <label for="btnUploadFile" class="btn btn-file">
                  <input
                    type="file"
                    value=""
                    id="fichero"
                    name="fichero"
                    class="hidden"
                  />
                </label>

                <div class="btnUpload">
                  <button type="submit" id='btnUploadImage' class="btnUploadImage">Subir Archivo</button>
                </div>
              </form>

              <div class="progress">
                <div class="determinate" style="width: 0%"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
`;
        feedSection.innerHTML = viewFeed;
        // MENU RESPONSIVE
        const toggleButton = feedSection.querySelector(".toggle-button");
        const navbarLinks = feedSection.querySelector(".navbar-links");


          toggleButton.addEventListener("click", () => {
          navbarLinks.classList.toggle("active");
        });

          // FUNCIONALIDAD DEL MODAL PARA ABRIR Y CERRAR
          const cerrar = feedSection.querySelector(".close");
          const abrir = feedSection.querySelector(".cta");
          const modal = feedSection.querySelector(".modal");
          const modalC = feedSection.querySelector(".modal-container");
          const formModal = feedSection.querySelector(".modal-textos");



          cerrar.addEventListener("click", () => {
            modalC.style.display = "none";
            modal.style.display = "none";
          });

          const signOutButton = feedSection.querySelector("#signOut");
          signOutButton.addEventListener("click",  signOutUser);


  function  showPostsOnFeed () {
    // onGetPost().then((querySnapshot =>{
    //   querySnapshot.forEach((doc=>{
    //     console.log(doc);
    //   }))
    // }))
    // Guardamos los datos de los posts en una variable
    let documents = [];
    getPosts().then((querySnapshot) => {
      // console.log(auth2.currentUser.uid);
      querySnapshot.forEach((doc) => {
        documents.push({
          data: doc.data(),
          id: doc.id,
          uid: auth2.currentUser.uid,
          name: auth2.currentUser.displayName,
        });
        console.log(documents);
// console.log(auth2.currentUser);
// console.log(documents[0].data.uid);
// console.log(auth2.currentUser.displayName);
      });
      let everyPosts = "";
      for (let i = 0; i < documents.length; i++) {
        const idPost = documents[i].id ?? [];
        const idUser = documents[i].data.uid
        // console.log(idUser);
        // console.log(auth2.currentUser.uid);
        everyPosts =
          everyPosts +
          `<div class="post">
            <div class="headPost">
              <figure class="imgUser">
                <img
                 alt="Foto del usuario"
                 class="ImgU"
                 src="img/dany.webp"
                />
              </figure>
              <h1 class="nameUser" >Maria</h1>
           </div>
           <div class="postText">
               <h2>${documents[i].data.title}</h2>
               <figure class="postImgC">
                <img
                 alt="Foto del usuario"
                 class="postImg"
                 src="img/dany.webp"
                />
               </figure>
               <p class='postDescription'>${documents[i].data.description}</p>
           </div>
          <div class="postIcons">
           <div class="like">
            <img
             alt="Like"
             class="${
               idPost.indexOf(auth2.currentUser.uid) !== 0
                 ? "likeImg"
                 : "unlikeImg"
             }"
             src="${
               idPost.indexOf(auth2.currentUser.uid) !== 0
                 ? "img/logoheart.png"
                 : "img/likeGris.png"
             }"/>
             <h2>2 likes</h2>
           </div>
           <div class="otherIcons">
            <buttom><i data-id="${idPost}" class="${idUser == auth2.currentUser.uid ? "fi btn-edit fi-rr-pencil" : "" }" ></i></buttom>
            <i class="${idUser == auth2.currentUser.uid ? "fi fi-rs-trash delete" : ""}" id="btn-delete" data-id="${idPost}"></i>
           </div>
          </div>
      </div>`;
      }
      feedSection.querySelector(".postsContainer").innerHTML = everyPosts;
      // postSection = everyPosts.querySelectorAll(".post")
      // postDescription = feedSection.querySelectorAll(".postDescription")

        abrir.addEventListener("click", () => {
        console.log("click");
        modalC.style.display = "block";
        modal.style.display = "block";
        formModal['tituloNewPost'].value ='';
        formModal['descripcionNewPost'].value = '';
        formModal['btnUploadImage'].innerHTML="Up";
        editStatus=false;
        console.log('editar:',editStatus);

      });

      //EDIT POSTS
      //CREAR LISTA DE BOTONES
      const buttonEdit = feedSection.querySelectorAll(".btn-edit")
      // console.log(auth2.currentUser.uid);
      buttonEdit.forEach(btn =>{

        //Por cada botón añadir un evento.. al dar click extraemos el evento
        //al dar click traerá el evento -pointerEvent
        // btn.addEventListener('click', ({target: {dataset}}) => {
        //   const doc = await getPost(dataset.id)
        //   console.log(dataset.id);

          btn.addEventListener('click', async e => {
            //buscar en la base de datos si existe el id para editar, alterar el post
          const doc = await getPost(e.target.dataset.id)
          const post = doc.data();
          console.log(post);

          modalC.style.display = "block";
          modal.style.display = "block";

          formModal['tituloNewPost'].value = post.title;
          formModal['descripcionNewPost'].value = post.description;
          editStatus = true;
          id= e.target.dataset.id
          console.log('Edit Satatus:', editStatus);
          formModal['btnUploadImage'].innerText='Update'
          // postSection['postText'].value = post.title
          // postSection['postDescription'].value = post.description
          // SIN DESTRUCTURAR:
          // console.log(e.target.dataset.id);
          // console.log(btn.getAttribute("data-id"));
          //LLAMAR AL ID:
        })
      })
      const btnsDelete = feedSection.querySelectorAll(".delete");
        btnsDelete.forEach (btn => {
        btn.addEventListener('click', event => {
          deletePost(event.target.dataset.id).then(() => location.reload())
         })
         })


  window.onload = imageUp;
  //Boton subir archivo
  function imageUp() {
    const inputUp = feedSection.querySelector("#fichero");
    inputUp.addEventListener("change", subirImagenAlFirebase, false);
    storageRef = firebase.storage().ref();
  }


  formModal.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("newPostTitle");
    const description = formData.get("newPostText");

    if (editStatus) {
      updatePost(id, {
        title: title,
        description:description,
      })
    }else{
      saveDataPosts(title, description);
      editStatus = false;
    }
    cerrar.click();
  });

    });
  }

  showPostsOnFeed();
  // Ponemos un evento al botón de "subir archivo"
  const submitButton = feedSection.querySelector(".btnUploadImage");
  submitButton.addEventListener("click", showPostsOnFeed);

  return feedSection;
};
