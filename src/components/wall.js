import { onNavigate } from '../main.js';
import { loginOut, savePost, readPost, deletePost, readPost2, editPostUpdate, likesPost } from '../lib/index.js';
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


  const written = document.createElement('textarea');/// imput user
  written.setAttribute('id', 'written');
  const buttonPost = document.createElement('button');// boton guardar post
  buttonPost.setAttribute('class', 'btn');
  buttonPost.textContent = 'guardar post';
  buttonPost.setAttribute('id', 'buttonpost');
  let contWall = document.createElement('section');/// contenedor de post
  /////////////////////anidar////////////////
  option1.append(buttonwall);
  option2.append(buttonprofile);
  option3.append(buttonsingout);
  optionslist.append(option1, option2, option3);
  menu.append(optionslist);
  header.append(imgLogomini, menu);
  post.append(written, buttonPost, contWall);
  wallContent.append(header, post);

  ///////////////////////////////////////////funciones//////////////////////////////////////////
  buttonPost.addEventListener('click', () => savePost(written.value, []));

  const arrayRead = readPost();// array de docs que contiene obj post y nombres
  readPost2((elementos) => {
    contWall.textContent = "";// parte vacia
    elementos.forEach((doc) => {
      console.log(doc.data());

      const writer = document.createElement('h3');
      writer.textContent = doc.data().second;
      writer.setAttribute('id', 'writer');
      const post_n = document.createElement('article'); // cree un nodo seccition
      post_n.setAttribute('class', 'posts');
      const buttonDelete = document.createElement('button');// boton guardar post
      buttonDelete.textContent = 'Eliminar post';
      buttonDelete.setAttribute('class', 'btnDelete');
      buttonDelete.setAttribute('data-info-id', `${doc.id}`)
      // const buttonEdit = document.createElement('button');// boton guardar post
      // buttonEdit.setAttribute('class', 'buttonEdit');
      // buttonEdit.textContent = 'Editar post';

      /*********botoon me gusta */
      const buttonLike = document.createElement('button');// boton guardar post
      buttonLike.textContent = 'me gusta';
      buttonLike.setAttribute('class', 'btnlike');
      buttonLike.setAttribute('data-info-id', `${doc.id}`)
      const countLike = document.createElement('p');
      countLike.setAttribute('class', 'countBtnlike');
      countLike.setAttribute('data-info-id', `${doc.id}`)
      let userLikes = doc.data().likesCount;
      countLike.textContent = userLikes.length;

      /**************************** MODAL *****************************************/
      const a = document.createElement("a");
      a.href = `#${doc.id}`//doc.id
      a.textContent = "Editar";
      a.classList.add("ButtonModal");
      const sectionEdit = document.createElement("section");
      sectionEdit.id = doc.id
      sectionEdit.classList.add("modalDialog");

      const close = document.createElement("a")
      close.textContent = "X"
      close.classList.add("close")
      close.href = "#close"

      const textAreaEdit = document.createElement("textarea")
      textAreaEdit.value = doc.data().first
      const saveChangeEdit = document.createElement("button")
      saveChangeEdit.textContent = "Guardar"
      sectionEdit.append(close, textAreaEdit, saveChangeEdit)

      post_n.textContent = doc.data().first // coloque el contenido del post dentro del section
      post_n.append(buttonDelete, a, buttonLike, countLike);
      contWall.append(writer, post_n, sectionEdit);

      return contWall
    })
    //// funcion eliminar post
    const buttonsDelete = document.querySelectorAll('.btnDelete')
    buttonsDelete.forEach((button_i) => {
      button_i.addEventListener('click', (event) => {
        deletePost(event.target.dataset.infoId);
      });
    })

    ///// funcion editar post//// descomentar
    // const buttonsEdit = document.querySelectorAll('.buttonEdit')
    // //console.log(buttonsEdit);
    // buttonsEdit.forEach((btnEdit)=>{
    //   btnEdit.addEventListener('click', (event) => {
    //     //console.log(event)
    //     editPostUpdate(btnEdit.value, "hola mundo") // id y texto que reemplaza
    //   });
    // });

    //////////////////FUNCION LIKE//////////
    const buttonslike = document.querySelectorAll('.btnlike')
    buttonslike.forEach((btnlike) => {
      btnlike.addEventListener('click', (event) => {
        console.log("like");
        likesPost(event.target.dataset.infoId);
      });
    });
  })
  readPost2(arrayRead);

  ///////////////funcion cerrar sesión/////////////////////////////////
  buttonsingout.addEventListener('click', () => {
    loginOut().then(() => {
      onNavigate('/');
    }).catch((error) => {
      console.log("there are an error: " + error)
    });
  });
  return wallContent;
};
