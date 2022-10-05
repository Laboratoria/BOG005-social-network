import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { app } from './configFirebase.js';

const db = getFirestore(app);

let idPost = '';
let value = ' ';
let status = true;
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
          contentedor.innerHTML += `<article id="post">
          <p class="contentPost" id="allPosts">${doc.data().description}</p>
        </article>`
        })
      }
    }
  })
}

const getOnePost = (dataid) => {
  console.log(dataid)
  return getDoc(doc(db, 'Posts', dataid)).then((res) => {
    const inputPost = document.getElementById('postContent')
    inputPost.value = res.data().description;
    value = res.data().description;
  })
};

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

      const deletePostButtons = document.querySelectorAll('.deletePost')
      deletePostButtons.forEach((deleteButton) => {
        deleteButton.addEventListener('click', (event) => {
          deleteDoc(doc(db, 'Posts', event.currentTarget.getAttribute('data-id')))
        })
      })

      const editPostButtons = document.querySelectorAll('.editPost')
      editPostButtons.forEach((editButton) => {
        editButton.addEventListener('click', (event) => {
          // console.log('sirve el click', event);
          getOnePost(event.currentTarget.getAttribute('data-id')).then(() => console.log("ok ogp")).catch(() => console.log("Error onp"))
          // console.log(getOnePost(event.currentTarget.getAttribute('data-id')));
          status = false;
          idPost = event.currentTarget.getAttribute('data-id');

        })
      });
    }
  })
};

const updatePost = (id, newPost) => {
  return updateDoc(doc(db, 'Posts', id), newPost)
}

const buttonP = () => {
  const postForm = document.getElementById('postForm')
  const buttonP = document.getElementById('PostContentButton')

  if (buttonP) {
    buttonP.addEventListener('click', () => {
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

export { savePost, getPost, onGetPost, getOnePost, updatePost, buttonP }
//ICONO CORAZON RELLENO
// <i class="fa-solid fa-heart" id="heart"></i>

/* <div class="like">
<i class="fa-regular fa-heart" id="heart"></i>
<p>12</p>
</div> */