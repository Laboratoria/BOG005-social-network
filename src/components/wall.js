import { onNavigate } from '../main.js';
import { loginOut, savePost, readPost } from '../lib/index.js';
export const wall = () => {
  const wallContent = document.createElement('section');
  wallContent.setAttribute('id', 'wallContent');
 

  const post = document.createElement('article');
  post.setAttribute('id', 'post');
  const header= document.createElement('header');
  header.setAttribute('id', 'header');
  const menu = document.createElement('nav');
  menu.setAttribute('id', 'menu');
  const optionslist = document.createElement('ul');
  optionslist.setAttribute('id', 'optionslist');
  const option1 = document.createElement('li');
  option1.setAttribute('id', 'option1');
  const option2 = document.createElement('li');
  option2.setAttribute('id', 'option2');
  const option3 = document.createElement('li');
  option3.setAttribute('id', 'option3');
/*   const towall = document.createElement('a');
  towall.setAttribute('id', 'towall');
  const toprofile = document.createElement('a');
  toprofile.setAttribute('id', 'toprofile');
  const tosingout = document.createElement('a');
  tosingout.setAttribute('id', 'tosingout');
 */
  const writer = document.createElement('h3');
  writer.textContent = 'pepito';
  writer.setAttribute('id', 'writer');
  const written = document.createElement('textarea');/// imput user
  written.setAttribute('id', 'written');

  const imgLogomini = document.createElement('img');
  imgLogomini.setAttribute('srcset', './image/ladyCodeLogo.jpg');
  imgLogomini.setAttribute('id', 'imgLogomini');

  const buttonwall = document.createElement('button');
  buttonwall.textContent = 'Muro';
  buttonwall.setAttribute('id', 'buttonwall');
  const buttonsingout = document.createElement('button');
  buttonsingout.textContent = 'Salir';
  buttonsingout.setAttribute('id', 'buttonsingout');
  const buttonprofile = document.createElement('button');
  buttonprofile.textContent = 'Perfil';
  buttonprofile.setAttribute('id', 'buttonprofile');

  const buttonPost = document.createElement('button');// boton guardar post
  buttonPost.textContent = 'guardar post';
  buttonPost.setAttribute('id', 'buttonpost');

   buttonsingout.addEventListener('click', () => {
  
    loginOut().then(() => {
      onNavigate('/');
    }).catch((error) => {
     console.log("there are an error: "+ error)
    });
  }); 

  option1.append(buttonwall);
  option2.append(buttonprofile);
  option3.append(buttonsingout);
  optionslist.append(option1, option2, option3);
  menu.append(optionslist);
  header.append(imgLogomini , menu);
  post.append(writer, written,buttonPost);
  wallContent.append( header ,  post);

savePost();
readPost();
  return wallContent;
};
