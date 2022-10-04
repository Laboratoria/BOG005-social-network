import { onNavigate } from '../src/main.js';
jest.mock('../src/lib/firebase.js');



const mockRegister = () => {
    const containRegis = document.createElement('section');
    const textRegis = document.createElement('h1');
    textRegis.textContent = 'Hola Registro';
    containRegis.append(textRegis);
    return containRegis;
};

const mockRoutes = {
    '/register': mockRegister(),
  };


describe('Test de función on Navigate', () => {
    it('Mostrando la prueba del template de registro', () => {
        document.body.innerHTML = `<div id="root"></div>`;
        onNavigate('/register', mockRoutes)
        expect(document.getElementById('root').textContent).toEqual('Hola Registro');
    })
});
