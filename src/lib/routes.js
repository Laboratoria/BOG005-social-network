import { signIn } from './page/signIn.js';
import welcome from './page/welcome.js';
import userSignIn from './page/userSignIn.js';
import  { wall } from './page/wall.js';
//import { eventButtonCreateUser } from './utils/eventButtonContinue.js';
import { displayUserData } from '../firebase/authenticationFirebase.js';
//import { eventLoginButton } from './utils/eventLoginButton.js';
import { eventButtonGoogle } from './utils/eventButtonGoogle.js';
import { eventButtonSignOut } from './utils/eventSignOut.js';
import { getPost, onGetPost, buttonP } from '../firebase/firestoreFirebase.js';

const routes = {
  '/': welcome(),
  '/signIn': signIn(),
  '/userSignIn': userSignIn(),
  '/wall': wall(),
};

const removeHashes = (hash) => {
  if (hash === '#welcome') {
    window.history.replaceState({}, '', '/');
  } else if (hash === '#signIn') {
    window.history.replaceState({}, '', '/signIn');
  } else if (hash === '#userSignIn') {
    window.history.replaceState({}, '', '/userSignIn');
  } else if (hash === '#wall') {
    window.history.replaceState({}, '', '/wall');
  }
};

const router = (hash) => {
  removeHashes(hash);
  const changeHash = hash.slice(1).split('/')[1] || '/';
  const getWord = hash.slice(1);
  const route = `${changeHash}${getWord}`;
  const sendRoutes = route === '/welcome' ? '/' : route;
  const render = routes[sendRoutes] ? routes[sendRoutes] : 'ERROR404';
  console.log(render)
  const containerPage = document.getElementById('contentPageId');
  //return containerPage.innerHTML = render;
  return containerPage.append(render);
};
//console.log(router('#wall'))

const historyHandler = () => {
  const pathName = window.location.pathname;
  const render = routes[pathName] ? routes[pathName] : 'ERROR404';
  const containerPage = document.getElementById('contentPageId');
  return containerPage.innerHTML = render;
};

const eventHandler = () => {
  //eventButtonCreateUser();
  eventButtonGoogle();
  //eventLoginButton();
  displayUserData();
  eventButtonSignOut();
  buttonP();
  getPost();
  onGetPost();
};

export { router, historyHandler, eventHandler };