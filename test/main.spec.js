
import { onNavigate } from '../src/main.js'; /// funcion de la vista register
import { register } from "../src/components/register.js";
//import { login } from '../src/main.js'
 //const initializeApp = () => Promise.resolve({}); 
//import { on } from '../src/lib/index.js'          ///  funcion alias basada en firebase
jest.mock('../src/lib/index.js');               /// mock que reemplaza a funcion alias basada en firebase solo para testear

describe('Test for the onnavigate function', () => {
  beforeAll(() => {
    document.body.textContent = '<div id="root"></div>'; // contenedor
    /* window.history.pushState(
      {}, // estado vacio
      "/register", // title
      window.location.origin + "/register" // URL + (Ruta) */
    //);
  });
/*   beforeEach(() => {
    document.getElementById("root").innerHTML = "";
    document.getElementById("root").appendChild(register());
  }); */
    it('Should change to register ', () => {
      onNavigate("");
      
      /*const vista = onNavigate('/register');
      window.location.pathname = "/register";
      //expect(vista.getElementsByClassName('btn registration').innerHTML).toBe('Registrarse');
      expect(vista.querySelector('#btnRegistration').textContent).toBe('Registrarse'); */

      //expect(typeof onNavigate).toBe('function');
    });
});