import { onNavigate } from '../main.js';

export const welcome = () => {
  const sectionWelcome = document.createElement('sectionWelcome');
  sectionWelcome.className = 'sectionWelcome';

  const title = document.createElement('h1');
  title.className = 'titleWelcome';
  title.textContent = 'Enfiéstate todo el Año';

  const mensage = document.createElement('h2');
  mensage.className = 'description';
  mensage.textContent = 'Disfruta de las diferentes festividades alrededor del mundo.';

  const buttonStart = document.createElement('button');
  buttonStart.className = 'button';
  buttonStart.textContent = 'Inicia tu viaje';

  buttonStart.addEventListener('click', () => {
    onNavigate('/landing');
  });

  sectionWelcome.append(title, mensage, buttonStart);

  return sectionWelcome;
};
