import { register } from '../../src/components/register.js';
//import { createUser } from '../../src/lib/index.js';
jest.mock('../../src/lib/index.js');               /// mock que reemplaza a funcion alias basada en firebase solo para testear

describe('Test for the register function', () => {
/*     const email = 'admin@test.com';
    const email1 = 'admintest.com'; /// email incorrecto
    const pass = 'admin456'; */
    beforeAll(()=> { document.body.innerHTML = `<div id="root"></div>`;
    });
  
    it('Should show registerview', () => {
      //document.getElementById('root').innerHTML = register();// revisar 
      document.getElementById('root').replaceChildren(register())/// revisar
      expect(document.getElementById('btnRegistration')).toBeTruthy();
      
    });
});