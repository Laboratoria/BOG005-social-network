import { onNavigate } from '../src/main.js';

jest.mock('../src/firebase/connection.js');
jest.mock('../src/firebase/auth.js');

const mockLanding = () => {
  const containerTitle = document.createElement('section');

  const title = document.createElement('h1');
  title.textContent = 'MOCK ENJOY THE WORLD';

  containerTitle.append(title);
  return containerTitle;
};

const mockRoutes = {
  '/landing': mockLanding,
};

describe('onNavigate', () => {
  it('Debe pintar el título', () => {
    document.body.innerHTML = '<div id="root"></div>';
    onNavigate('/landing', mockRoutes);
    console.log('documento root: ', document.getElementById('root').textContent);
    expect(document.getElementById('root').textContent).toEqual('MOCK ENJOY THE WORLD');
  });
});
