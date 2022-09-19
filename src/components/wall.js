import { onNavigate } from '../main.js';
import { loginOut } from '../lib/index.js';
export const wall = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = 'Welcome to the Wall';

  const button = document.createElement('button');
  button.textContent = 'Cerrar sesión';

  button.addEventListener('click', () => {
    onNavigate('/login');
  });


  loginOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  div.append(title, button);
  return div;

};
