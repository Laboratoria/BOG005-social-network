import { buttonP, onGetPost, savePost } from "../src/firebase/firestoreFirebase";
import { wall } from "../src/lib/page/wall.js";
import { eventHandler } from "../src/lib/routes";
jest.mock('../src/firebase/firestoreFirebase.js');
jest.mock('../src/firebase/authenticationFirebase.js');



describe('buttonP', () => {
    it.only('Se debe publicar un post', () => {
     document.body.innerHTML = '<div id="contentPageId"></div>'
    //  document.innerHTML = '<div id="postsContainerId"></div>'
     const main = document.querySelector('#contentPageId')
     main.innerHTML = wall();
      
      expect(main.querySelector('#postContent')).toBeTruthy();
      expect(main.querySelector('#PostContentButton')).toBeTruthy();
      expect(main.querySelector('#postsContainerId')).toBeTruthy();
      // expect(main.querySelector('#allPosts')).toBeTruthy();
      // eventHandler('/wall');
      // document.getElementById('postContent') 
      buttonP('/wall');
      onGetPost();
      document.getElementById('prueba').click();
      // console.log('tamaño', document.getElementById('postsContainerId').children.length);
      expect(document.getElementById('PostContentButton').textContent.trim()).toEqual('Publicar');
      setTimeout(()=>{ 
        // expect(document.querySelector('#allPosts')).toBeTruthy();
        
      },5000)
  
    });
  });
