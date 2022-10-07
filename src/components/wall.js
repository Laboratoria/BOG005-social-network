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
  // '<i class="fa-solid fa-paper-plane-top"></i>'
  const icon = document.createElement('img');
  // icon.className = 'sendIcon';
  // icon.classList.add('fa-sharp', 'fa-solid', 'fa-paper-plane-top');
  // icon.alt = 'arrow';
  // <img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/000000/external-send-user-interface-kmg-design-glyph-kmg-design.png"/>
  icon.src = 'https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/F16CA4/external-send-user-interface-kmg-design-glyph-kmg-design.png';

  const postButton = document.createElement('button');
  postButton.textContent = 'Compartir';
  postButton.setAttribute('class', 'button-post button');

  containerWall.append(title, wallPost, postButton, icon);

  return containerWall;
};
