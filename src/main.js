import { welcome } from './components/welcome.js';
import { register}  from './components/register.js';
import { login } from './components/login.js';
import { wall } from './components/wall.js';


const router = {
  '': welcome(),
  '#register': register(),
  '#login': login(),
  '#wall': wall(),
};

export const showSection = () => {
  const root = document.getElementById('root');
  const hash = window.location.hash;
  root.replaceChildren(router[hash]);
};

window.addEventListener('load', showSection);
window.addEventListener('hashchange', showSection);
