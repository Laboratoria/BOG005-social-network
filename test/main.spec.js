/* eslint-disable jest/no-identical-title */
import { onNavigate } from '../src/main';

jest.mock('../src/firebase/connection.js');

const mockWelcome = () => {
  const sectionWelcome = document.createElement('section');
  const message = document.createElement('h2');
  message.textContent = 'Disfruta de las diferentes festividades alrededor del mundo.';

  sectionWelcome.append(message);
  return sectionWelcome;
};

const mockRoutes1 = {
  '/': mockWelcome,
};

describe('onNavigate', () => {
  it('pintar welcome', () => {
    document.body.innerHTML = '<div id="root"></div>';
    onNavigate('/', mockRoutes1);
    console.log('button: ', document.getElementById('root').textContent);
    expect(document.getElementById('root').textContent).toEqual(
      'Disfruta de las diferentes festividades alrededor del mundo.',
    );
  });
});

const mockLanding = () => {
  const containerTitle = document.createElement('section');

  const title = document.createElement('h1');
  title.textContent = 'MOCK ENJOY THE WORLD';

  containerTitle.append(title);
  return containerTitle;
};

const mockRoutes2 = {
  '/landing': mockLanding,
};

describe('onNavigate', () => {
  it('Debe pintar el título', () => {
    document.body.innerHTML = '<div id="root"></div>';
    onNavigate('/landing', mockRoutes2);
    console.log(
      'documento root: ',
      document.getElementById('root').textContent,
    );
    expect(document.getElementById('root').textContent).toEqual(
      'MOCK ENJOY THE WORLD',
    );
  });
});

const mockRegister = () => {
  const containerRegister = document.createElement('section');

  const title = document.createElement('h1');
  title.textContent = 'mock REGISTRATE';

  containerRegister.append(title);
  return containerRegister;
};

const mockRoutes3 = {
  '/register': mockRegister,
};

describe('onNavigate', () => {
  it('verify that register returns the correct node', () => {
    document.body.innerHTML = '<div id="root"></div>';
    onNavigate('/register', mockRoutes3);
    console.log(
      'documento root register: ',
      document.getElementById('root').textContent,
    );
    expect(document.getElementById('root').textContent).toEqual(
      'mock REGISTRATE',
    );
  });
});

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
    console.log(
      'documento root: ',
      document.getElementById('root').textContent,
    );
    expect(document.getElementById('root').textContent).toEqual(
      'MOCK ENJOY THE WORLD',
    );
  });
});
