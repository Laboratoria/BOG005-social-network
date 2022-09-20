import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyB5L_8-iWK_fcuTnIWV4peHFJMmOL8v7Qo',
  authDomain: 'enjoy-the-world.firebaseapp.com',
  projectId: 'enjoy-the-world',
  storageBucket: 'enjoy-the-world.appspot.com',
  messagingSenderId: '976150175703',
  appId: '1:976150175703:web:9812817e989a64db747592',
  measurementId: 'G-DWY854X4RL',
};

// Creando una constante para cada servicio
initializeApp(firebaseConfig);
const auth = getAuth();
const createUser = (email, password) => {
  console.log(email, password);
  //
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => {
      // console.error(error.message)

      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
        swal({
          title: 'Verifica',
          text: 'El usuario ya existe',
          icon: 'error',
        });
        errorText.textContent = 'El e-mail ingresado ya existe';
      } else if (errorCode === 'auth/weak-password') {
        errorText.textContent = 'Su contraseña debe tener al menos 6 caracteres';
      } else if (errorCode === 'auth/invalid-email') {
        errorText.textContent = 'No es un e-mail válido';
      }
    });
};
const signInUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
// const loginOut = signOut(auth);

// Detectando el estado de autenticación
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('Usuario Conectado');
  } else {
    console.log('No se encuentra el usuario');
  }
});

export { createUser, signInUser, auth };
