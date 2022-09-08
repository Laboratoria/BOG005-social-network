import welcome from './page/welcome.js';
import header from './templates/header.js';
import signIn from './page/signIn.js';
import userSignIn from './page/userSignIn.js';
import getHash from './utils/getHash.js';
// import getFormData from './utils/formValidator.js';
//import eventButtonSignIn from './utils/eventButtonSignIn.js'; 
import eventButtonContinue from './utils/eventButtonContinue.js';

const routes = {
  '/#': welcome,
  '/#signIn': signIn,
  '/#userSignIn': userSignIn,
};

const router = () => {
  const containerPage = document.getElementById('contentPageId');
  containerPage.innerHTML = header();
  containerPage.innerHTML += welcome();
   containerPage.innerHTML = signIn();
  //eventButtonSignIn();
  //eventButtonContinue();
};
export default router;
