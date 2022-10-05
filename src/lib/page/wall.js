// import { savePost, getOnePost, updatePost } from "../../firebase/firestoreFirebase.js";

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
/* <footer id="menuBottom">
<button type="button" class="postButton" id="postButtonId">
<i class="fa-solid fa-circle-plus btnPost"></i>
</button>
<p>Publicar</p>
</footer> */