const wall = () => {
  const wallOffPublication = `
    <section id="wallOffPublication" class="wallPublication">
    <figure class="topBar">
     <div class="brand"> 
      <img src="img/logoapp.png" alt="LogoCICLAPP" class="logoHorizontalWall">
      <p class="textLogoWall" id="textLogoWallId">CICLAPP</p>
    </div>
    <a href="#signIn" class="loginButtonRegister1" id="loginButtonIdWall" autofocus="autofocus">Regístrate</a>
    <button class="exitButtonClass" id="exitButtonId">
    <i class="ri-logout-box-r-fill"></i>
    </button>
    </figure>
    <div class="scroll"> 
    <aside class="introUser"> 
    <h1 class="titleWall" id="titleId"> </h1>
    <h2 class="subtitulo">Mira lo que dice la comunidad.  </h2>
   
    </aside>
    <form id="postForm" class="shareForm">
    <textarea id="postContent" class="textarea" placeholder="¿Quieres compartir algo?"></textarea>
    <button type="button" id="PostContentButton" class="shareFormButton"> Publicar </button>
    </form>
    <section id="postsContainerId" class="postsContainer">
    </div>
    </section>
</section>`;
return wallOffPublication;
};

export { wall };
