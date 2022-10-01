// import { savePost, getOnePost, updatePost } from "../../firebase/firestoreFirebase.js";

const wall = () => {
  const wallOffPublication = `
    <section id="wallOffPublication" class="wallPublication">
    <figure class="topBar">
     <div class="brand"> 
      <img src="img/logoapp.png" alt="LogoCICLAPP" class="logoHorizontalWall">
      <p class="textLogoWall" id="textLogoWallId">CICLAPP</p>
    </div>
    <button class="exitButtonClass" id="exitButtonId">
    <i class="ri-logout-box-r-fill"></i>
    </button>
    </figure>

    <aside class="introUser"> 
    <h1 class="titleWall" id="titleId"> </h1>
    <h2 class="subtitulo"> Mira lo que dice la comunidad</h2>
    <a href="#signIn" class="loginButtonRegister" id="loginButtonIdWall" autofocus="autofocus">Registrate</a>
    </aside>
    
    <form id="postForm" class="shareForm">
    <label>¿Quieres compartir algo?</label>
    <textarea id="postContent" placeholder="¡Escribe y publica!"> </textarea>
    <button type="button" id="PostContentButton"> Publicar </button>
    </form>
    <section id="postsContainerId" class="postsContainer">
    </section>
  <footer id="menuBottom">
    <button type="button" class="postButton" id="postButtonId">
    <i class="fa-solid fa-circle-plus btnPost"></i>
    </button>
    <p>Publicar</p>
  </footer>
</section>`;
return wallOffPublication;
};

// let status = true;

// const buttonP = () => {
//   const postForm = document.getElementById('postForm')
//   const buttonP = document.getElementById('PostContentButton')
//   if(buttonP){
//     buttonP.addEventListener('click', ()=>{
//     const contenido = document.getElementById('postContent').value;
//     const id = getOnePost(event.currentTarget.getAttribute('data-id'))
//       if(!status){
//         savePost(contenido);
//       }else{
//         updatePost(id, contenido);
//       }

    
      

//     postForm.reset();
//   })
// }}

export { wall };

// se exportaa buttonP 