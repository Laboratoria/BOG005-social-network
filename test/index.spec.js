import { register } from '../src/lib/firebase-auth.js';
import { auth, createUser, createUserWithEmailAndPassword } from '../src/lib/index.js';

jest.mock('../src/lib/index.js', () => {
  return {
    auth: jest.fn(() => {  // función jest.fn crea una función para jest (es de Jest)
      return { auth: 'TEST' }
    }),

    createUserWithEmailAndPassword: jest.fn((email, password) => {
      if (!email || !password) {
        throw new Error('ERROR');
      }
      return Promise.resolve({ user: 'admin' });
    }),

  }
})

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
});
