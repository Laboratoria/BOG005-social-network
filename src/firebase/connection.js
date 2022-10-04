import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyB5L_8-iWK_fcuTnIWV4peHFJMmOL8v7Qo',
  authDomain: 'enjoy-the-world.firebaseapp.com',
  databaseURL: "https://enjoy-the-world-default-rtdb.firebaseio.com",
  projectId: 'enjoy-the-world',
  storageBucket: 'enjoy-the-world.appspot.com',
  messagingSenderId: '976150175703',
  appId: '1:976150175703:web:9812817e989a64db747592',
  measurementId: 'G-DWY854X4RL',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // signed in
    const user = userCredential.user;
    console.log(user);
    console.log('oh yeah');
    swal({
      title: "Genial!",
      text: "Conseguiste registrarte!",
      icon: "success",
      button: "Inicia tu viaje!",
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    console.log('ay no!')
    if(errorCode === "auth/email-already-in-use"){
      swal({
        title: "Por favor verifica,",
        text: "El usuario ya existe",
        icon: "error",
      });
    }
    else if(errorCode === "auth/invalid-email"){
      swal({
        title: "Ingresa un email válido, por favor.",
        text: "debe tener formato de email",
        icon: "error",
      });
    }
    else if(errorCode === "auth/weak-password"){
      swal({
        title: "Tu contraseña es muy débil!,",
        text: "Por favor usa más de seis caracteres",
        icon: "error",
      });
    }       
  });
};

const signInUser = (email, password) => {
  console.log('email: ', email, 'password: ', password);
  return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(user, 'Signed in');
    // signed in
    const user = userCredential.user;
    //  ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
};

// Detectando el estado de autenticación
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('In Firebase');
    const uid = user.uid;
  } else {
    console.log('Not in Firebase');
  }
});

// signOut(auth).then(() => {
//   // signout successful.
// }).catch((error) => {
//   // An error happened.
// });

// const user = auth.currentUser;
// if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.
//   const displayName = user.displayName;
//   const email = user.email;
//   const photoURL = user.photoURL;
//   const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
//   const uid = user.uid;
// }

export { auth, createUser, signInUser };
