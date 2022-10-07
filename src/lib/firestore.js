import { getFirestore ,  collection, addDoc} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


//enlace publicacion
export const db = getFirestore();
export const guardarPublicaciones = (post, likes, currentUser) => {
  addDoc(collection(db, "publicaciones"), {
    post,
    likes,
    currentUser
  })
}
