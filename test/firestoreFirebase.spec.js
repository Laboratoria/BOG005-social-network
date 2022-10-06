import { buttonP } from "../src/firebase/firestoreFirebase";
import { wall } from "../src/lib/page/wall.js";
import { eventHandler } from "../src/lib/routes";
jest.mock('../src/firebase/firestoreFirebase.js');
jest.mock('../src/firebase/authenticationFirebase.js');



describe('buttonP', () => {
    it('Se debe publicar un post', () => {
     document.body.innerHTML = '<div id="contentPageId"></div>'
     const main = document.querySelector('#contentPageId')
     main.innerHTML = wall();
      
      expect(main.querySelector('#postContent')).toBeTruthy();
      expect(main.querySelector('#PostContentButton')).toBeTruthy();
      expect(main.querySelector('#postsContainerId')).toBeTruthy();
      eventHandler('/wall');
      document.getElementById('postContent')
      buttonP();
      document.getElementById('PostContentButton').click();
        expect(document.querySelector('#postContent')).not.toBeNull();
  
    });
  });
