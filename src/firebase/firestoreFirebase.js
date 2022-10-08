import { getFirestore, collection, addDoc, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { app } from './configFirebase.js';

const db = getFirestore(app);

let idPost = '';
let value = '';
let status = true;
// colección crea la coleeción de datos
const savePost = (description, likes) =>  addDoc(collection(db, 'Posts'), { description, likes })
const updatePost = (id, newPost) => updateDoc(doc(db, 'Posts', id), newPost)

const getOnePost = (dataid) => {
  return getDoc(doc(db, 'Posts', dataid)).then((res) => {
    const inputPost = document.getElementById('postContent')
    inputPost.value = res.data().description;
    value = res.data().description;
    console.log('estoy editando')
 })
};

// se muestran en pantalla al instante
const onGetPost = () => {
  onSnapshot(collection(db, 'Posts'), (querySanpshot) => {
    const content = document.getElementById('postsContainerId');
    if (content) {
      content.innerHTML = '';
      querySanpshot.forEach((item) => {
        const like = item.data().likes
        const displayLike = isNaN(like) ? 0: like
        content.innerHTML += `
      <section id="postForm" class="postsCards">
      <header id="headerPost">
        <i class="fa-solid fa-circle-user" class="userIcon"></i>
        <p class="userTitleName">Usuario</p>
      </header>
      <article id="post">
        <p class="contentPost" id="allPosts">${item.data().description}</p>
      </article>
    <div id="actionContainerId" class="actionContainer">
      <div class="myLikes" id="myLikesId">
        <button class="likes" id="like${item.id}" data-id='${item.id}' data-like='${displayLike}'>​​🧡​​</button>
        <p class="numberOfLikes" id="numberOfLikesId${item.id}">${displayLike}</p>
      </div>
      <div class="delete">
        <button class="deletePost" id="deletePost${item.id}" data-id='${item.id}'>
        <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
      <div class="edit">
        <button class="editPost" id="editPost${item.id}" data-id='${item.id}'>
        <i class="fa-regular fa-pen-to-square"></i>
        </button>
      </div>
    </div>
      </section>`;

      console.log(item.data().likes)
      })
       const btnLikes = document.querySelectorAll('.likes')
        btnLikes.forEach((btnLike)=>{
        btnLike.addEventListener('click', (event)=>{
          const idPostLike = event.target.dataset.id
          let like = event.target.dataset.like
         if(like == 1){
            like--
            updatePost(idPostLike, {likes:like}).then(() => console.log("Dislike")).catch(() => console.log("Error en dislike"))
          }else {
            like ++
            updatePost(idPostLike, {likes:like}).then(() => console.log("Se dió like")).catch(() => console.log("Error en like"))
         }
        })
      })

    const deletePostButtons = document.querySelectorAll('.deletePost')
      deletePostButtons.forEach((deleteButton) => {
        deleteButton.addEventListener('click', (event) => {
          deleteDoc(doc(db, 'Posts', event.currentTarget.getAttribute('data-id')))
        })
      })
      const editPostButtons = document.querySelectorAll('.editPost')
      editPostButtons.forEach((editButton) => {
        editButton.addEventListener('click', (event) => {
          console.log(event.target.className)
          getOnePost(event.currentTarget.getAttribute('data-id'), event).then(() => console.log("ok ogp")).catch(() => console.log("Error onp"))
          status = false;
          idPost = event.currentTarget.getAttribute('data-id');
        })
      });
    }
  })
};

const buttonP = (path) => {
  if (path === '/wall') {
    const postForm = document.getElementById('postForm')
    const buttonPublic = document.getElementById('PostContentButton')
  if (buttonPublic) {
    buttonPublic.addEventListener('click', () => {
      console.log('Tengo evento')
      const contenido = document.getElementById('postContent').value;
      if (status) {
        savePost(contenido, 0);
        status = true;
      } else {
        const inputPost = document.getElementById('postContent')
        updatePost(idPost, {
          description: inputPost.value
        }).then(() => console.log("Se actulizo")).catch(() => console.log("Error"))
        status = false;
      }
      postForm.reset();
    })
  }
  }
}

export { savePost, onGetPost, getOnePost, updatePost, buttonP }
