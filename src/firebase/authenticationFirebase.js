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

const register = () => {
  const dataForm = getFormData();
        const result = createUser(auth, dataForm.email, dataForm.password);
        result.then((userCredential) => {

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
            console.error(error.message, 'no ok');
          });
}


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
        // const welcomeMessage = document.querySelector('#wallOffPublication')
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
