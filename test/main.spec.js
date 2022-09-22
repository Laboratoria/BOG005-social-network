import { onNavigate } from '../src/main.js'; /// funcion de la vista register
//import { on } from '../src/lib/index.js'          ///  funcion alias basada en firebase
//jest.mock('../src/lib/__mocks__/index.js');               /// mock que reemplaza a funcion alias basada en firebase solo para testear

describe('Test for the onnavigate function', () => {
    it('Should change to register ', () => {
      /* document.body.innerHTML = `<div id="root"></div>`
      const vista = onNavigate('/register');
      window.location.pathname = "/register";
      //expect(vista.getElementsByClassName('btn registration').innerHTML).toBe('Registrarse');
      expect(vista.querySelector('#btnRegistration').textContent).toBe('Registrarse'); */

      //expect(typeof onNavigate).toBe('function');
    });
});