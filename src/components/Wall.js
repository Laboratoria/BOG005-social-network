import { onNavigate } from '../main.js';
import {
  savePost, onGetPosts, deletePost, getPost, updatePost, auth,
} from '../lib/firebase.js';
import { arrayUnion } from '../lib/utils.js';
import { showMessage } from '../lib/showMessage.js';

export const Wall = () => {
  // contenedor que almacenará los 2 botones y dará un solo return
  /* console.log(auth); */
  const div = document.createElement('div');

  div.className = 'container';

  // se crea titulo

  const header = document.createElement('header');
  header.className = 'header';

  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'Yummy Friends';
  header.append(title);

  const postContainer = document.createElement('section');
  postContainer.setAttribute('id', 'postContainer');
  postContainer.className = 'postContainer';

  const postArea = document.createElement('textarea');
  postArea.setAttribute('placeholder', '¿Qué opinas?');
  postArea.setAttribute('id', 'postArea');
  postArea.className = 'postArea';

  const buttonPublish = document.createElement('button');
  buttonPublish.textContent = 'Publicar';
  buttonPublish.className = 'buttonPublish';

  postContainer.append(postArea, buttonPublish);

  const newPostContainer = document.createElement('div');
  newPostContainer.setAttribute('id', 'tasks-container');

  const buttonBack = document.createElement('button');
  buttonBack.textContent = 'Cerrar sesión';
  buttonBack.className = 'buttonBack';

  buttonBack.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      console.log('log Out');
      onNavigate('/');
    });
  });

  let editStatus = false;
  let id = '';

  onGetPosts((querySnapshot) => {
    let html = '';
    let counterLike = 0;

    querySnapshot.forEach((doc) => {
      const task = doc.data();
      html += `
        <div>
          <section class= "boxPost1">
          <h4 class="userName" By>${task.email}</h4>
          <br>                     
          <section class= "postBox">          
          <textarea readonly="readonly">${task.postArea}</textarea>
          </section>    
          
          <section class="editAndDele"> 
          <button class="btn-like"  data-id="${doc.id}" > <i class="fa-solid fa-heart icono"></i> <p class ="counter-likes">${task.likes.length}</p> </button>             
          <button style="visibility:${task.email === auth.currentUser.email ? 'visible' : 'hidden'}"class="btn-borrar" data-id="${doc.id}">Borrar</button>     
          <button style="visibility:${task.email === auth.currentUser.email ? 'visible' : 'hidden'}"class="btn-editar" data-id="${doc.id}">Editar</button>   
          </section>                        
          </section>       
        </div>
      `;
    });

    newPostContainer.innerHTML = html;

    const btnsEdit = newPostContainer.querySelectorAll('.btn-editar');
    const btnsDelete = newPostContainer.querySelectorAll('.btn-borrar');
    /*  console.log(btnsDelete); */
    const btnsLikes = newPostContainer.querySelectorAll('.btn-like');
    const counterLikes = newPostContainer.querySelectorAll('.counter-likes');

    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const doc = await getPost(e.target.dataset.id);
        const post = doc.data(); // Trae los datos de los posts
        postArea.value = post.postArea;
        editStatus = true;
        id = doc.id;
        buttonPublish.innerText = 'Editar';
      });
    });

    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm('¿Quieres borrar esta publicación?');
        if (result === true) {
          deletePost(dataset.id);
        }
      });
    });

    btnsLikes.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        updatePost(dataset.id, { likes: arrayUnion(auth.currentUser.email) });
        counterLikes.innerHTML = '';
        // eslint-disable-next-line no-plusplus
        counterLike++;
        counterLikes.innerHTML = `${counterLike}`;
      });
    });
  });

  buttonPublish.addEventListener('click', (e) => {
    e.preventDefault();

    if (postArea.value === '') {
      showMessage('No has escrito un post aún', 'error');
      // eslint-disable-next-line no-import-assign
      savePost = false;
    }

    if (!editStatus) {
      savePost(postArea.value, auth.currentUser.email);
    } else {
      updatePost(id, { postArea: postArea.value });
      editStatus = false;
    }

    postArea.value = '';
    buttonPublish.innerText = 'Publicar';
  });

  div.append(header, buttonBack, postContainer, newPostContainer);

  return div;
};
