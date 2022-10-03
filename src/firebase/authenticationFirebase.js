import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from './configFirabese.js';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const createUser = (auth, email, password) => createUserWithEmailAndPassword(auth, email, password)
const signGoogle = () => signInWithPopup(auth, provider)
const signIn = (auth, email, password) => signInWithEmailAndPassword(auth, email, password)
const logOut = () => signOut(auth)


const displayUserData = () => {
  if (window.location.pathname === '/wall') {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('UserCredentialFb', JSON.stringify(user.email));
        const contentGretting = document.querySelector("#titleId")
        const buttonExit = document.querySelector('#exitButtonId')
        const buttonRegister = document.getElementById("loginButtonIdWall")
        if (contentGretting !== null && buttonExit !== null) {
          contentGretting.textContent = `Hola: ${user.email}`
          document.querySelector('#exitButtonId').style.display = "block";
          buttonRegister.style.display = "none"
        }
      } else {
        const contentGretting = document.querySelector("#titleId")
        const buttonExit = document.querySelector('#exitButtonId')
        const form = document.querySelector('#postForm')
        const buttonRegister = document.getElementById("#loginButtonIdWall")
        if (contentGretting !== null && buttonExit !== null) {
          document.querySelector('#titleId').innerHTML += `<h1 id="showUserEmailId" class="greetingUser">Hola, resgistrate en nuestra red social</h1>`;
          document.querySelector('#exitButtonId').style.display = "none"
          form.style.display="none"
          buttonRegister.style.display = "block"
        }
      }
    });
  }
};

export {
  auth,
  createUser,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  logOut,
  displayUserData,
  signIn,
  signGoogle,
  provider,
};
