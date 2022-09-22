import { onNavigate } from '../main.js';

export const Wall = () => {
  // contenedor que almacenará los 2 botones y dará un solo return
  const header = document.createElement('header');
  header.className = 'header';
  // se crea titulo y parrafo
  const title = document.createElement('h1');
  title.className = 'title';
  // Se crean 2 botones

  const buttonBack = document.createElement('button');

  title.textContent = 'Yummy Friends';
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  header.append(title, buttonBack);

  return header;
};
