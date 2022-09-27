import { onNavigate } from '../main.js';

export const Wall = () => {
  // contenedor que almacenará los 2 botones y dará un solo return

  const div = document.createElement('div');

  div.className = 'header';

  // se crea titulo y parrafo

  const header = document.createElement('header');
  header.className = 'header';

  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'Yummy Friends';

  const buttonBack = document.createElement('button');
  buttonBack.textContent = 'Cerrar sesión';
  buttonBack.className = 'buttonBack';
  header.append(title, buttonBack);

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(header);

  return header;
};
