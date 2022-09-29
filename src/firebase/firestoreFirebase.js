import { collection, addDoc, getDocs, onSnapshot, db, deleteDoc, doc } from '../lib/firebaseIntermadiate/firestore.js'
// colección crea la coleeción de datos
const savePost = (description) => {
  addDoc(collection(db, 'Posts'), { description })
}
// obtenemos los post y recoremos la respuesta de firestore
const getPost = () => {
  getDocs(collection(db, "Posts")).then((res) => {
    if (window.location.pathname === '/wall') {
      const contentedor = document.getElementById('postsContainerId')
      if (contentedor) {
        console.log('res: ', res);
        res.forEach((doc) => {
          // console.log('DOC',doc)
          contentedor.innerHTML += `
    <section id="post postForm" class="postsCards">
    <header id="headerPost">
      <i class="fa-solid fa-circle-user" class="userIcon"></i>
      <div class="contentUserPost">
      <p class="userTitleName">Usuario</p>
      <p class="location">Ubicación</p>
      </div>
    </header>
    <article id="post">
      <p class="contentPost" id="allPosts">${doc.data().description}</p>
    </article>
    <div id="actionContainerId" class="actionContainer">
      <div class="like">
      <i class="fa-regular fa-heart" id="heart"></i>
      <p>12</p>
      </div>
      <div>
      <i class="fa-solid fa-comment-dots" id="commet"></i>
      </div>
      <div class="delete">
      <button class="deletePost" id="deletePostId" data-id='${doc.id}'>
      <i class="fa-solid fa-trash-can"></i>
      </button>
      </div>
      <div>
      <i class="fa-regular fa-pen-to-square"></i>
      </div>
    </div>
    </section>`;
        })
        console.log(document.querySelectorAll('.deletePost').length);
      }
    }
  })
}
// se muestran en pantalla al instante
const onGetPost = () => {
  onSnapshot(collection(db, 'Posts'), (querySanpshot) => {
    const contenedor = document.getElementById('postsContainerId');
    if (contenedor) {
      contenedor.innerHTML = '';
      querySanpshot.forEach((item) => {
        contenedor.innerHTML += `
      <section id="post postForm" class="postsCards">
      <header id="headerPost">
        <i class="fa-solid fa-circle-user" class="userIcon"></i>
        <div class="contentUserPost">
        <p class="userTitleName">Usuario</p>
        <p class="location">Ubicación</p>
        </div>
      </header>
      <article id="post">
        <p class="contentPost" id="allPosts">${item.data().description}</p>
      </article>
      <div id="actionContainerId" class="actionContainer">
        <div class="like">
        <i class="fa-regular fa-heart" id="heart"></i>
        <p>12</p>
        </div>
        <div>
        <i class="fa-solid fa-comment-dots" id="commet"></i>
        </div>
        <div class="delete">
        <button class="deletePost" id="deletePost${item.id}" data-id='${item.id}'>
        <i class="fa-solid fa-trash-can"></i>
        </button>
        </div>
        <div>
        <i class="fa-regular fa-pen-to-square"></i>
        </div>
      </div>
      </section>`;
      })

      const deletePostButtons = document.querySelectorAll('.deletePost')
      deletePostButtons.forEach((deleteButton) => {
        deleteButton.addEventListener('click', (event) =>{
          deleteDoc(doc(db, 'Posts', event.currentTarget.getAttribute('data-id')))
        })
      })
    }
  })
};

export { savePost, getPost, onGetPost }
//ICONO CORAZON RELLENO
// <i class="fa-solid fa-heart" id="heart"></i>













