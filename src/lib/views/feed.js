export default () => {
  const feedSection = document.createElement("div");
  feedSection.classList.add("feed");

  const viewFeed = ` 
  <header class="header">
    <div class="logo">
      <img src="./img/MARCA.png" alt="Logo de la marca">
      <div class="search-bar">  
        <input type="search" name="search" placeholder="Busca tu serie favorita" class="src"> 
      </div>
    </div>
  <nav>
      <ul class="nav-links">
        <li><a href="#">Nuevo Post</a></li>
        <li><a href="#">Mi Blog</a></li>
  </ul>
  </nav>

  <a onclick="openNav()" class="menu" href="#"> <button> Menú </button></a>

  <div class="overlay" id="mobile-menu">
      <a onclick="closeNav()" href="" class="close">&times;</a> 
      <div class="overlay-content">
        <a href="#">Nuevo Post</a>
        <a href="#">Mi Blog</a>
      </div> 
  </div>

  </header>


  <!-- Modal Post -->

<div id="modalPost" class="modal modal-registro">
    <div class="modal-content">
        <div class="container">
            <div class="row">
                <div class="col s12 m6 registro-bienvenida">
                    <h4>Realiza una publicación</h4>
                    <div class="registro-bienvenida-texto">
                        Publica un video, imagen o comentario interesante para la comunidad
                    </div>
                    <span>Comparte ahora</span>
                </div>
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
                    <div class="div-btnInicioSesion">
                        <a id="btnRegistroPost" class="btn waves-effect waves-light">Publicar <i class="material-icons left">create</i></a>
                    </div>                      
                </div>
            </div>
        </div>
    </div>
</div>

        `;

  feedSection.innerHTML = viewFeed;
  return feedSection;
};

