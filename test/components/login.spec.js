import { login } from '../../src/components/login.js';
import { onNavigate } from '../../src/main.js'; /// funcion de la vista register

jest.mock('../../src/lib/index.js');               /// mock que reemplaza a funcion alias basada en firebase solo para testear

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
    expect(document.getElementById('root').textContent).toEqual('Hola login');
  })
});

describe('test button Login', () => {
  it('Login Button', () => {
      document.body.innerHTML = `<section id='root'></section>`
      onNavigate('/Login', mockRoutes);
      expect(document.getElementById('root').textContent).toEqual('ingresar');
      expect(document.getElementById('root').textContent).toBeDefined();
      expect(mockRouteRegister).not.toBeNull();
  })
})