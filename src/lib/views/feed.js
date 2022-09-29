import { signOutUser, getUser } from "../../auth.js";

export default () => {
  const feedSection = document.createElement("div");
  feedSection.classList.add("feed");

  const viewFeed = /*html*/ ` 
  <section id="sectionFeed"> 
  <header class="header">
  <nav class="navbar">
  <div class="logo">
    <img src="./img/logoheart.png" alt="Logo de la marca">
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
</div>



</nav>
</header>





<h2>AQUI VAN LOS POST</h2>
<input type="checkbox" class="btn-modal">
<div class="modal-container">
  <div class="modal modal-close">
                  <p class="close">X</p>
                  <img src="img/logoheart.png" alt="" >
                  <div class="modal-textos">
                  <h2>Realiza una publicación</h2>
                  <p class="modal-textos-2">Publica un video, imagen o comentario</p>
                  <span>Comparte ahora</span>
                  <div class="col s12 m6 registro-formulario">
                  <div class="input-field">
                      <input id="tituloNewPost" type="text" maxlength="30" data-length="30" required />
                      <label for="tituloNewPost">Titulo</label>
                  </div>
                  <div class="input-field">
                      <textarea id="descripcionNewPost" type="text"  maxlength="200" data-length="200" class="materialize-textarea" required></textarea>
                      <label for="descripcionNewPost">Descripción</label>
                      </div>
                      <div class="progress-panel">
                          <label for="btnUploadFile">Imagen</label>
                          <input type="file" value="upload" id="btnUploadFile" />
                          <div class="progress">
                              <div class="determinate" style="width: 0%"></div>
                          </div>
                      </div>
                  </div>
  </div>
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

  // const holaButton = feedSection.querySelector(".prueba");
  // holaButton.addEventListener("click", (e) => {
  //   getUser();
  // });

  return feedSection;
};
