// importando los servicios de firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js';
import {
  getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';// servicion de inicio  de sesion con google
import { addDoc, collection, getFirestore, getDocs, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'

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
///////FIRESTORE/////
const db = /*() => */getFirestore(firebaseApp);

//////// Crea coleccion para post///
/* const toSavePost = (contenPost)=> {
  addDoc(collection(fs,'Post3'),{contenPost});
  console.log('auch'); */
//}
//console.log(fs);
//const toGetPost = (toGet)=> onSnapshot(collection(fs,'Post'),{toGet});


// Detectando el estado de autenticación
onAuthStateChanged(auth, (user) => { /// dice si estamos conectados///// PREGUNTAR!!!!!
  if (user != null) {
    console.log('Usuario Conectado');
    ////

  } else {
    console.log('No se encuentra el usuario');
  }
});
///// crear coleccion de usuarios ejemplo// se iba al catch 

 addDoc(collection(db, "usuarios3"), { //// funcion que guarda post con: funcion addDoc(especif colecc, agreg un objeconten)
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
  }).then((dos)=> {
    console.log("Document written with ID: ", dos.id);/// no reconoce id
    //console.log(dos);
  }).catch ((e)=>{
    console.error("Error adding document: ", e);
  });// lo encuentra pero necesita await y entonces no renderiza

  getDocs(collection(db, "users"))// querySnapshot = mi array doscs tipo querySnapshot que es un
  .then((arrayDocs)=>{
    arrayDocs.forEach((doc) => {
    /* console.log(`${doc.id} => ${doc.data().born}`); */
    console.log(doc.data());
    }).catch((e)=>{console.error("Error adding document: ", e);}) 

  }); 

export {
  initializeApp, createUserWithEmailAndPassword, auth, createUser, singUser, singUserGoogle, signInWithPopup, GoogleAuthProvider, loginOut,
};