import { onNavigate } from '../main.js';
import {
  savePost, getPosts,
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

  const postContainer = document.createElement('header');
  postContainer.className = 'postContainer';

  const postArea = document.createElement('textarea');
  postArea.setAttribute('placeholder', '¿Qué opinas?');
  postArea.setAttribute('id', 'postArea');
  postArea.className = 'postArea';

  const buttonPublish = document.createElement('button');
  buttonPublish.textContent = 'Publicar';
  buttonPublish.className = 'buttonPublish';

  postContainer.append(postArea, buttonPublish);

  const buttonBack = document.createElement('button');
  buttonBack.textContent = 'Cerrar sesión';
  buttonBack.className = 'buttonBack';

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  // Escuchador boton Publicar
  window.addEventListener('DOMContentLoaded', async () => { // querySnapchot: los datos que existen en ese momento
    const querySnapchot = await getPosts();
    querySnapchot.forEach((doc) => {
      console.log(doc.data());
    });
  });

  buttonPublish.addEventListener('click', (e) => {
    e.preventDefault();

    savePost(postArea.value);

    postArea.value = '';
  });

  div.append(header, postContainer, buttonBack);

  return div;
};
