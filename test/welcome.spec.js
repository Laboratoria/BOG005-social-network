import { onNavigate } from '../src/main';

jest.mock('../src/firebase/connection.js');
jest.mock('../src/firebase/auth.js');

const mockWelcome = () => {
  const sectionWelcome = document.createElement('section');
  const message = document.createElement('h2');
  message.textContent = 'Disfruta de las diferentes festividades alrededor del mundo.';

  sectionWelcome.append(message);
  return sectionWelcome;
};

const mockRoutes = {
  '/': mockWelcome,
};

describe('onNavigate', () => {
  it('pintar welcome', () => {
    document.body.innerHTML = '<div id="root"></div>';
    onNavigate('/', mockRoutes);
    console.log('button: ', document.getElementById('root').textContent);
    expect(document.getElementById('root').textContent).toEqual('Disfruta de las diferentes festividades alrededor del mundo.');
  });
});
