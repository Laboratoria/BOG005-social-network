// import { onNavigate } from '../main.js';

export const wall = () => {
  const containerWall = document.createElement('section');
  containerWall.classList.add('container');

  const header = document.createElement('header')
  header.classList.add('header');

  const buttonExit = document.createElement('button');
  buttonExit.classList.add('buttonIcons');
  buttonExit.id = 'btnExit';

  // const iconExit = document.createElement('img');
  // iconExit.src = 'img/exit.png';
  // iconExit.alt = 'Exit';
  // iconExit.id = 'iconExit';

  const imgTitle = document.createElement('img');
  imgTitle.src = 'img/other_enjoy-removebg-preview.png';
  imgTitle.alt = 'Logo';
  imgTitle.id = 'imgTitle';

  // const title = document.createElement('h1');
  // title.textContent = '¿Qué festividad se celebra hoy en tu ciudad?';
  // title.id = 'titleWall';

  const wallFormContainer = document.createElement('article');
  wallFormContainer.classList.add('wallForm');

  const wallPost = document.createElement('textarea');
  wallPost.classList.add('post');
  wallPost.setAttribute('type', 'text');
  wallPost.setAttribute('id', 'postWall');
  wallPost.setAttribute('rows', '4');
  wallPost.setAttribute('placeholder', ' Tu post aquí');

  const iconContainer = document.createElement('article');
  iconContainer.setAttribute('id', 'postIcon');

  const iconForm = document.createElement('article');
  iconForm.classList.add('iconForm');

  const iconSend = document.createElement('img');
  iconSend.src = 'img/send.png';
  iconSend.id = 'iconSend';

  header.append(imgTitle, buttonExit)
  wallFormContainer.append(wallPost, iconContainer)
  iconContainer.append(iconSend)
  containerWall.append(header, wallFormContainer);

  return containerWall;
};
