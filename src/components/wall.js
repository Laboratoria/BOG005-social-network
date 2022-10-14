import { onNavigate } from '../main.js';
import { loginOut, savePost, readPost, deletePost, readPost2, editPostUpdate, likesPost, /* onAuthStateChanged, auth */} from '../lib/index.js';
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
  imgLogomini.setAttribute('srcset', './image/LogoLady.png');
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

  
  wallContent.setAttribute('id', 'wallContent');
  const written = document.createElement('textarea');/// imput user
  written.setAttribute('placeholder', '¿Que estás pensando?');
  written.setAttribute('id', 'written');
  const buttonPost = document.createElement('button');// boton guardar post
  buttonPost.setAttribute('class', 'btn');
  buttonPost.textContent = '';
  buttonPost.setAttribute('id', 'buttonpost');
  let contWall = document.createElement('section');/// contenedor de post
  contWall.setAttribute('class', 'contWall');
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
  buttonPost.addEventListener('click', () => {
    if(written.value == ""){
      alert('por favor colocar una entrada válida')
    }
    else {
      savePost(written.value, [])
    }
  
  });

  const arrayRead = readPost();// array de docs que contiene obj post y nombres
  readPost2((elementos) => {
    contWall.textContent = "";// parte vacia
    elementos.forEach((doc) => {
      console.log(doc.data());

      const writer = document.createElement('h4');
      writer.textContent = doc.data().second;
      writer.setAttribute('id', 'writer');
      const postOne = document.createElement('article'); // cree un nodo seccition todo el post
      postOne.setAttribute('class', 'postOne');
      const postOneButtons = document.createElement('article'); // cree un nodo seccition escrito del post
      postOneButtons.setAttribute('class', 'postOneButtons');
      const post_n = document.createElement('article'); // cree un nodo seccition escrito del post
      post_n.setAttribute('class', 'posts');
      const buttonDelete = document.createElement('button');// boton guardar post
      buttonDelete.textContent = '';
      buttonDelete.setAttribute('class', 'btnDelete');
      buttonDelete.setAttribute('data-info-id', `${doc.id}`)


      /*********botoon me gusta **************************************************/
      const buttonLike = document.createElement('button');// boton guardar post
      buttonLike.textContent = '';
      buttonLike.setAttribute('class', 'btnlike');
      buttonLike.setAttribute('data-info-id', `${doc.id}`)
      const countLike = document.createElement('p');
      countLike.setAttribute('class', 'countBtnlike');
      countLike.setAttribute('data-info-id', `${doc.id}`)
      let userLikes = doc.data().likesCount;
      countLike.textContent = userLikes.length;
      console.log(userLikes);
      console.log(typeof userLikes, 'este es el console');

      /**************************** MODAL *****************************************/
      const a = document.createElement("a");
      a.href = `#${doc.id}`//doc.id
      a.textContent = " ";
      a.classList.add("ButtonModal");
      const sectionEdit = document.createElement("section");
      sectionEdit.id = doc.id
      sectionEdit.classList.add("modalDialog");

      const close = document.createElement("a")
      close.textContent = ""
      close.classList.add("close")
      close.href = "#close"

      const textAreaEdit = document.createElement("textarea")
    
      textAreaEdit.value = doc.data().first
      textAreaEdit.setAttribute('class', 'textAreaEdit');
      //textAreaEdit.value = doc.id

      const saveChangeEdit = document.createElement("button")
      saveChangeEdit.setAttribute('class', 'buttonEdit');
      saveChangeEdit.textContent = "";
      saveChangeEdit.value = doc.id

      sectionEdit.append(close, textAreaEdit, saveChangeEdit)
      post_n.textContent = doc.data().first // coloque el contenido del post dentro del section
      postOneButtons.append(buttonDelete, a, buttonLike, countLike);
      postOne.append(writer, post_n, postOneButtons);
      contWall.append( postOne, sectionEdit);
/////**********************finaliza modal******************************* */
      return contWall
    })
    //////////////////////funcion eliminar post////////////////
    const buttonsDelete = document.querySelectorAll('.btnDelete')
    buttonsDelete.forEach((button_i) => {
      button_i.addEventListener('click', (event) => {
        if (confirm('¿Deseas eliminar el post?')) {
          deletePost(event.target.dataset.infoId);
        }
        
      });
    })

    ////////////////////// funcion editar post////////////
    const buttonsEdit = document.querySelectorAll('.buttonEdit')
    buttonsEdit.forEach((btnEdit)=>{
      btnEdit.addEventListener('click', (event) => {
        const s =document.getElementById(`${event.target.value}`);// seccion de modal
        const t =s.querySelector('textarea');
        console.log(s, t.value); /// obtengo un id
        editPostUpdate(btnEdit.value, t.value ) // id y texto que reemplaza
      });
    });

    //////////////////////FUNCION LIKE//////////
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

    if (confirm('¿Deseas cerrar sesión?')) {
    loginOut().then(() => {
      onNavigate('/');
    }).catch((error) => {
      console.log("there are an error: " + error)
    });
  }

  });

/*   onAuthStateChanged(auth, (user) => { /// dice si estamos conectados///// PREGUNTAR!!!!!
    if (user != null) {
      console.log(user, 'Usuario Conectado detectado en wall' );
    } else {
      console.log('No se encuentra el usuario detectado en wall');
    }
    
  }); */

  //VerificSingin()/* .then((user) => { /// dice si estamos conectados///// PREGUNTAR!!!!!
     // console.log(user,'Usuario detectado en wall');
      //loginUser.email = user.email; /// añado atributos a objeto user */
/* }) *//* .catch ({
  console.log('Usuario Conectado');

  }) */
  // if(!emailUser){   ////VerificSingin()
  //   return wallContent;
  // }
  // else {
  //   alert('Por favor ingrese su usuario y credenciales o registrese en caso de no tener una cuenta')
  // }
  
  return wallContent;
  
};

