import { auth, createUser } from './connection.js';
import { savePost } from './connection.js';

window.addEventListener('DOMContentLoaded', () => {

});

const register = async (email, password) => {
  try {
    await createUser(auth, email, password);
  } catch (error) {
    throw error.message;
  }
};

// Evento para enviar el post
const postForm = document.getElementById('postWall');
postForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const titlePost = postForm['post-title']
  const post = postForm['post-form']
  savePost(title.value, post.value);

  post.reset();

})
export { register };
