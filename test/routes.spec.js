 import { router } from '../src/lib/routes.js';
 jest.mock('../src/firebase/authenticationFirebase.js');
 jest.mock('../src/firebase/firestoreFirebase.js');


describe('router', () => {
  it('Debe llevarte al wall', () => {
   document.body.innerHTML = '<div id="contentPageId"></div>'
   const main = document.querySelector('#contentPageId')
    router('#wall');
    expect(main.querySelector('#textLogoWallId').textContent).toBe('CICLAPP');
  });
});

describe('router', () => {
  it('Debe llevarte a logín', () => {
   document.body.innerHTML = '<div id="contentPageId"></div>'
   
   const main = document.querySelector('#contentPageId')
    router('/userSignIn');
    expect(main.querySelector('#userSi').placeholder).toBe('Ingresa tu correo');
  });
});
