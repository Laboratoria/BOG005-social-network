
import { onNavigate } from '../src/main.js'; /// funcion de la vista register
jest.mock( '../src/lib/index.js')// lleva al firebase mockeado

const mockRegister = ()=> {
  const containRegis = document.createElement('section');
  const textRegis = document.createElement('h1');
  textRegis.textContent = 'Hola Registro';
  containRegis.append(textRegis);
  return containRegis;
};
const mockRoutes ={
  '/register': mockRegister(),
}

describe ('', ()=> {
  it('',()=> {
    document.body.innerHTML = `<div id="root"></div>`; // contenedor general
    onNavigate('/register', mockRoutes);
    expect(document.getElementById('root').textContent).toEqual('Hola Registro');
  })
});