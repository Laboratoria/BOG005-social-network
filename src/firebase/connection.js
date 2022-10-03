import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, 
         createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, 
         onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB5L_8-iWK_fcuTnIWV4peHFJMmOL8v7Qo",
  authDomain: "enjoy-the-world.firebaseapp.com",
  databaseURL: "https://enjoy-the-world-default-rtdb.firebaseio.com",
  projectId: "enjoy-the-world",
  storageBucket: "enjoy-the-world.appspot.com",
  messagingSenderId: "976150175703",
  appId: "1:976150175703:web:009703b036b923ca747592",
  measurementId: "G-R81NHVQFFX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig); // **En otras versiones se eliminó la variable

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app); // **En otras versiones se elimina el parámetro.

const createUser = (email, password) => {
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      swal({
        title: "Genial!",
        text: "Conseguiste registrarte!",
        icon: "success",
        button: "Inicia tu viaje!",
      });
      // TODO: verificar por qué entra primero al catch porque imprime por unos segundos el mensaje de fail
    })
    .catch((error) => {
      const errorCode = error.code;
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
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    swal("Llegaste a tu muro!", "Aquí comienza tu viaje", "success");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    swal("Upps!", "Algo salió mal!", "error");
  });
};

  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      console.log('Conected');
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      console.log('No conection');
      // User is signed out
      // ...
    }
  });

export {auth, createUser, signInUser};
// ***1.Importar el código inicial provisto por Firebase (línea 1 y de 4 hasta 15 ) esa es la conexión con FBase y la id única de la App.
// ***2.Importar el código de autenticación, el de crear usuario y el de loguear usuario línea y el del observador 2 (getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged) 
// ese se puede encontrar en la documentación como: firebase/documentos/comenzar o primeros pasos.
// ***3.Copiar el código con los métodos createUserWithEmailAndPassword y signInWithEmailAndPassword que se encuentran en esa misma página. (ambas son promesas)
// las reconocen porque tienen un .then y un .catch. Línea de 20 hasta la 41 
// ***4.Pegar el código de onAuthStateChanged que aparece en la misma página, es una condicional línea 44 a 54.
// ***5.Crear variable con función flecha que crea al usuario y que engloba la promesa. se hace con el createUserWithEmailAndPassword y el signInWithEmailAndPassword.
// ***6.Crearíamos un archivo .js para la autenticación... ir a auth.js.
