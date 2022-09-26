import { onNavigate } from '../src/main.js';

jest.mock('../src/firebase/connection.js');
jest.mock('../src/firebase/auth.js');

const mockRegister = () => {
  const containerRegister = document.createElement('section');

  const title = document.createElement('h1');
  title.textContent = 'mock REGISTRATE';

  containerRegister.append(title);
  return containerRegister;
};

const mockRoutes = {
  '/register': mockRegister,
};

describe('onNavigate', () => {
  it('pintar el template de register', () => {
    document.body.innerHTML = '<div id="root"></div>';
    onNavigate('/register', mockRoutes);
    console.log('documento root register: ', document.getElementById('root').textContent);
    expect(document.getElementById('root').textContent).toEqual('mock REGISTRATE');
  });
});
