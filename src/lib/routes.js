import welcome from './page/welcome.js';
import header from './templates/header.js';

const routes = () => {
  const containerPage = document.getElementById('contentPageId');
  containerPage.innerHTML = header();
  containerPage.innerHTML += welcome();
};
export default routes;
