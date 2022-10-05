import { register } from '../src/components/register.js';

const mockRegister = () => {
  const containerRegister = document.createElement('section');

  const title = document.createElement('h1');
  title.textContent = 'mock REGISTRATE';

  containerRegister.append(title);
  return containerRegister;
};

// eslint-disable-next-line no-unused-vars
const mockRoutes = {
  '/register': mockRegister,
};

jest.mock('../src/firebase/connection.js');

// describe('onNavigate', () => {
describe('Testing function register', () => {
  it('should navigate to /wall when register successfully', (done) => {
    // arrange
    document.body.innerHTML = '<div id="root"></div>';

    // act
    document.getElementById('root').appendChild(register());
    document.getElementById('registerButton').click();

    // assert
    console.log('WP', window.history.state);

    setTimeout(() => {
      console.log('WWW', window.location.pathname);
      expect(window.location.pathname).toBe('/wall');
      done();
    }, 500);
  });
});
