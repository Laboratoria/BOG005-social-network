import { getFirestore, collection, addDoc, query, getDocs, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


//enlace publicacion
export const db = getFirestore();
export const guardarPublicaciones = (post, likes, currentUser) => {
 return addDoc(collection(db, "publicaciones"), {
    post,
    likes,
    currentUser

  })

//   const pubRef = () => {
//     const todospos = query(collection(db, "publicaciones"), orderBy("date", "desc"));
//     then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         doc.data();
//         console.log(doc.data());
//         return getDocs(todospos);
//       });   
//   });
// }
};
export const pubRef = () => query(collection(db, "publicaciones"), orderBy("date", "desc"));
export {onSnapshot}
// const q = query(collection(db, "publicaciones")
// const unpost = onSnapshot(q, (querySnapshot) => {
//   const arrPublicaciones = [];
//   querySnapshot.forEach((doc) => {
//     arrPublicaciones.push(doc.data().post);
//   });
//   console.log("mi pots ", arrPublicaciones.join(", "));
// });

// unpost();



