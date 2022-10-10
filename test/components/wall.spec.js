import { wall } from '../../src/components/wall.js';
import { readPost } from '../../src/lib/firebase.js';

jest.mock('../../src/lib/index.js');               /// mock que reemplaza a funcion alias basada en firebase solo para testear

const mockWall = ()=> {/// mock de funcion Wall
    const containWall = document.createElement('section');
    const textWall = document.createElement('h1');
    textWall.textContent = 'Hola Wall';
    const buttonWall = document.createElement('button');
    buttonWall.className = 'guardarPost';
    buttonWall.textContent = 'guardar post';
    containWall.append(textWall, buttonWall);
    return containWall;
  };
  
  const mockRoutes ={/// mock de objeto rutas
    '/Wall': mockWall(),
  }
  
  
  describe ('', ()=> {
    it('',()=> {
      document.body.innerHTML = `<div id="root"></div>`; // contenedor general en un berfore ALL???
      onNavigate('/Wall', mockRoutes);
      expect(document.getElementById('root').textContent).toEqual('Hola Wall');
    })
  });
  
  describe('test button Wall', () => {
    it('Wall Button', () => {
        document.body.innerHTML = `<section id='root'></section>`
        onNavigate('/Wall', mockRoutes);
        expect(document.getElementById('root').textContent).toEqual('guardarPost');
        expect(document.getElementById('root').textContent).toBeDefined();
        expect(mockRouteRegister).not.toBeNull();
    })
  })


test('readPost is not Null', () => {
    expect(readPost).not.toBeNull();
})

test('readPost is a Function', () => {
    expect(typeof readPost).toBe('function')
})