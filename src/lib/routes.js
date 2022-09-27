import signIn from './page/signIn.js';
import welcome from './page/welcome.js';
import userSignIn from './page/userSignIn.js';
import header from './templates/header.js';
import getHash from './utils/getHash.js';
import wall, { buttonP } from './page/wall.js';
import { removeHashes, sendRoute } from './utils/clearHash.js';
import eventButtonContinue from './utils/eventButtonContinue.js';
import { displayUserData } from '../firebase/authenticationFirebase.js';
import { eventLoginButton } from './utils/loginButton.js';

import eventButtonGoogle from './utils/eventButtonGoogle.js';
import { getPost } from '../firebase/firestoreFirebase.js';

//import { changeConditionWall } from './utils/imgWall.js';

const containerPage = document.getElementById('contentPageId');

const routes = {
  '/': welcome,
  '/signIn': signIn,
  '/userSignIn': userSignIn,
  '/wall': wall,
};


const router = () => {
  // containerPage.innerHTML = header();
  const hash = getHash();
  removeHashes(hash);
  const sendRoutes = sendRoute(hash);
  const render = routes[sendRoutes] ? routes[sendRoutes] : 'ERROR404';
  containerPage.innerHTML = render();
  eventButtonContinue();
  eventButtonGoogle();
  buttonP();
  getPost();
  eventLoginButton();
  displayUserData();
  //changeConditionWall();
};

const handlerHistorial = () => {
  const pathName = window.location.pathname;
  const render = routes[pathName] ? routes[pathName] : 'ERROR404';
  containerPage.innerHTML = render();
};



export { router, handlerHistorial };
