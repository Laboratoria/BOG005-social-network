import { signOutUser } from "../../auth.js";
import { subirImagenAlFirebase } from "../../storage.js";
import { saveDataPosts, getPosts } from "./../../firestore.js";

export default () => {
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
              <li><a class="signOut">Cerrar Cesión</a></li>
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
                  <button type="submit" class="btnUploadImage">Subir Archivo</button>
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

  abrir.addEventListener("click", () => {
    console.log("click");
    modalC.style.display = "block";
    modal.style.display = "block";
  });

  cerrar.addEventListener("click", () => {
    modalC.style.display = "none";
    modal.style.display = "none";
  });

  const signOutButton = feedSection.querySelector(".signOut");
  signOutButton.addEventListener("click", (e) => {
    signOutUser();
  });

  window.onload = imageUp;
  //Boton subir archivo
  function imageUp() {
    const inputUp = feedSection.querySelector("#fichero");
    inputUp.addEventListener("change", subirImagenAlFirebase, false);
    storageRef = firebase.storage().ref();
  }

  const formModal = feedSection.querySelector(".modal-textos");
  formModal.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("newPostTitle");
    const description = formData.get("newPostText");
    saveDataPosts(title, description);
    cerrar.click();
  });

  function showPostsOnFeed() {
    // Guardamos los datos de los posts en una variable
    let documents = [];
    getPosts().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        documents.push(doc.data());
      });
      let everyPosts = "";
      for (let i = 0; i < documents.length; i++) {
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
              <h1 class="nameUser">María</h1>
           </div>
           <div class="postText">
               <h2>${documents[i].title}</h2>
               <figure class="postImgC">
                <img
                 alt="Foto del usuario"
                 class="postImg"
                 src="img/dany.webp"
                />
               </figure>
               <p>${documents[i].description}</p>
           </div>
          <div class="postIcons">
           <div class="like">
            <img
             alt="Like"
             class="likeImg"
             src="img/logoheart.png"
             />
             <h2>2 likes</h2>
           </div>
           <div class="otherIcons">
            <i class="fi fi-rr-pencil"></i>
            <i class="fi fi-rs-trash"></i>
           </div>
          </div>
      </div>`;
      }
      feedSection.querySelector(".postsContainer").innerHTML = everyPosts;
    });
  }

  showPostsOnFeed();

  // Ponemos un evento al botón de "subir archivo"
  const submitButton = feedSection.querySelector(".btnUploadImage");
  submitButton.addEventListener("click", showPostsOnFeed);

  return feedSection;
};
