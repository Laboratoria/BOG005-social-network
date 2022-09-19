import { onNavigate } from '../main.js';

export const wall = () => {
    const div = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = 'Welcome to the Wall';

    const button = document.createElement('button');
    button.textContent = 'Regresar';
  
    button.addEventListener('click', () => {
        onNavigate('/login');
      });

    
    div.append(title, button);
  
    return div;
  };