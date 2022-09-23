import { getAuth } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from './configFirabese.js';
import { getUserData } from './authenticationFirebase.js';

const auth = getAuth(app);
const displayUserData = () => {
  const getName = localStorage.getItem('Username');
  if (window.location.pathname === '/wall') {
    getUserData(auth, getName);
  }
};

export { displayUserData };
