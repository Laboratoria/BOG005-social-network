import { router } from '../src/lib/routes.js';
jest.mock('../src/firebase/authenticationFirebase.js');
jest.mock('../src/firebase/firestoreFirebase.js');
jest.mock('../src/firebase/authenticationGoogle.js');

describe('router', () => {
  it('debería ser una función', () => {
    router();
    expect(typeof router).toBe('function');

  });
});