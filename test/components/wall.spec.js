// import { wall } from '../../src/components/wall.js';
//import { auth } from '../../src/lib/firebase.js';
import { onNavigate } from '../../src/main.js'; /// funcion de la vista register

jest.mock('../../src/lib/index.js');      

////////////////test de renderizacion de funcion////////////////////////////
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
  
  
  describe ('test wall', ()=> {
    it('test ruteo wall h1',()=> {
      document.body.innerHTML = `<div id="root"></div>`; // contenedor general en un berfore ALL???
      onNavigate('/Wall', mockRoutes);
      const ppal = document.getElementById('root');
      expect(ppal.querySelector("h1").textContent).toEqual('Hola Wall');
      expect(ppal.querySelector("button").textContent).toEqual('guardar post');
      expect(document.getElementById('root').textContent).toBeDefined();
      expect(mockWall).not.toBeNull();
  })
   

/*     it('test button likes wall ', () => { ///// testeo lo que renderiza luego de ....
        document.body.innerHTML = `<section id='root'></section>`
        onNavigate('/wall');
        const ppal = document.getElementById('root');
        expect(ppal.querySelector("#buttonwall").textContent).toEqual('Muro');
        const botonGuardar = ppal.querySelector("#buttonpost");
        ///window.confirm = () => true; /// ensayo
        botonGuardar.dispatchEvent(new Event("click"))
        expect(ppal.querySelector(".textAreaEdit")).toBeTruthy();
        
    }) */
    
  }) 

  


