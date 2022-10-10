import {
  getFirestore,
  collection,
  addDoc,
  orderBy,
  query,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { app } from "./firebase.js";

const db = getFirestore(app);
// const auth = getAuth(app);
// const user = auth.currentUser;

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

export async function saveDataPosts(title, description) {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      title: title,
      description: description,
      date: new Date(),
      idUsers: id,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log(e);
    console.error("Error adding document: ", e);
  }
}

export function getPosts() {
  const q = query(collection(db, "posts"), orderBy("date", "desc"));
  return getDocs(q);
}
