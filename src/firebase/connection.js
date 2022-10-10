/* eslint-disable no-undef */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyB5L_8-iWK_fcuTnIWV4peHFJMmOL8v7Qo',
  authDomain: 'enjoy-the-world.firebaseapp.com',
  databaseURL: 'https://enjoy-the-world-default-rtdb.firebaseio.com',
  projectId: 'enjoy-the-world',
  storageBucket: 'enjoy-the-world.appspot.com',
  messagingSenderId: '976150175703',
  appId: '1:976150175703:web:9812817e989a64db747592',
  measurementId: 'G-DWY854X4RL',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// CreateUser function
const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    console.log('oh yeah');
    swal({
      title: 'Genial!',
      text: 'Registro Exitoso!',
      icon: 'success',
      button: 'Inicia tu viaje!',
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log('ay no!');
    if (errorCode === 'auth/email-already-in-use') {
      swal({
        title: 'Por favor revisa,',
        text: 'Ese usuario ya existe',
        icon: 'error',
      });
    } else if (errorCode === 'auth/invalid-email') {
      swal({
        title: 'Por favor ingresa un email válido.',
        text: 'Debería tener formato de email',
        icon: 'error',
      });
    } else if (errorCode === 'auth/weak-password') {
      swal({
        title: 'Tu contraseña es muy corta!,',
        text: 'Por favor usa más de seis caracteres',
        icon: 'error',
      });
      window.location.pathname = '/register';
    }
  });

// Email signIn function
const signInUser = (email, password) => {
  console.log('email: ', email, 'password: ', password);
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // signed in
      const user = userCredential.user;
      console.log(user, 'Signed in');
      swal({
        title: 'Bienvenido a Enjoy the World,',
        text: 'Puedes comenzar a postear',
        icon: 'success',
      });
    })
    .catch((error) => {
      window.location.pathname = '/login';
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log('nope, no entraste');
      swal({
        title: 'Algo sucedió, no fue posible loguearte',
        text: 'Revisa tus credenciales',
        icon: 'error',
      });
    });
};

// Google signIn function
const provider = new GoogleAuthProvider();
const googleSignIn = () => signInWithPopup(auth, provider)
  .then(() => {
    window.location.pathname = '/wall';
  })
  .catch(() => { });

// signOff function
const signOff = () => signOut(auth);

export {
  auth, createUser, signInUser, googleSignIn, signOff,
};
