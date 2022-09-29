import { createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signOut, auth, provider } from '../lib/firebaseIntermadiate/auth.js';
import { showMessageError, showSuccessfulResponse } from '../lib/utils/formValidator.js';

const createUser = (auth, email, password) => createUserWithEmailAndPassword(auth, email, password)
const signGoogle = ()=> signInWithPopup(auth, provider)
const signIn = (auth, email, password) => signInWithEmailAndPassword(auth, email, password)

const register = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const result = createUser(auth, email, password);
  result.then((userCredential) => {
    showSuccessfulResponse();
    if (userCredential) {
      window.location.href = '#wall';
      localStorage.setItem('Username', `${dataForm.name}`);
      const getName = localStorage.getItem('Username');
      const contentPost = document.querySelector('#wallOffPublication');
      if (contentPost) {
        contentPost.innerHTML += `<h1 id="greetingUserId" class="greetingUser">Hola ${getName}!</h1>`;
      }
    }
  })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode)
      showMessageError(errorCode)
    });
};

const registerGoogle = () => {
  const response = signGoogle(auth, provider)
  response.then((result) => {
   if(result) {
    window.location.href = '#wall';
   }
 })
 .catch((error) => {
   if (error) {
    alert('!Ups hay un error')
   }
  });
};

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
          buttonRegister.style.display ="none"
        }
      } else {
        const contentGretting = document.querySelector("#titleId")
        const buttonExit = document.querySelector('#exitButtonId')
        const buttonRegister = document.getElementById("loginButtonIdWall")
        if(contentGretting !== null && buttonExit !== null){
          document.querySelector('#titleId').innerHTML += `<h1 id="showUserEmailId" class="greetingUser">Hola, resgistrate en nuestra red social</h1>`;
          document.querySelector('#exitButtonId').style.display = "none"
          buttonRegister.style.display ="block"
        }
      }
    });
  }
};

const login = () => {
  const email = document.querySelector('#userSi').value;
  const password = document.querySelector('#password').value;
  const result = signIn(auth, email, password)
  result.then((userCredential) => {
   if(userCredential) {
    const greetingUser = document.getElementById('greetingUserId');
    if (greetingUser) {
      greetingUser.innerHTML = '';
    }
    window.location.href = '#wall';
   }
 })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode)
      const errorMessage = error.message;
    });
};

const logOut = () => {
  return signOut(auth).then(() => {
    auth.signOut();
   }).catch((error) => {
    console.error('Ha ocurrido un error al intentar salir', error);
  });
};

export {
  auth,
  register,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  logOut,
  displayUserData,
  login,
  registerGoogle,
  provider,
};