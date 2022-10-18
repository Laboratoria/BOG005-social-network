import {
  getFirestore,
  collection,
  addDoc,
  orderBy,
  query,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { auth2 } from "./auth.js";
import { app } from "./firebase.js";
import { onAuthStateChanged, getAuth }  from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

const db = getFirestore(app);
const auth = getAuth(app);

// const auth = getAuth(app);
// const user = auth.currentUser;
export const currentUser = {};
export async function saveData(email, password, name) {
  try {
    const docRef = await addDoc(collection(db, "usuarios"), {
      name: name,
      email: email,
      password: password,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log(e);
    console.error("Error adding document: ", e);
  }
}
export const googleSignIn = () => signInWithPopup(auth, provider);

export const getCurrentUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      currentUser.displayName = user.displayName;
      currentUser.email = user.email;
      currentUser.uid = user.uid;
      currentUser.photoURL = user.photoURL;
    }
  });
};




export async function saveDataPosts(title, description) {

    const docRef = await addDoc(collection(db, "posts"), {
      title: title,
      description: description,
      date: new Date(),
      uid: auth2.currentUser.uid,
      name: auth2.currentUser.displayName,
    })
}

export function getPosts() {
  const q = query(collection(db, "posts"), orderBy("date", "desc"));
  return getDocs(q);
}

// Get posts & order posts
export const onGetPost = () => {
  const q = query(collection(db, 'usuarios'));
  return getDocs(q);
};

// Get one post
//obtener una tarea UNICA
export const getPost = (id) => getDoc(doc(db, 'posts', id));
// export const getUser = (id) => getDoc(doc(db, 'usuarios', id));

// Edit post

export const updatePost = (id, newFields) => updateDoc(doc(db, 'posts', id), newFields)


export const deletePost = (id) => deleteDoc(doc(db, 'posts', id))