import { onNavigate } from '../main.js';
import { signOff } from '../firebase/connection.js';

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

  const buttonTrash = document.createElement('button');
  buttonTrash.classList.add('buttonIcons');
  buttonTrash.id = 'btnTrash';

  const buttonEdit = document.createElement('button');
  buttonEdit.classList.add('buttonIcons');
  buttonEdit.id = 'btnEdit';

  const buttonHeart = document.createElement('button');
  buttonHeart.classList.add('buttonIcons');
  buttonHeart.id = 'btnHeart';

  buttonExit.addEventListener('click', () => {
    signOff().then(() => {
      onNavigate('/');
    }).catch((error) => {
      console.log(error, 'Algo pasó');
    });
  });

  header.append(imgTitle, buttonExit);
  wallFormContainer.append(wallPost, iconContainer);
  iconContainer.append(buttonSend);
  postZoneContainer.append(buttonTrash, buttonHeart, buttonEdit);
  containerWall.append(header, title, wallFormContainer, postZoneContainer);

  return containerWall;
};
