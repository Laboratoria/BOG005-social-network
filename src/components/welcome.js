import { onNavigate } from '../main.js';

export const welcome = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');

  buttonLogin.textContent = 'Inicia sesión';
  buttonRegister.textContent = 'Regístrate';
  title.textContent = 'Somos la mejor red social de programadoras';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });
  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });
 

  div.append(title, buttonLogin, buttonRegister);
  return div;
};
