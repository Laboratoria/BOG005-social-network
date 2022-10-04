import { onNavigate } from '../main.js';
import {
  loginOut, postUserProfile, onSnapshot,
  updateDataPost, deletePost, 
} from '../lib/firebase.js';

export const wall = () => {
  const containWall = document.createElement('section');
  containWall.classList.add('viewWall');
  // header muro
  const header = document.createElement('section');
  header.classList.add('header');
  const imgHeader = document.createElement('section');
  imgHeader.classList.add('imgHeader');
  const imgLogoProfile = document.createElement('img');
  imgLogoProfile.setAttribute('srcset', './image/danaYogaLogo.png');
  imgLogoProfile.classList.add('imgLogoProfile');
  // menú header
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
  // funciones de los botones de navegación
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

  // Colección de todos los post
  const sectionPost = document.createElement('section');
  sectionPost.classList.add('sectionPost');
  const formPost = document.createElement('form');
  // función para traer los post de firebase al muro
  onSnapshot(postUserProfile(), (querySnapShot) => {
    if (sectionPost.hasChildNodes()) {
      sectionPost.innerHTML = "";
    }
    querySnapShot.forEach(doc => {
      const cardPost = document.createElement('article');
      cardPost.classList.add('cardPost');
      cardPost.classList.add('id', 'containerPost')
      const postedUser = document.createElement('p');
      postedUser.textContent = doc.data().title;
      console.log(doc.data())
      //botón de like
      const buttonLike = document.createElement('button');
      buttonLike.setAttribute('id', 'buttonLike');
      buttonLike.setAttribute('data', doc.id);
      buttonLike.setAttribute('like', doc.data().like);
      buttonLike.classList.add('btnLike');
      buttonLike.textContent = 'Me gusta';
      if (doc.data().like == true) {
        buttonLike.style.backgroundColor = "green";
      }

      cardPost.append(postedUser, buttonLike);
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

 

  })


  header.append(imgLogoProfile, navSection);
  navSection.append(buttonWall, buttonProfile, buttonExit);
  containWall.append(header, sectionPost);

  return containWall;
};
