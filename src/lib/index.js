// importando los servicios de firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js';
import {
  getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';// servicion de inicio  de sesion con google
import { addDoc, collection, getFirestore, getDocs, onSnapshot, doc, deleteDoc, query } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'

import config from './config.js'; // config es la llave de firebase

//console.log(GoogleAuthProvider);



// Creando una constante para cada servicio
const firebaseApp = initializeApp(config);  /// inicializa CON EL OBJETODE CONFIG QUE ESTA EN EL OTRO MODULO
const auth = getAuth(firebaseApp); // llama serv autenticacion
auth.languageCode = "es";
const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);//////**no testear
//console.log(createUserWithEmailAndPassword());
const singUser = (email, password) => signInWithEmailAndPassword(auth, email, password);//////***no testear
const provider = new GoogleAuthProvider();
const singUserGoogle = () => signInWithPopup(auth, provider);//////***no testear
const loginOut = () => signOut(auth);
const db = /*() => */getFirestore(firebaseApp);///////FIRESTORE/////


// Detectando el estado de autenticación
const loginUser = {}; // objeto usuario vacio
onAuthStateChanged(auth, (user) => { /// dice si estamos conectados///// PREGUNTAR!!!!!
  if (user != null) {
    console.log('Usuario Conectado');
    //loginUser.name = user.name;
    loginUser.email = user.email; /// añado atributos a objeto user
    console.log(loginUser);
  } else {
    console.log('No se encuentra el usuario');
  }
});

//// creacion de objeto usuario///

/* const getloginUser = ()=>{ ///
  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      loginUser.name = user.name;
      loginUser.email = user.email; /// añado atributos a objeto use
    }
  });
};  */

///// crear coleccion de usuarios ejemplo// se iba al catch 
const savePost = (input) => {
  if (loginUser) { // asigna al usuario que esté logeado la autoria
    const emailUser = loginUser.email;// si hay usuario guardeme su correo 
  // console.log(input);
  addDoc(collection(db, "usuarios3"), { //// funcion que guarda post con: funcion addDoc(especif colecc, agreg un objeconten)
    first: input,
    second : emailUser,
  }).then((dos) => { /// opcional???
    console.log("Document written with ID: ", dos.id);/// no reconoce id
    //console.log(dos);
  }).catch((e) => {
    console.error("Error adding document: ", e);
  });// lo encuentra pero necesita await y entonces no renderiza
  }
}


const readPost = () => {
  const arrayDocs = getDocs(collection(db, "usuarios3"));// querySnapshot = mi array doscs tipo querySnapshot que es un
  return arrayDocs
}
const readPost2 = (querySnapshot) => { onSnapshot(collection(db, "usuarios3"), querySnapshot)

}


/* const readPost = () => {
const arrayDocs_inic = getDocs(collection(db, "usuarios3"));// querySnapshot = mi array doscs tipo querySnapshot que es un
//const arrayDocs_inic = onSnapshot(collection(db, "usuarios3"));
//const arrayDocs=  onSnapshot(collection(db, "usuarios3"), arrayDocs_inic)
console.log(arrayDocs_inic);
//console.log(arrayDocs);
return arrayDocs_inic
} */


const deletePost = (id) => {
  deleteDoc(doc(db, "usuarios3", id))
}

export {
  initializeApp, createUserWithEmailAndPassword, auth, createUser, singUser, singUserGoogle, signInWithPopup, GoogleAuthProvider, loginOut, readPost,
  savePost, deletePost, readPost2, loginUser, /* getloginUser */
};