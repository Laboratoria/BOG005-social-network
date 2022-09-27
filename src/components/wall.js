// import { onNavigate } from '../main.js';

export const wall = () => {
  const containerWall = document.createElement('section');
  containerWall.classList.add('container');

  const title = document.createElement('h1');
  title.textContent = 'We don\'t need no education, maybe because I\'m a WALL';
  title.className = 'titleWall';

  const wallForm = document.createElement('section');
  wallForm.classList.add('wallForm');

  const wallPost = document.createElement('textarea');
  wallPost.classList.add('post');
  wallPost.setAttribute('type', 'text');
  wallPost.setAttribute('id', 'postWall');
  wallPost.setAttribute('rows', '6');
  wallPost.setAttribute('placeholder', 'Tu post aquí');

  const postButton = document.createElement('button');
  postButton.textContent = 'Compartir';
  postButton.setAttribute('class', 'button-post button');

  

  containerWall.append(title, wallPost, postButton);

  return containerWall;
};
