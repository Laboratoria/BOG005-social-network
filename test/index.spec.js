// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });
import { onNavigate } from '../src/main.js';

jest.mock('../src/firebase/connection.js');
jest.mock('../src/firebase/auth.js');

const mockLogin = () => {
  const containerLogin = document.createElement('section');

  const title = document.createElement('h1');
  title.textContent = 'MOCK ENJOY THE WORLD';

  containerLogin.append(title);
  return containerLogin;
};

const mockRoutes = {
  '/login': mockLogin,
};

describe('onNavigate', () => {
  it('pintar el template', () => {
    document.body.innerHTML = '<div id="root"></div>';
    onNavigate('/login', mockRoutes);
    console.log('documento root: ', document.getElementById('root').textContent);
    expect(document.getElementById('root').textContent).toEqual('MOCK ENJOY THE WORLD');
  });
});
