import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, auth } from '../lib/firebaseIntermadiate/auth.js';
import { showMessageError, showSuccessfulResponse } from '../lib/utils/formValidator.js';


const createUser = (auth, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showSuccessfulResponse();
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      showMessageError(errorCode);
    });
};

const displayUserData = () => {
  if (window.location.pathname === '/wall') {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('UserCredentialFb', JSON.stringify(user.email));
        const contentGretting = document.querySelector("#titleId")
        if (contentGretting !== null) {
          contentGretting.textContent = `Hola: ${user.email}`
        }
      } else {
        const welcomeMessage = document.querySelector('#wallOffPublication')
        const buttonExit = document.querySelector('#exitButtonId')
        if(welcomeMessage !== null && buttonExit !== null){
          document.querySelector('#wallOffPublication').innerHTML += `<h1 id="showUserEmailId" class="greetingUser">Hola resgistrate en nuestra red social</h1>`;
          document.querySelector('#exitButtonId').style.display = "none"
        }
        
      }
    });
  }
}

const signIn = (auth, email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential;
      console.log(user)      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
  
const logOut = () => {
  return signOut(auth).then(() => {
    auth.signOut();
   }).catch((error) => {
    console.error('Ha ocurrido un error al intentar salir', error);
  });
}

export {
  auth,
  createUser,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  logOut,
  displayUserData,
  signIn,
};
