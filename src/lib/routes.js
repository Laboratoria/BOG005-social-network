import signIn from './page/signIn.js';
import welcome from './page/welcome.js';
import userSignIn from './page/userSignIn.js';
import header from './templates/header.js';
import getHash from './utils/getHash.js';
import { removeHashes, sendRoute } from './utils/clearHash.js';

const routes = {
  '/': welcome,
  '/signIn': signIn,
  '/userSignIn': userSignIn,
};

const router = () => {
  const containerPage = document.getElementById('contentPageId');
  containerPage.innerHTML = header();
  const hash = getHash();
  removeHashes(hash);
  const sendRoutes = sendRoute(hash);
  const render = routes[sendRoutes] ? routes[sendRoutes] : 'ERROR404';
  containerPage.innerHTML = render();
};

// const routes = () => {
//   const containerPage = document.getElementById('contentPageId');
//   containerPage.innerHTML = header();
//   containerPage.innerHTML += welcome();
// };
export default router;
