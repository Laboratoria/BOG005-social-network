import { getFirestore, collection, addDoc, getDocs, onSnapshot,deleteDoc,doc,getDoc,updateDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


//enlace publicacion
export const db = getFirestore();
export const guardarPublicaciones = (post, likes) => {
 return addDoc(collection(db, "publicaciones"),{
    post,
    likes,    
   });
}
export const pubRef = () => getDocs(collection(db,'publicaciones'));

export const obtpost = (collback) => onSnapshot(collection(db, "publicaciones"),collback);
export const guardarPost =  (post) => addDoc(collection(db,"publicaciones"),{post});
export const borrarPost = id => deleteDoc(doc(db,'publicaciones',id));
export const editarPost = id => getDoc(doc(db,'publicaciones',id));
export const actualizarPost = (id,newfields) => updateDoc(doc(db,"publicaciones",id),newfields);