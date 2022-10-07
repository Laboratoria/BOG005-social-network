import { onNavigate } from '../main.js';
import { savePost, onGetPosts } from '../lib/firebase.js';

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

  const postContainer = document.createElement('header');
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

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

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
          <button class="btn-borrar">Borrar</button>
          </section>       
        </div>
      `;
      });

      newPostContainer.innerHTML = html;
    });
  });

  buttonPublish.addEventListener('click', (e) => {
    e.preventDefault();

    savePost(postArea.value);
    postArea.value = '';
  });

  div.append(header, buttonBack, postContainer, newPostContainer);

  return div;
};
