import { register } from '../../src/components/register.js';
import { onNavigate } from '../../src/main.js'; /// funcion de la vista register

//import { createUser } from '../../src/lib/index.js';
jest.mock('../../src/lib/index.js');               /// mock que reemplaza a funcion alias basada en firebase solo para testear

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
    expect(document.getElementById('root').textContent).toEqual('Hola Registro');
  })
});

describe('test button Register', () => {
  it('Register Button', () => {
      document.body.innerHTML = `<section id='root'></section>`
      onNavigate('/register', mockRoutes);
      expect(document.getElementById('root').textContent).toEqual('Registrarse');
      expect(document.getElementById('root').textContent).toBeDefined();
      expect(mockRouteRegister).not.toBeNull();
  })
})