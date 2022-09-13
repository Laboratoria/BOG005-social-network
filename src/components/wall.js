// import { createPost } from '../lib/firebase.js';
// import { login } from '../lib/firebase-auth.js';
// import { createPost, login } from '../lib/index.js';

export const wall = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = 'Welcome to the Wall';
  div.append(title);
  return div;
};
