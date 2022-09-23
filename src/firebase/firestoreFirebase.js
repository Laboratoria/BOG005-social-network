import { getFirestore, collection, addDoc, getDocs, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { app } from './configFirabese.js';
// getFirestore();


// trae la conexión con firestone
// db => trae un objeto con la conexión a firestore
const db = getFirestore(app);
console.log('firestone',db)

// colección crea la coleeción de datos
const savePost = ( description ) => {
  addDoc(collection(db, 'Posts'), {description})
}

const getPost =  () => {
 getDocs(collection(db, "Posts")).then((res)=> {
  if( window.location.pathname === '/wall'){
    const contentedor = document.getElementById('allPosts')
    if(contentedor){
  console.log('res: ', res);
  res.forEach((doc) => {
    
    contentedor.innerHTML +=`<p> ${doc.data().description}</p>`;
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " =>***xyz ", doc.data());
    // console.log(doc.data().description);
  });
}
}
})

}
// db.collection("Posts").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//   });
// });
// getPost();
export {  getFirestore, savePost, getPost  }
