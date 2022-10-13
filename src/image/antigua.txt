import { register } from '../src/components/register.js';´
import { createUser } from '../src/lib/index.js'
jest.mock('../src/lib/index.js');//MOCK A TRAVES DEL EMBUDO
//jest.mock('../src/lib/index.js', () => {} /// en si mismo ya mock
/*   return {
/*     auth: jest.fn(() => {  // función jest.fn crea una función para jest (es de Jest)
      return { auth: 'TEST' }
    }), */

    //createUser: (email, password) => { // estoy declarando  un metodo// jest.fn empodera la funcion al añadirle metodos
      /* if (!email || !password) {
        throw new Error('ERROR');
      } */
     // return Promise.resolve({ user: 'admin' });
   // },

  //}
//}) */

describe('Test for the register function', () => {
  const email = 'admin@test.com';
  const email1 = 'admintest.com'; /// email incorrecto
  const pass = 'admin456';

  it('Should call createUserWithEmailAndPassword', async () => {
    await register(email, pass);// se revisa la ejecución de register
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });

  it('Should call createUserWithEmailAndPassword with the auth, email, and pass arguments', async () => {
    await register(email, pass);// se ejecuta register con argumentos
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, pass);
  });
  it('Should throw an error if executed without arguments', async () => {
    createUser.mockRejectedValueOnce(new Error('error'));
    
    try {
      await register();
    } catch (error) {
      expect(error).toMatch('ERROR');
    }
  });
  it('Should return the promise catch excecuted', async () => {
    await register(email1, pass);// espera que register tenga un valor + o -
    expect(createUser(email1, pass)).toBe('auth/invalid-email');// si se logró traer  then
  });


  it ('should navigate to home when clicking back button', ()=>{

  })
});
