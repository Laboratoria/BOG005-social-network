import { onNavigate } from '../main.js';
import {
  loginOut, savePostFirestore, auth, onSnapshot, onAuthStateChanged,
  updateDataPost, deletePost, postUserProfile, getOnePost, profileUser, 
} from '../lib/firebase.js';

export const wall = () => {
  const containWall = document.createElement('section');
  containWall.classList.add('viewWall');
  // header de vista wall
  const header = document.createElement('section');
  header.classList.add('header');
  const imgHeader = document.createElement('section');
  imgHeader.classList.add('imgHeader');
  const imgLogoWall = document.createElement('img');
  imgLogoWall.setAttribute('srcset', './image/danaYogaLogo.png');
  imgLogoWall.classList.add('imgLogoWall');
  // menú de navegación
  const navSection = document.createElement('section');
  navSection.classList.add('sectionNav');
  const buttonWall = document.createElement('button');
  buttonWall.classList.add('btnNav');
  buttonWall.textContent = 'MURO';
  const buttonExit = document.createElement('button');
  buttonExit.classList.add('btnNav');
  buttonExit.textContent = 'SALIR';
// funciones de los botones de navegación
  buttonWall.addEventListener('click', () => {
    onNavigate('/wall');
  });

  buttonExit.addEventListener('click', () => {
    loginOut.then(() => {
      console.log('Usuario desconectado');
      onNavigate('/');
    }).catch((error) => {
      console.log('error');
    });
  });


  let editStatus = false;
  let id = '';
  const user = postUserProfile();
  
  // Contenedor general del muro
  const wallPageContainer = document.createElement('section');
  wallPageContainer.classList.add('wallPageContainer');

  // sección de usuario
  const infoUserWall = document.createElement('section');
  infoUserWall.classList.add('sectionWallUser');
  const infoUser = document.createElement('div');
  infoUser.classList.add('sectionUser');
  const nameEmailUser = document.createElement('div');
  nameEmailUser.classList.add('nameEmailUser');
  const wallNameUser = document.createElement('h2');
  wallNameUser.textContent = auth.displayName;
  wallNameUser.setAttribute('id', 'nameUser');
  const emailUser = document.createElement('h3');
  emailUser.setAttribute('id', 'emailUser');
  emailUser.textContent = auth.email;


  // sección de post
  const sectionPostWall = document.createElement('section');
  sectionPostWall.classList.add('sectionPost');
  const formPost = document.createElement('form');
  // texarea de creación del post
  const inputPost = document.createElement('textarea');
  inputPost.setAttribute('id', 'textPost');
  inputPost.classList.add('inputPost');
  inputPost.setAttribute('placeholder', 'Crea tu publicación aqui...');
  inputPost.setAttribute('required', '');
  // botón publicar
  const buttonPost = document.createElement('button');
  buttonPost.setAttribute('id', 'buttonPost');
  buttonPost.classList.add('btnPost');
  buttonPost.textContent = 'Publicar';
  const postDoUser = document.createElement('p');
  postDoUser.setAttribute('id', 'textPostUser');
  // guardando el post
  const printerPost = document.createElement('textarea');
  printerPost.setAttribute('id', 'printerPost');
  printerPost.classList.add('userPosted');

  function getPost() {
    printerPost.value = localStorage.getItem('userPost');
  }
  // Creando y salvando el post
  function savePost() {
    localStorage.setItem('userPost', inputPost.value);
  }

  buttonPost.addEventListener('click', () => {
    const post = inputPost.value;
    console.log('post', post, editStatus);
    if (!editStatus) { // Si no se está editando el post, guardalo! 
      savePost();
      savePostFirestore(post).then(() => {
      }).catch((error) => {
        console.log(error.message)
      })
    } else { //Si se edita, entonces actualiza la información
      getPost();
      updateDataPost(id, { title: post });
      editStatus = false;
    }
    inputPost.value = '';
  });

  // Colección de todos los post
  const sectionPost = document.createElement('section');
  sectionPost.classList.add('sectionPost');
  // función para traer los post de firestore al muro
  onSnapshot(postUserProfile(), (querySnapShot) => {
    if (sectionPost.hasChildNodes()) {
      sectionPost.innerHTML = "";
    }
    querySnapShot.forEach(doc => {
      const cardPost = document.createElement('article');
      cardPost.classList.add('cardPost');
      cardPost.classList.add('id', 'containerPost');
      const postNameUser = document.createElement('h4');
      postNameUser.textContent = doc.data().name;
      const postedUser = document.createElement('p');
      postedUser.textContent = doc.data().title;
       
      // Sección de botones
      const sectionBtn = document.createElement('section');
      sectionBtn.classList.add('sectionBtn');
      //botón de editar
      const buttonEdit = document.createElement('button');
      buttonEdit.setAttribute('id', 'buttonEdit');
      buttonEdit.setAttribute('data-id', doc.id);
      buttonEdit.classList.add('btnEdit');
      buttonEdit.textContent = 'Editar';
      //botón de eliminar
      const buttonErase = document.createElement('button');
      buttonErase.setAttribute('id', 'buttonErase');
      buttonErase.setAttribute('data-id', doc.id);
      buttonErase.classList.add('btnErase');
      buttonErase.textContent = 'Borrar';
      //botón de like
      const buttonLike = document.createElement('button');
      buttonLike.setAttribute('id', 'buttonLike');
      buttonLike.setAttribute('data', doc.id);
      buttonLike.setAttribute('like', doc.data().like);
      buttonLike.classList.add('btnLike');
      buttonLike.textContent = 'Me gusta';
      if (doc.data().like == true) { // CSS inline
        buttonLike.style.backgroundColor = 'darksalmon';
      }

      sectionBtn.append(buttonErase, buttonEdit, buttonLike);
      cardPost.append(postNameUser, postedUser, sectionBtn);
      sectionPost.append(cardPost);
    });

    // función para dar like a los post
    const btnsLike = sectionPost.querySelectorAll('.btnLike');
    btnsLike.forEach(btn => {
      btn.addEventListener('click', async (event) => {
        const id = event.target.attributes.data.value;
        const like = event.target.attributes.like.value == "true" ? false : true;
        updateDataPost(id, { like: like });
      })
    });

    // función para borrar los post
    const btnsErase = sectionPost.querySelectorAll('.btnErase');
    btnsErase.forEach(btn => { // Btn contiene target que contiene dataset
      btn.addEventListener('click', ({ target: { dataset } }) => { // dataset se extrae por propiedades del objeto
        deletePost(dataset.id);
      })

      // función para editar los post
    const btnsEdit = sectionPost.querySelectorAll('.btnEdit')
    btnsEdit.forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const doc = await getOnePost(e.target.dataset.id);
          const post = doc.data();
          textPost.value = post.title;

          editStatus = true;
          id = doc.id;
        })
      })
    });
 
  })

  onAuthStateChanged(auth, (user) => {
    if (user != null ) {
      wallNameUser.textContent = user.displayName;
      emailUser.textContent = user.email; 
    }
  })


  header.append(imgLogoWall, navSection);
  navSection.append(buttonWall, buttonExit)
  nameEmailUser.append(wallNameUser, emailUser);
  infoUser.append(nameEmailUser);
  infoUserWall.append( infoUser, inputPost, buttonPost);
  wallPageContainer.append(infoUserWall, sectionPost)
  containWall.append(header, wallPageContainer);

  return containWall;
};
