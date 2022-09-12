import {onNavigate} from "../main.js";

export const login = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputPassLo = document.createElement('input');

  buttonLogin.textContent = 'inicia sesión';
  buttonBack.textContent = 'Regresar';
  title.textContent = 'Inicia sesión';

  div.append(title, buttonLogin, buttonBack);
  return div;
};
