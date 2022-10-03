import { onNavigate } from '../main.js';
import { loginOut, savePost, readPost, deletePost, readPost2 } from '../lib/index.js';
export const wall = () => {
  const wallContent = document.createElement('section');
  wallContent.setAttribute('id', 'wallContent');


  const post = document.createElement('article');
  post.setAttribute('id', 'post');
  const header = document.createElement('header');
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

  buttonPost.addEventListener('click', () => savePost(written.value));

  let contWall = document.createElement('section');/// contenedor de post
  contWall.textContent = "";// parte vacia

  option1.append(buttonwall);
  option2.append(buttonprofile);
  option3.append(buttonsingout);
  optionslist.append(option1, option2, option3);
  menu.append(optionslist);
  header.append(imgLogomini, menu);
  post.append(writer, written, buttonPost, contWall);
  wallContent.append(header, post);


  readPost().then((arrayDocs) => { // lea el post (en el embudo lo ejecuta)
    arrayDocs.forEach((doc) => { // arraydocs es un array donde estan todos los post por cada elemento hacexxx en el for each
      console.log('usar para una clase', doc.id, doc.data());
      const post_n = document.createElement('article'); // cree un nodo seccition
      const buttonDelete = document.createElement('button');// boton guardar post
      buttonDelete.textContent = 'Eliminar post';
      buttonDelete.setAttribute('class', 'buttonDeleteclass');
      buttonDelete.setAttribute('data-info-id', `${doc.id}`)
      const buttonEdit = document.createElement('button');// boton guardar post
      buttonEdit.textContent = 'Editar post';
      post_n.textContent = doc.data().first /*doc.data()*/ // coloque el contenido del post dentro del section
      contWall.append(post_n, buttonDelete, buttonEdit);

      console.log(contWall);
    
      const buttonsDelete = document.querySelectorAll('.buttonDeleteclass')
      // const btnDelete = document.querySelector(`#${doc.id}`)
      //// funcion eliminar post
      buttonsDelete.forEach((button_i) => {
        button_i.addEventListener('click', (event) => {
          //const idGet =  ({ target: { dataset } }) => {console.log("AU");};
          console.log('event id: ', event.target.dataset.infoId);
          deletePost(event.target.dataset.infoId);
         
        });
      
      
        })
      return contWall
    })//.catch((e)=>{console.error("Error adding document: ", e);}) 



  });
const arrayRead = readPost();
 readPost2((elementos)=>{
elementos.forEach((doc)=>{
  console.log(doc.data());
})
 })
readPost2(arrayRead);

  /*  buttonsDelete.addEventListener('click', () => {deletePost(doc.id).then(()=> {console.log("ahora borra");
   }).catch((e)=>{
     console.error("Error : ", e);
   });
   });  */
  /// eliminar post



  buttonsingout.addEventListener('click', () => {
    loginOut().then(() => {
      onNavigate('/');
    }).catch((error) => {
      console.log("there are an error: " + error)
    });
  });

 

  return wallContent;
};
