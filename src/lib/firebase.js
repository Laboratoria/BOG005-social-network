import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth,
   createUserWithEmailAndPassword,
   GoogleAuthProvider, signInWithPopup,signOut,
   signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {onNavigate} from "../main.js"

const provider = new GoogleAuthProvider();
export const getCurrentUser = () => getAuth().currentUser;

const firebaseConfig = {
  apiKey: 'AIzaSyBviox7Zp3nx-sGoaoDa9mk8LWTflaBhTk',
  authDomain: 'explora-colombia-b78b6.firebaseapp.com',
  projectId: 'explora-colombia-b78b6',
  storageBucket: 'explora-colombia-b78b6.appspot.com',
  messagingSenderId: '380681004176',
  appId: '1:380681004176:web:96d035f8ac2dff6bda2415',
  measurementId: 'G-QE3NMHJ6VN',
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
export const crearUsuario = (email,password) => { 
//Creamos usuario con correo electronico y contraseña    
   return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    if(errorCode == "auth/weak-password"){
      swal({
        title: "Verifica tus datos!",
        text: "Tu contraseña debe tener mínimo seis dígitos",
        icon: "error",
      });      
    
    };

    if( errorCode == "auth/invalid-email"){
      swal({
        title: "¡Verifica tu correo!",
        text: "Tu correo no es válido",
        icon: "error",
      });
    }
    const errorMessage = error.message;
    // ..
  });
  
};
export const crearUsuarioConGoogle = () => {
  return signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
   console.log(errorMessage)
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
  export const cerrarSesion = () => {
    return signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }  
  export const iniciarlogin = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
};

// metodo de firebase ¿que hace onAuthStateChanged?
export const usuariosR = onAuthStateChanged(getAuth(),user => {
  if (user) {
   onNavigate("/muro")
   } else {
  onNavigate("/")
   }
  });
 
 






