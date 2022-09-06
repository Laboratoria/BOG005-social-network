import welcome from './page/welcome.js';
// import signIn from './page/signIn.js';
// import userSignIn from './page/userSignIn.js';
import header from './templates/header.js';

const routes = () => {
  const containerPage = document.getElementById('welcome');
  containerPage.innerHTML = header();
  containerPage.innerHTML += welcome();
};
export default routes;

//document.querySelector("#signIn").innerHTML = signIn();
// document.querySelector("#userSignIn").innerHTML = userSignIn();
