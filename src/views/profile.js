import { onNavigate } from '../main.js';
import {
  loginOut, savePostFirestore, auth, onSnapshot, onAuthStateChanged,
  updateDataPost, deletePost, postUserProfile, getOnePost, profileUser, 
} from '../lib/firebase.js';

export const profile = () => {
  const containProfile = document.createElement('section');
  containProfile.classList.add('viewProfile');
  // header de vista profile
  const header = document.createElement('section');
  header.classList.add('header');
  const imgHeader = document.createElement('section');
  imgHeader.classList.add('imgHeader');
  const imgLogoProfile = document.createElement('img');
  imgLogoProfile.setAttribute('srcset', './image/danaYogaLogo.png');
  imgLogoProfile.classList.add('imgLogoProfile');
  // menú de navegación
  const navSection = document.createElement('section');
  navSection.classList.add('sectionNav');
  const buttonWall = document.createElement('button');
  buttonWall.classList.add('btnNav');
  buttonWall.textContent = 'MURO';
  const buttonProfile = document.createElement('button');
  buttonProfile.classList.add('btnNav');
  buttonProfile.textContent = 'PERFIL';
  const buttonExit = document.createElement('button');
  buttonExit.classList.add('btnNav');
  buttonExit.textContent = 'SALIR';

  buttonWall.addEventListener('click', () => {
    onNavigate('/wall');
  });

  buttonProfile.addEventListener('click', () => {
    onNavigate('/profile');
  });

  buttonExit.addEventListener('click', () => {
    loginOut.then(() => {
      console.log('Usuario desconectado');
      onNavigate('/');
    }).catch((error) => {
      console.log('error');
    });
  });

  // Contenedor general del perfil
  const profilePageContainer = document.createElement('section');
  profilePageContainer.classList.add('profilePageContainer');

  // sección de usuario
  const infoUserProfile = document.createElement('section');
  infoUserProfile.classList.add('sectionProfileUser');
  const infoUser = document.createElement('div');
  infoUser.classList.add('sectionUser');
  const nameEmailUser = document.createElement('div');
  nameEmailUser.classList.add('nameEmailUser');
  const profileNameUser = document.createElement('h2');
  profileNameUser.textContent = auth.displayName;
  profileNameUser.setAttribute('id', 'nameUser');
  const emailUser = document.createElement('h3');
  emailUser.setAttribute('id', 'emailUser');
  emailUser.textContent = auth.email;


  // sección de post
  const sectionPostProfile = document.createElement('section');
  sectionPostProfile.classList.add('sectionPost');
  const formPost = document.createElement('form');
  // texarea de creación del post
  const inputPost = document.createElement('textarea');
  inputPost.setAttribute('id', 'textPost');
  inputPost.classList.add('inputPost');
  inputPost.setAttribute('placeholder', 'Crea tu publicación aqui...');
  inputPost.setAttribute('required', '');
  // botón publicar, incluir
  const buttonPost = document.createElement('button');
  buttonPost.setAttribute('id', 'buttonPost');
  buttonPost.classList.add('btnPost');
  buttonPost.textContent = 'Publicar';
  const postDoUser = document.createElement('p');
  postDoUser.setAttribute('id', 'textPostUser');
  //
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
  function createPost() {
    savePost();
    savePostFirestore(inputPost.value).then(() => {
      console.log('texto guardado')
    }).catch((error) => {
      console.log(error.message)
    })
    getPost();
    inputPost.value = '';
  }
  buttonPost.addEventListener('click', createPost);

  // Colección de todos los post
  const sectionPost = document.createElement('section');
  sectionPost.classList.add('sectionPost');
  // función para traer los post de firebase al muro
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
      // console.log(doc)
       
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
      // const sectionBtnLike = document.createElement('section');
      // sectionBtnLike.classList.add('sectionBtn');
      const buttonLike = document.createElement('button');
      buttonLike.setAttribute('id', 'buttonLike');
      buttonLike.setAttribute('data', doc.id);
      buttonLike.setAttribute('like', doc.data().like);
      buttonLike.classList.add('btnLike');
      buttonLike.textContent = 'Me gusta';
      if (doc.data().like == true) {
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
        })
      })
    });


    
  })

  onAuthStateChanged(auth, (user) => {
    if (user != null ) {
      profileNameUser.textContent = user.displayName;
      emailUser.textContent = user.email; 
    }
  })


  const user = postUserProfile();

  header.append(imgLogoProfile, navSection);
  navSection.append(buttonWall, buttonProfile, buttonExit)
  nameEmailUser.append(profileNameUser, emailUser);
  infoUser.append(nameEmailUser);
  infoUserProfile.append( infoUser, inputPost, buttonPost);
  profilePageContainer.append(infoUserProfile, sectionPost)
  containProfile.append(header, profilePageContainer);

  return containProfile;
};
