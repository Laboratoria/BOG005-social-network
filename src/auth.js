import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

import { app } from "./firebase.js";
import { saveData } from "./firestore.js";

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const user = auth.currentUser;

export function registerWithEmail(email, password, name) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      saveData(email, password, name);
      window.location.hash = "";
    })
    .catch((error) => {
      if (error.code == "auth/email-already-in-use") {
        alert("El email ya está registrado");
      }
      if (error.code == "auth/invalid-email") {
        alert("El email no es válido");
      }
      if (error.code == "auth/weak-password") {
        alert("La contraseña debe tener al menos 6 caracteres");
      }
      const errorCode = error.code;
      console.log(error.code);
      const errorMessage = error.message;
    });
}

export function loginWithEmail(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.hash = "#feed";
    })
    .catch((error) => {
      if (error.code == "auth/invalid-email") {
        alert("El email no es válido");
      }
      if (error.code == "auth/wrong-password") {
        alert("La contraseña es incorrecta");
      }
      if (error.code == "auth/user-not-found") {
        alert("El usuario no está registrado");
      }
      const errorCode = error.code;
      console.log(error.code);
      const errorMessage = error.message;
    });
}

export function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // PRUEBA cargar foto de perfil de google al autenticarse.
      //  $('#avatar').attr('src', result.user.photoURL)
      // FIN PRUEBA

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      window.location.hash = "#feed";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    localStorage.setItem("user", user);
    console.log(user);
    const uid = user.uid;
  } else {
    localStorage.removeItem("user");
    window.location.hash = "";
  }
});

export function signOutUser() {
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
}

export async function getUser() {
  const auth = await getAuth(app);
  const user = auth.currentUser;
  console.log(user);
  return user;
}
