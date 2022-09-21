import { onNavigate } from '../main.js';
//import { loginOut } from '../lib/index.js';
export const wall = () => {
  const wallContent = document.createElement('section');
  wallContent.setAttribute('id', 'wallContent');
 

  const post = document.createElement('article');
  post.setAttribute('id', 'post');
  const menu = document.createElement('nav');
  menu.setAttribute('id', 'menu');
  const profile = document.createElement('li');
  profile.setAttribute('id', 'menu');

  const writer = document.createElement('h3');
  writer.textContent = 'pepito';
  writer.setAttribute('id', 'writer');
  const written = document.createElement('h4');
  written.textContent = 'Hola, les comparto el link de mi play list de trabajo...';
  written.setAttribute('id', 'written');

  const imgLogomini = document.createElement('img');
  imgLogomini.setAttribute('srcset', './image/ladyCodeLogo.jpg');
  imgLogomini.setAttribute('id', 'imgLogomini');


  const buttonsingout = document.createElement('button');
  buttonsingout.textContent = 'Salir';
  buttonsingout.setAttribute('id', 'buttonsingout');
  const buttonprofile = document.createElement('button');
  buttonprofile.textContent = 'Perfil';
  buttonprofile.setAttribute('id', 'buttonprofile');

   buttonsingout.addEventListener('click', () => {
    onNavigate('/login');
  }); 


 /*  loginOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  div.append(title, button);
  return div;
 */post.append(writer, written);
  wallContent.append( imgLogomini , buttonprofile, buttonsingout, post);

  return wallContent;
};
