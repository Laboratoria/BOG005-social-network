import { wall } from "../src/lib/page/wall.js"
jest.mock('../src/firebase/firestoreFirebase.js');
jest.mock('../src/firebase/authenticationFirebase.js');

describe('buttonP', () => {
    it('Que existan el contenedor de los post, el botón publicar', () => {
     document.body.innerHTML = '<div id="contentPageId"></div>'
     const main = document.querySelector('#contentPageId')
     main.innerHTML = wall();
      
      expect(main.querySelector('#postContent')).toBeTruthy();
      expect(main.querySelector('#PostContentButton')).toBeTruthy();
      expect(main.querySelector('#postsContainerId')).toBeTruthy();
      
    });
  });
