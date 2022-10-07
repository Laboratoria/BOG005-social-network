
import { wall } from "../src/lib/page/wall.js";
import { getPost } from "../src/firebase/firestoreFirebase.js"
jest.mock('../src/firebase/firestoreFirebase.js');
jest.mock('../src/firebase/authenticationFirebase.js');


describe('Existe ButtonP', () => {
    it('Existe el boton publicar', () => {
     document.body.innerHTML = '<div id="contentPageId"></div>'
     const main = document.querySelector('#contentPageId')
     main.innerHTML = wall();
      
      //Existe el textArea  
      expect(main.querySelector('#postContent')).toBeTruthy();
      //Existe el botton 
      expect(main.querySelector('#PostContentButton')).toBeTruthy();
      //Existe el contenedor de los post
      expect(main.querySelector('#postsContainerId')).toBeTruthy();
    
    });
  });

  describe('Verificar si el post se pinta cuando lo publico', ()=>{
  it('pinta un post en pantalla cuando hay un post', ()=>{
    document.body.innerHTML = '<div id="contentPageId"></div>'
    const main = document.querySelector('#contentPageId')
    main.innerHTML = wall();
    
    getPost();
  
      const postContainer = document.getElementById('postsContainerId')
      expect(postContainer).toBeTruthy();

  })
  })