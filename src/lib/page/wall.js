import { savePost } from "../../firebase/firestoreFirebase.js";

const wall = () => {
  const wallOffPublication = `
    <section id="wallOffPublication">
    <figure class="brand">
      <img src="img/Logo.png" alt="LogoCICLAPP" class="logoHorizontalWall">
      <figcaption class="textLogoWall">CICLAPP</figcaption>
    </figure>
    <aside class="introUser"> 
    <h1 class="titleWall" id="titleId"> ¡Hola, Usuario!</h1>
    <h2 class="subtitulo"> Mira lo que dice la comunidad</h2>
    </aside>
   

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

export const buttonP = () => {
  const postForm = document.getElementById('postForm')
  const buttonP = document.getElementById('PostContentButton')
  if(buttonP){
    buttonP.addEventListener('click', ()=>{
    const contenido = document.getElementById('postContent').value;
    // console.log(contenido)
    savePost(contenido);
    postForm.reset();
    // onGetPost();
  })}}
//     const allPosts = document.getElementById('allPosts');
//    async () => {
//     let html = ''
//     const querySanpshot = await getPost()
//     querySanpshot.forEach(doc => {
//         const post = doc.data()
//         html += `
//         <div>
//         <p> ${post}</p> 
//         </div>`
//     });
//     allPosts.innerHTML = html;
// }

// }
  




export default wall;

// header con logo y menu
// h1 
// LOGO Y LETRAS - se pone como template?
// <section class="viewSignIn" id="signIn"> 
// <figure class="logoSignIn">
//     <img src="img/Logo.png" alt="LogoCICLAPP" class="logoHorizontal">
//     <figcaption class="textLogo">CICLAPP</figcaption>
// </figure>
// </section>
/* <iconify-icon icon="carbon:add-filled" class="btnPost" width="44" height="44"></iconify-icon> */

//  <figure id="bodyWallOffPost">
//   <img src="img/fondoMuroCelular.png" alt="fondoMuroCelular" class="fondoMuroCelular">
// <figure class="logoWall">


// <form id="postForm">
// <label>¿Quieres compartir algo?</label>
// <textarea id="postContent" placeholder="Escribe y publica!"> </textarea>
// <button type="button" id="PostContentButton"> Publicar </button>
// </form>
// <section id="allPosts"></section>

// <section id="post"> 
// <hearder id="headerPost">
//   <i class="fa-solid fa-circle-user" class="userIcon"></i>
//   <p>Usuario</p>
//   <p>Ubicación</p>
// </hearder>
// <article id="post">
//   <p class="contentPost" id="allPosts"></p>
// </article>
// <footer id="like">
//   <i class="fa-solid fa-heart"></i>
//   <i class="fa-solid fa-comment-dots"></i>
// </footer>
// </section>


//FORMULARIO PARA ESCRIBIR COMENTARIO
 // <form id="postForm">
    // <label>¿Quieres compartir algo?</label>
    // <textarea id="postContent" placeholder="Escribe y publica!"> </textarea>
    // <button type="button" id="PostContentButton"> Publicar </button>
    // </form>