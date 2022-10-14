//import { register } from '../../src/components/register.js';
import { auth } from '../../src/lib/index.js';
import { onNavigate } from '../../src/main.js'; /// funcion de la vista register

jest.mock('../../src/lib/index.js');               

////////////////test de renderizacion de funcion////////////////////////////
const mockRegister = ()=> {/// mock de funcion register
  const containRegis = document.createElement('section');
  const textRegis = document.createElement('h1');
  textRegis.textContent = 'Hola Registro';
  const buttonSign = document.createElement('button');
  buttonSign.className = 'buttonEnter';
  buttonSign.textContent = 'Registrarse';
  containRegis.append(textRegis, buttonSign);
  return containRegis;
};

const mockRoutes ={/// mock de objeto rutas
  '/register': mockRegister(),
}

describe ('', ()=> {
  it('',()=> {
    document.body.innerHTML = `<div id="root"></div>`; // contenedor general en un berfore ALL???
    onNavigate('/register', mockRoutes);
    const ppal = document.getElementById('root');
    expect(ppal.querySelector("h1").textContent).toEqual('Hola Registro');
  })
});

describe('test button Register', () => {
  it('Register Button', () => {
      document.body.innerHTML = `<section id='root'></section>`
      onNavigate('/register', mockRoutes);
      const ppal = document.getElementById('root');
      expect(ppal.querySelector(".buttonEnter").textContent).toEqual('Registrarse');
      expect(document.getElementById('root').textContent).toBeDefined();
      expect(mockRegister).not.toBeNull();
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

const createUserMock = jest.fn((email) => {
//console.log(email);
if (email === '' || email === 'sinarroba') {     ///////////email no valido
  return Promise.reject({ code: 'auth/invalid-email' });
} 
});

/////////////////////////////test interaccion////////////////////
test('test login real de login a registrarse ', () => { ///// testeo lo que renderiza luego de ....
  document.body.innerHTML = `<section id='root'></section>`
  onNavigate('/register');
  const ppal = document.getElementById('root');
  expect(ppal.querySelector(".buttonBack").textContent).toEqual('Regresar');
  const buttonBack = ppal.querySelector(".buttonBack");
  ///window.confirm = () => true; /// ensayo
  buttonBack.dispatchEvent(new Event("click"))
  expect(ppal.querySelector('.buttonBack')).toBeTruthy();
  
})