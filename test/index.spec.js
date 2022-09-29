// importamos la funcion que vamos a testear
import { onNavigate } from '../src/main.js';

const mockTemplateWelcome = () => {
  const loginContainer = document.createElement('div');
  loginContainer.innerHTML = '<h1>Mock Template Login 1</h1>';
  return loginContainer;
};

const mockTemplateRegister = () => {
  const registerContainer = document.createElement('div');
  registerContainer.innerHTML = '<h1>Mock Template register 1</h1>';
  return registerContainer;
};

const mockRoutes = {
  '/': mockTemplateWelcome(), // cuando entre en '/' debe renderizar la página inicial
  '/register': mockTemplateRegister(),
};

describe('onNavigate', () => {
  it('test de onNavigate', () => {
    document.body.innerHTML = '<section id="root"></section>';
    onNavigate('/login', mockRoutes);
    // console.log('contenido: ', document.getElementById('root').textContent);
    expect(document.getElementById('root').textContent).toEqual('Mock Template Login 1');
  });
  it('test de onNavigate para Register', () => {
    document.body.innerHTML = '<section id="root"></section>';
    onNavigate('/register', mockRoutes);
    // console.log('contenido: ', document.getElementById('root').textContent);
    expect(document.getElementById('root').textContent.trim()).toEqual('Mock Template register 1');
  });
});
