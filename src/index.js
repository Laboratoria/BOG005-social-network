// aqui exportaras las funciones que necesites
import Register from './lib/views/register.js';
import home from './lib/views/home.js';
import wall from './lib/views/wall.js';
// import { firebaseConfig } from "firebase/app";
// import { } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-SERVICE.js'
//import { getAnalytics } from "firebase/analytics";

const COMPONENTS = {
  register: Register,
  home:home,
  wall:wall,
};


export { COMPONENTS };


