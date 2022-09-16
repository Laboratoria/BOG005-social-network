import { showSection } from '../main.js';

export const welcome = () => {
  const sectionWelcome = document.createElement('section');
  sectionWelcome.className = 'sectionWelcome';
  sectionWelcome.innerHTML = `<section class="wlcm">
  <button class="buttonLogin"><a href="#login">Login</a></button>
  <button><a href="#register">Registrarse</a></button>
    </section>
    `;

    const googleButton = sectionWelcome.querySelector('.buttonLogin');
    googleButton.addEventListener('click', () => {
      

    });

    return sectionWelcome;
    }