import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc, arrayUnion, arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

// enlace publicacion
export const db = getFirestore();
export const guardarPublicaciones = (post, likes) => addDoc(collection(db, 'publicaciones'), {
  post,
  likes,
});
export const pubRef = () => getDocs(collection(db, 'publicaciones'));

export const obtpost = (collback) => onSnapshot(collection(db, 'publicaciones'), collback);
export const guardarPost = (post) => addDoc(collection(db, 'publicaciones'), { post });
export const borrarPost = (id) => deleteDoc(doc(db, 'publicaciones', id));
export const editarPost = (id) => getDoc(doc(db, 'publicaciones', id));
export const actualizarPost = (id, newfields) => updateDoc(doc(db, 'publicaciones', id), newfields);

// const likes = [];
// const contLikes = 0;
// export const likePost = async (postId, userId) => {
//    const editarLike = await editarPost(postId);
//    const userLike = editarLike.data().likes;
//    const likeCount = editarLike.data().contLikes;
//    if (userLike.includes(userId)) {
//      await actualizarPost(postId, {
//        likes: arrayRemove(userId),
//        contLikes: likeCount - 1,
//      });
//     } else {
//      await actualizarPost(postId, {
//        likes: arrayUnion(userId),
//        contLikes: likeCount + 1,
//      });
//    }
//  };
export const addLike = (id, userId) => {
  updateDoc(doc(db, 'publicaciones', id), { likes: arrayUnion(userId) });
};
export const removeLike = (id, userId) => {
  updateDoc(doc(db, 'publicaciones', id), { likes: arrayRemove(userId) });
};
