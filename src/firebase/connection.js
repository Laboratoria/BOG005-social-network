import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB5L_8-iWK_fcuTnIWV4peHFJMmOL8v7Qo",
  authDomain: "enjoy-the-world.firebaseapp.com",
  projectId: "enjoy-the-world",
  storageBucket: "enjoy-the-world.appspot.com",
  messagingSenderId: "976150175703",
  appId: "1:976150175703:web:9812817e989a64db747592",
  measurementId: "G-DWY854X4RL",
};

// Creando una constante para cada servicio
initializeApp(firebaseConfig);
const auth = getAuth();
const dataBase = getFirestore();

const createUser = (email, password) => {
  // console.log(email, password);}
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      // console.log(userCredential);
      // eslint-disable-next-line no-undef
      swal({
        title: "Genial!",
        text: "Conseguiste registrarte!",
        icon: "success",
        button: "Inicia tu viaje!",
      });
    })
    .catch((error) => {
      // console.error(error.message)

      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        // eslint-disable-next-line no-undef
        swal({
          title: "Verifica",
          text: "El usuario ya existe",
          icon: "error",
        });
        // errorText.textContent = 'El e-mail ingresado ya existe';
      } else if (errorCode === "auth/weak-password") {
        // errorText.textContent = 'Su contraseña debe tener al menos 6 caracteres';
      } else if (errorCode === "auth/invalid-email") {
        // errorText.textContent = 'No es un e-mail válido';
      }
    });
};
const signInUser = (email, password) => {
  console.log('email: ', email, 'password: ', password);
  return signInWithEmailAndPassword(auth, email, password)
}
  // const loginOut = signOut(auth);

// Detectando el estado de autenticación
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("Firebase check");
  } else {
    console.log("No se encuentra el usuario");
  }
});

const savePost = (title, post) => {
  addDoc(collection(dataBase, "post"), { title: title, post: post });
};

export { createUser, signInUser, auth, savePost };
