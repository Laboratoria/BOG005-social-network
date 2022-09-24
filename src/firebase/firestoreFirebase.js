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
    const contentedor = document.getElementById('postsContainerId')
    if(contentedor){
  console.log('res: ', res);
  res.forEach((doc) => {
    // console.log('DOC',doc)
    contentedor.innerHTML +=`
    <section id="post postForm" class="postsCards"> 
    <header id="headerPost">
      <i class="fa-solid fa-circle-user" class="userIcon"></i>
      <p>Usuario</p>
      <p>Ubicación</p>
    </header>
    <article id="post">
      <p class="contentPost" id="allPosts">${doc.data().description}</p>
    </article>
    <div id="like">
      <i class="fa-solid fa-heart"></i>
      <i class="fa-solid fa-comment-dots"></i>
    </div>
    </section>`;
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " =>***xyz ", doc.data());
    // console.log(doc.data().description);
  })}
}
 })
}

// window.addEventListener('DOMContentLoaded', () => {
//   getDocs(collection(db, "Posts")).then((res)=> {
//   const onGetPost = (res)=> { onSnapshot(collection(db, 'Posts'), callback)
// console.log('ongetpost',onGetPost)
// const contentedor = document.getElementById('allPosts')
//  contentedor = ''
// if(contentedor){
//   contentedor.innerHTML +=`<p> ${doc.data().description}</p>`;
// }
//  }
// })})

const onGetPost = ()=> {
   onSnapshot(collection(db, 'Posts'), (querySanpshot)=>{
    const contentedor = document.getElementById('postsContainerId')
    if(contentedor){
    querySanpshot.forEach((item)=>{
      contentedor.innerHTML +=`
      <section id="post postForm" class="postsCards"> 
      <header id="headerPost">
        <i class="fa-solid fa-circle-user" class="userIcon"></i>
        <p>Usuario</p>
        <p>Ubicación</p>
      </header>
      <article id="post">
        <p class="contentPost" id="allPosts">${item.data().description}</p>
      </article>
      <div id="like">
        <i class="fa-solid fa-heart"></i>
        <i class="fa-solid fa-comment-dots"></i>
      </div>
      </section>`;
    // console.log('item con data y description',item.data().description)
    })
  }
    // console.log('QUERY',querySanpshot)
  })
  //  console.log(querySanpshot)
  
  };

onGetPost();

// db.collection("Posts").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//   });
// });
// getPost();
export {getFirestore, savePost, getPost }