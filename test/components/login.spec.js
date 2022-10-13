//import { login } from '../../src/components/login.js';
import { onNavigate } from '../../src/main.js'; /// funcion de la vista register
import { auth } from '../../src/lib/index.js';

jest.mock('../../src/lib/index.js');               

////////////////test de renderizacion de funcion////////////////////////////
const mockLogin = ()=> {/// mock de funcion Login
  const containLogin = document.createElement('section');
  const textLogin = document.createElement('h1');
  textLogin.textContent = 'Hola login';
  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'buttonEnter';
  buttonLogin.textContent = 'ingresar';
  containLogin.append(textLogin, buttonLogin);
  return containLogin;
};

const mockRoutes ={/// mock de objeto rutas
  '/Login': mockLogin(),
}


describe ('', ()=> {
  it('',()=> {
    document.body.innerHTML = `<div id="root"></div>`; // contenedor general en un berfore ALL???
    onNavigate('/Login', mockRoutes);
    const ppal = document.getElementById('root');
    expect(ppal.querySelector("h1").textContent).toEqual('Hola login');
  })
});

describe('test button Login', () => {
  it('Login Button', () => {
      document.body.innerHTML = `<section id='root'></section>`
      onNavigate('/Login', mockRoutes);
      const ppal = document.getElementById('root');
      expect(ppal.querySelector(".buttonEnter").textContent).toEqual('ingresar');
      expect(document.getElementById('root').textContent).toBeDefined();
      expect(mockLogin).not.toBeNull();
  })
})

///////////////////////////////////////////test de resolve promesas//////////////////
test('readPost is not Null', () => { //// testea funcion auth
  expect(auth).not.toBeNull();
})

test('readPost is a Function', () => { //// testea funcion auth
  expect(typeof auth).toBe('function')
})

/////////////////////////////////////////test de reject promesas/////////////////////////////////

const singUserMock = jest.fn((email) => {
//console.log(email);
if (email === '' || email === 'sinarroba') {     ///////////email no valido
  return Promise.reject({ code: 'auth/invalid-email' });
} 
});