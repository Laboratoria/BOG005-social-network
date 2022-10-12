import { getFirestore, collection, addDoc, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


//enlace publicacion
export const db = getFirestore();
export const guardarPublicaciones = (post, likes, currentUser) => {
 return addDoc(collection(db, "publicaciones"),{
    post,
    likes,
    currentUser

   });
}
export const pubRef = () => getDocs(collection(db,'publicaciones'));

export const obtpost = (collback) => onSnapshot(collection(db, "publicaciones"),collback);


