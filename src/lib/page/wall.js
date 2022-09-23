import { savePost } from "../../firebase/firestoreFirebase.js";

const wall = () => {
  const wallOffPublication = `<section id="wallOffPublication">
  <h1 class="title" id="titleId"> ¡Hola, Usuario!</h1> 
  <h2 class="subtitulo"> Mira lo que dice la comunidad</h2>


  <form id="postForm">
  <label>¿Quieres compartir algo?</label>
  <textarea id="postContent" placeholder="Escribe y publica!"> </textarea>
  <button type="button" id="PostContentButton"> Publicar </button>
  </form>
  <section id="allPosts"></section>

  <footer id="menuBottom"> 
    <button type="button" class="postButton" id="postButtonId">
      <iconify-icon icon="carbon:add-filled" width="55" height="55"></iconify-icon>
      <p>Publicar</p>
    </button>
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

