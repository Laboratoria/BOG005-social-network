import { onNavigate } from '../main.js';

export const welcome = () => {
  const sectionWelcome = document.createElement('section');
  sectionWelcome.className = 'sectionWelcome';

  // const imgWelcome = document.createElement('img');
  // imgWelcome.className = 'FondoWelcome';
  // imgWelcome.src = 'img/mundoverde.PNG';
  // imgWelcome.alt = 'Name';

  const message = document.createElement('h2');
  message.className = 'description';
  message.textContent = 'Come and celebrate Holidays around the world with us.';

  const buttonStart = document.createElement('button');
  buttonStart.className = 'button';
  buttonStart.textContent = 'Start the Journey';

  buttonStart.addEventListener('click', () => {
    onNavigate('/landing');
  });

  sectionWelcome.append(message, buttonStart);

  return sectionWelcome;
};
