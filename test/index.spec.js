import { register } from '../src/lib/firebase-auth.js';
import { auth, createUserWithEmailAndPassword  } from '../src/lib/index.js';

jest.mock('../src/lib/index.js', ()=> {
  return { auth: jest.fn(()=> { //función jest.fn crea una función para jest
    return { auth: 'TEST'}
    }),

    createUserWithEmailAndPassword: jest.fn((auth, email, password)=> {
    if(!email || !password){
      throw new Error('ERROR')
      }
      Promise.resolver({ user: 'admin' })
    }) 

  }
})

describe('Test for the register function', ()=> {
  const email = "admin@test.com";
  const pass = "admin456";

  it('Should call createUserWithEmailAndPassword', async()=> {
      await register(email, pass)
      expect(createUserWithEmailAndPassword).toHaveBeenCalled()
  })

}
)


describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
