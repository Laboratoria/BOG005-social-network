/**
 * @jest-environment jsdom
 */
import { onNavigate } from '../src/main.js';

jest.mock('../src/lib/firebase.js');
jest.mock('../src/lib/firestore.js');

function elementRoot() {
  if (document.getElementById('root') == null) {
    document.body.innerHTML = '<div id="root"> </div>';
  }
}
elementRoot();

const mockBienvenida = () => {
  const contenedorBienvenida = document.createElement('div');
  contenedorBienvenida.innerHTML = '/imagenes/Recurso 1.png';
  return contenedorBienvenida;
};
const contenedorLogin = () => {
  const contenedorLogin = document.createElement('div');
  contenedorLogin.innerHTML = '/imagenes/Recurso 22.png';
  return contenedorLogin;
};

const contenedorRegistro = () => {
  const contenedorRegistro = document.createElement('div');
  contenedorRegistro.innerHTML = 'Regístrate';
  return contenedorRegistro;
};

const contenedorMuro = () => {
  const contenedorMuro = document.createElement('div');
  contenedorMuro.innerHTML = "Crear publicación";
  return contenedorMuro;
};

const mockRoutes1 = {
  '/': mockBienvenida,
  '/login': contenedorLogin,
  '/registro': contenedorRegistro,
  '/muro': contenedorMuro,
  };

describe('onNavigate', () => {
  it('pintar bienvenida', () => {
    const div = '<div id="root"></div>';
    console.log(div);
    onNavigate('/', mockRoutes1);
    expect(document.getElementById('root').textContent).toEqual(
      '/imagenes/Recurso 1.png',
     );
  });

  it('pintar login', () => {
    const div = '<div id="root"></div>';
    console.log(div);
    onNavigate('/login', mockRoutes1);
    expect(document.getElementById('root').textContent).toEqual(
      '/imagenes/Recurso 22.png',
     );
  }); 

  it('pintar registro', () => {
    const div = '<div id="root"></div>';
    console.log(div);
    onNavigate('/registro', mockRoutes1);
    expect(document.getElementById('root').textContent).toEqual(
      'Regístrate',
     );
  }); 

  it('pintar muro', () => {
    const div = '<div id="root"></div>';
    console.log(div);
    onNavigate('/muro', mockRoutes1);
       expect(document.getElementById('root').textContent).toEqual(
        "Crear publicación",
     );
  }); 
});

