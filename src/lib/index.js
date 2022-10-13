// importando los servicios de firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js';
import {
  getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';// servicion de inicio  de sesion con google
import { addDoc, collection, getFirestore, getDoc, getDocs, onSnapshot, doc, deleteDoc, updateDoc, query, arrayUnion, arrayRemove } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'

import config from './config.js'; // config es la llave de firebase


// Creando una constante para cada servicio
const firebaseApp = initializeApp(config);  /// inicializa CON EL OBJETODE CONFIG QUE ESTA EN EL OTRO MODULO
const auth = getAuth(firebaseApp); // llama serv autenticacion
auth.languageCode = "es";
const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);//////**no testear
const singUser = (email, password) => signInWithEmailAndPassword(auth, email, password);//////***no testear
const provider = new GoogleAuthProvider();
const singUserGoogle = () => signInWithPopup(auth, provider);//////***no testear
const loginOut = () => signOut(auth);
const db = /*() => */getFirestore(firebaseApp);///////FIRESTORE/////
const VerificSingin = () => onAuthStateChanged(auth);
const profileUser =(user, displayName )=>updateProfile(user, { displayName });


// Detectando el estado de autenticación
const loginUser = {}; // objeto usuario vacio
onAuthStateChanged(auth, (user) => { /// dice si estamos conectados///// PREGUNTAR!!!!!
  if (user != null) {
    console.log('Usuario Conectado');
    loginUser.email = user.email; /// añado atributos a objeto user
    console.log(loginUser);
    
  } else {
    console.log('No se encuentra el usuario');
  }
  
});


///// crear post en coleccion////
const savePost = (input, likes) => {
  if (loginUser) { // asigna al usuario que esté logeado la autoria
     const emailUser = loginUser.email;// si hay usuario guardeme su correo 
    addDoc(collection(db, "usuarios3"), { //// funcion que guarda post con: funcion addDoc(especif colecc, agreg un objeconten)
      first: input,
      second: emailUser,
      likesCount: likes
    }).then((dos) => { /// opcional???
      console.log("Document written with ID: ", dos.id);/// no reconoce id
    })/* .catch((e) => {
      console.error("Error adding document: ", e);
    }); */
  }
}

//// leer post/////
const readPost = () => {
  const arrayDocs = getDocs(collection(db, "usuarios3"));// querySnapshot = mi array doscs tipo querySnapshot que es un
  return arrayDocs
}
const readPost2 = (querySnapshot) => {
  onSnapshot(collection(db, "usuarios3"), querySnapshot)
}

//// funcion eliminar post //////
const deletePost = (id) => {
  deleteDoc(doc(db, "usuarios3", id))
}

/////funcion editar post///////
const editPostUpdate = (id, input) => {
  console.log(id);
  console.log(input);
  const editPost = doc(db, "usuarios3", id);
  updateDoc(editPost, {
    first: input,// texto que va a modificar
  })
}

// funcion like-dislike
const getOnePost = (id) => getDoc(doc(db, "usuarios3", id)); // traemos un solo post doc es un post
const likesPost = (id) => {
  const PostLike = doc(db, "usuarios3", id);
  getOnePost(id)
    .then((doc) => {
      let userLikes = doc.data().likesCount;
      if (userLikes.includes(loginUser.email)) {
        updateDoc(PostLike, {
          likesCount: arrayRemove(loginUser.email),
        })
      }
      else {
        updateDoc(PostLike, {
          likesCount: arrayUnion(loginUser.email),
        })
      }
    })
}

export {
  initializeApp, createUserWithEmailAndPassword, auth, createUser, singUser, singUserGoogle, signInWithPopup, GoogleAuthProvider, loginOut, readPost,
  savePost, profileUser,  deletePost, readPost2, loginUser, editPostUpdate, likesPost, VerificSingin, onAuthStateChanged /* getloginUser */
};