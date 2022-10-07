import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { getLoggedInUser } from '../firebase/authenticationFirebase.js';
import { app } from './configFirebase.js';

const db = getFirestore(app);

let idPost = '';
let value = ' ';
let status = true;
// colección crea la coleeción de datos
const savePost = (description) => {
  addDoc(collection(db, 'Posts'), { description })
}

const updatePost = (id, newPost) => {
  return updateDoc(doc(db, 'Posts', id), newPost)
}

// const getOnePost = (dataid) => {
//     return getDoc(doc(db, 'Posts', dataid)).then((res) => {
//       console.log(res)
//     console.log(res.data())
//     const inputPost = document.getElementById('postContent')
//     inputPost.value = res.data().description;
//     value = res.data().description;
//   })
// };

const getOnePost = (dataid, event) => {
  return getDoc(doc(db, 'Posts', dataid)).then((res) => {
  //   console.log(res)
  // console.log(res.data())
  if(event.target.className === 'fa-regular fa-pen-to-square') {
    const inputPost = document.getElementById('postContent')
    inputPost.value = res.data().description;
    value = res.data().description;
    console.log('estoy editando')
  }/*else if (event.target.id === event.target.dataset.id) {
    console.log('Soy un like')
    const contentLikes = document.getElementById('numberOfLikesId')
    contentLikes.textContent = 'un like'
  }*/
  
})
};


// obtenemos los post y recoremos la respuesta de firestore
const getPost = () => {
  getDocs(collection(db, "Posts")).then((res) => {
    if (window.location.pathname === '/wall') {
      const contentedor = document.getElementById('postsContainerId')
      if (contentedor) {
        res.forEach((doc) => {
          contentedor.innerHTML += `<article id="post">
          <p class="contentPost" id="allPosts">${doc.data().description}</p>
        </article>`
        })
      }
    }
  })
}


const giveALike = (idPost, likes, loggedInUser) => {
  return updateDoc(doc(db, 'Posts', idPost), {numberOfLikes:likes, user:loggedInUser})
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
        <p class="userTitleName">Usuario</p>
      </header>
      <article id="post">
        <p class="contentPost" id="allPosts">${item.data().description}</p>
      </article>
      <div id="actionContainerId" class="actionContainer">
      <div class="myLikes" id="myLikesId">
      <button class="likes" id="like${item.id}" data-id='${item.id}'>🤍​​</button>
      <p class="numberOfLikes" id="numberOfLikesId${item.id}"></p>
       </div>
       <div class="delete">
        <button class="deletePost" id="deletePost${item.id}" data-id='${item.id}'>
        <i class="fa-solid fa-trash-can"></i>
        </button>
        </div>
        <div>
        <button class="editPost" id="editPost${item.id}" data-id='${item.id}'>
        <i class="fa-regular fa-pen-to-square"></i>
        </button>
        </div>
      </div>
      </section>`;

      })
      const btnLikes = document.querySelectorAll('.likes')
      btnLikes.forEach((btnLike)=>{
        btnLike.addEventListener('click', (event)=>{
          const idPostLike = event.target.dataset.id
          const idUser = getLoggedInUser.uid
          // console.log('Id del post',idPostLike )
          // console.log('Id del usuario',idUser )
          getOnePost(idPostLike, event)
          .then(() => {
            
            const contentLikes = document.getElementById(`numberOfLikesId${idPostLike}`)
            //console.log(contentLikes)
            contentLikes.textContent = 'un like'
            
          })
          .catch(() => console.log("Error en likes"))
          
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
        savePost(contenido);
        status = true;
      } else {
        const inputPost = document.getElementById('postContent')
        updatePost(idPost, {
          description: inputPost.value
        }).then(() => console.log("Se actulizo")).catch(() => console.log("Error"))
      }
      postForm.reset();
    })
  }
  }

}





export { savePost, getPost, onGetPost, getOnePost, updatePost, buttonP }
// <button class="disLikes" data-id='${item.id}>💛​​</button>