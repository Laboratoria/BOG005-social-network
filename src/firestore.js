import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { app } from "./firebase.js";

const db = getFirestore(app);

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
