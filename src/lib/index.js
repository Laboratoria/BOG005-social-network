import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
// import { getFirestore, collection, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_j6708J42cmSLKkysThgLNEPr0F8W9cY",
  authDomain: "social-network-d92e0.firebaseapp.com",
  projectId: "social-network-d92e0",
  storageBucket: "social-network-d92e0.appspot.com",
  messagingSenderId: "551834649107",
  appId: "1:551834649107:web:9ad2286e4f3d8fdc5775e6",
  measurementId: "G-SBGE4HSXQM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);
// db.collection('todos').getDocs();
// const todosCol = collection(db, 'todos');
// const snapshot = await getDocs(todosCol);

// Detectando el estado de autenticación
onAuthStateChanged(auth, user => {
  if(user != null){
    console.log('Usuario Conectado');
  } else {
    console.log('No se encuentra el usuario')
  }
});

// export{auth,db};




/* // aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export { createPost } from './firebase.js';
export { login } from './firebase-auth.js'; */
