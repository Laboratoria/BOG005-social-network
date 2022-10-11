import { onNavigate } from '../main.js';
import {
  savePost, onGetPosts, deletePost, getPost, updatePost, auth,
} from '../lib/firebase.js';

export const Wall = () => {
  // contenedor que almacenará los 2 botones y dará un solo return

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

  window.addEventListener('DOMContentLoaded', async () => {
    onGetPosts((querySnapshot) => {
      let html = '';

      querySnapshot.forEach((doc) => {
        const task = doc.data();
        html += `
        <div>
          <section class= "boxPost1">
          <br>          
          <section class= "postBox">
          <h5>${task.postArea}</h5>
          </section>           
          <button class="btn-borrar" data-id="${doc.id}">Borrar</button>    
          <button class="btn-editar" data-id="${doc.id}">Editar</button>      
          </section>       
        </div>
      `;
      });

      newPostContainer.innerHTML = html;
      const btnsDelete = newPostContainer.querySelectorAll('.btn-borrar');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          // eslint-disable-next-line no-restricted-globals
          const result = confirm('¿Quieres borrar esta publicación?');
          if (result === true) {
            await deletePost(e.target.dataset.id);
          }
        });
      });

      const btnsEdit = newPostContainer.querySelectorAll('.btn-editar');

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
    });
  });

  buttonPublish.addEventListener('click', (e) => {
    e.preventDefault();

    if (!editStatus) {
      savePost(postArea.value);
    } else {
      updatePost(id, { postArea: postArea.value });
      editStatus = false;
    }

    postArea.value = '';
    buttonPublish.innerText = 'Publicar';
  });

  div.append(header, postContainer, newPostContainer, buttonBack);

  return div;
};
