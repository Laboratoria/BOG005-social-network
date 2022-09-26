import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, auth } from '../lib/firebaseIntermadiate/auth.js';
import { showMessageError, showSuccessfulResponse } from '../lib/utils/formValidator.js';


const testCreate = (auth, email, password) => {
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

}

const displayUserData = () => {
  if (window.location.pathname === '/wall') {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('UserCredentialFb', JSON.stringify(user.email));
        const contentGretting = document.querySelector('#wallOffPublication');
        console.log(contentGretting);
        if (contentGretting !== null) {
          contentGretting.innerHTML += `<h1 id="showUserEmailId" class="greetingUser">Usuario en sesión: ${user.email}</h1>`;
          eventSignOut();
        }
      } else {
        document.querySelector('#wallOffPublication').innerHTML += `<h1 id="showUserEmailId" class="greetingUser">Hola resgistrate en nuestra red social</h1>`;
      }
    });
  }
};

const eventLoginButton = () => {
  if (window.location.pathname === '/userSignIn') {
    const btnLogin = document.querySelector('#submitContinue');
    if (btnLogin) {
      btnLogin.addEventListener('click', () => {
        const email = document.querySelector('#userSi').value;
        const password = document.querySelector('#passwordSi').value;
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential, 'se cumplió');
            const greetingUser = document.getElementById('greetingUserId');
            if (greetingUser) {
              greetingUser.innerHTML = '';
            }
            window.location.href = '#wall';
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      });
    }
  }
};

const logOut = () => {
  return signOut(auth).then(() => {
    auth.signOut();
    console.log('Ha salido de la sesión');

  }).catch((error) => {
    console.error('Ha ocurrido un error al intentar salir', error);
  });
}

const eventSignOut = () => {
  const btnExit = document.getElementById('exitButtonId');
  if (btnExit) {
    btnExit.addEventListener('click', () => {
      const result = logOut(auth);
      result.then(() => {
        const getUserCredential = localStorage.getItem('UserCredentialFb');
        console.log(getUserCredential, 'Fuera de aquí');
        localStorage.removeItem('UserCredentialFb');
        localStorage.removeItem('User');
        localStorage.removeItem('Username');
        window.location.href = '#welcome';
      }).catch((error) => {
        console.error(error);
      });
    });
  }
};

export {
  auth,
  testCreate,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  eventSignOut,
  logOut,
  displayUserData,
  eventLoginButton,
};
