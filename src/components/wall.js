/* eslint-disable space-before-blocks */
/* eslint-disable no-console */
/* eslint-disable brace-style */
import { onNavigate } from '../main.js';
import {
  createPost,
  signOff,
  onGetPosts,
  deletePost,
  editPosts,
  updatePost,
} from '../firebase/connection.js';

export const wall = () => {
  const containerWall = document.createElement('section');
  containerWall.classList.add('container');

  const header = document.createElement('header');
  header.classList.add('header');

  const buttonExit = document.createElement('button');
  buttonExit.classList.add('buttonIcons');
  buttonExit.id = 'btnExit';

  const imgTitle = document.createElement('img');
  imgTitle.src = 'img/nameLogo.png';
  imgTitle.alt = 'Logo';
  imgTitle.id = 'imgTitle';

  const title = document.createElement('h1');
  title.textContent = '¿Qué festividad se celebra hoy en tu ciudad?';
  title.id = 'titleWall';

  const wallFormContainer = document.createElement('article');
  wallFormContainer.classList.add('wallForm');

  const wallPost = document.createElement('textarea');
  wallPost.classList.add('post');
  wallPost.setAttribute('type', 'text');
  wallPost.setAttribute('id', 'postWall');
  wallPost.setAttribute('rows', '4');
  wallPost.setAttribute('placeholder', ' Tu post aquí');

  const iconContainer = document.createElement('article');
  iconContainer.setAttribute('id', 'iconContainer');

  const buttonSend = document.createElement('button');
  buttonSend.classList.add('buttonIcons');
  buttonSend.id = 'btnSend';

  const postZoneContainer = document.createElement('article');
  postZoneContainer.setAttribute('id', 'postZoneContainer');

  let editStatus = false;
  let id = '';

  onGetPosts((querySnapshot) => {
    postZoneContainer.innerHTML = '';

    querySnapshot.forEach((doc) => {
      // crea un p donde quedará el post
      const postBox = document.createElement('p');
      postBox.className = 'textPost';
      postBox.textContent = doc.data().post;

      // boton de eliminar post
      const buttonTrash = document.createElement('button');
      buttonTrash.setAttribute('data-id', doc.id);
      buttonTrash.classList.add('buttonIcons');
      buttonTrash.id = 'btnTrash';

      buttonTrash.addEventListener('click', ({ target: { dataset } }) => {
        deletePost(dataset.id);
      });

      // boton de editar el post
      const buttonEdit = document.createElement('button');
      buttonEdit.setAttribute('data-id', doc.id);
      buttonEdit.classList.add('buttonIcons');
      buttonEdit.id = 'btnEdit';

      buttonEdit.addEventListener('click', async (e) => {
        const docId = await editPosts(e.target.dataset.id);
        const postText = docId.data();

        wallPost.value = postText.post;

        editStatus = true;
        id = e.target.dataset.id;
      });

      // boton de dar like al post
      const buttonHeart = document.createElement('button');
      buttonHeart.classList.add('buttonIcons');
      buttonHeart.id = 'btnHeart';

      // se pinta el post junto botones de eliminar, editar, like
      postZoneContainer.append(postBox, buttonTrash, buttonHeart, buttonEdit);
    });
  });
  // });

  buttonExit.addEventListener('click', () => {
    signOff().then(() => {
      onNavigate('/');
    }).catch((error) => {
      console.log(error, 'Algo pasó');
    });
  });

  buttonSend.addEventListener('click', () => {
    const post = wallPost.value;
    console.log(post);
    createPost(post)
      .then(() => {
        console.log('guardado');
        wallPost.value = '';
      }).catch(() => console.log('no se guardo'));

    if (!editStatus){
      createPost(post);
    } else {
      updatePost(id, { post });
      deletePost(id, { post });
      editStatus = false;
    }
  });

  header.append(imgTitle, buttonExit);
  wallFormContainer.append(wallPost, iconContainer);
  iconContainer.append(buttonSend);
  containerWall.append(header, title, wallFormContainer, postZoneContainer);

  return containerWall;
};
