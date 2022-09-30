
import { collection, addDoc, getDocs, onSnapshot, db, deleteDoc, doc, getDoc, updateDoc } from '../lib/firebaseIntermadiate/firestore.js'
let idPost = '';
let value= ' ';
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
          // <section id="post postForm" class="postsCards">
          // <header id="headerPost">
          //   <i class="fa-solid fa-circle-user" class="userIcon"></i>
          //   <div class="contentUserPost">
          //   <p class="userTitleName">Usuario</p>
          //   <p class="location">Ubicación</p>
          //   </div>
          // </header>
          // <article id="post">
          //   <p class="contentPost" id="allPosts">${doc.data().description}</p>
          // </article>
          // <div id="actionContainerId" class="actionContainer">
          //   <div class="like">
          //   <i class="fa-regular fa-heart" id="heart"></i>
          //   <p>12</p>
          //   </div>
          //   <div class="delete">
          //   <button class="deletePost" id="deletePostId" data-id='${doc.id}'>
          //   <i class="fa-solid fa-trash-can"></i>
          //   </button>
          //   </div>
          //   <div>
          //   <i class="fa-regular fa-pen-to-square"></i>
          //   </div>
          // </div>
          // </section>`;
        })
        //console.log(document.querySelectorAll('.deletePost').length);
      }
    }
  })
}

const getOnePost = (dataid) => {
  console.log(dataid)
 return getDoc(doc(db, 'Posts', dataid)).then((res) => {
    // console.log('id del post', res.id)
    // console.log('se resuelve la promesa', res)
    //console.log('buscando el mensaje', res.data().description)
    const inputPost = document.getElementById('postContent')
    inputPost.value = res.data().description;
    value =res.data().description;
    const idPostEdit = res.id;
    // return idPostEdit;
  })
  // console.log('res editar: ', res);
  // console.log(getDoc(doc(db, 'Posts', dataid)));
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
          getOnePost(event.currentTarget.getAttribute('data-id')).then(()=>console.log("ok gop")).catch(()=> console.log("Puras fallas gop"))
          // console.log(getOnePost(event.currentTarget.getAttribute('data-id')));
         status = false;
         idPost = event.currentTarget.getAttribute('data-id');

        })
      });
    }
  })
};

const updatePost = (id, newPost) => {
  
  console.log(newPost)
 return updateDoc(doc(db, 'Posts', id), newPost)

}

const buttonP = () => {
 const postForm = document.getElementById('postForm')
  const buttonP = document.getElementById('PostContentButton')

  if (buttonP) {

    buttonP.addEventListener('click', () => {
      const contenido = document.getElementById('postContent').value;
      // console.log(buttonP.textContent);
     console.log("Ok")
      if (status) {
        savePost(contenido);
    
       console.log(updatePost);
    status= true;

      } else {
        // console.log(idPost, 'PROBANDO EL ID');
        // console.log(value, 'VALOR DEL INPUT');
        const inputPost = document.getElementById('postContent')
      updatePost(idPost, {
        description : inputPost.value
      }).then(()=>console.log("Se actulizooo")).catch(()=> console.log("Puras fallas"))

    
       
      }
      

      postForm.reset();
    })
  }
}

export { savePost, getPost, onGetPost, getOnePost, updatePost, buttonP }
//ICONO CORAZON RELLENO
// <i class="fa-solid fa-heart" id="heart"></i>