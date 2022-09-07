// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';
// myFunction();

const beginningnContent = '<h1> beginnig opened </h1>';
const homeContent = '<h1> Home page </h1>';
const wallContent = '<h1> wall opened </h1>';
const profileContent = '<h1> profile opened </h1>';

const linkContent = {
  '#beginning': beginningnContent,
  '#home': homeContent,
  '#wall': wallContent,
  '#profile': profileContent,
};

const root = document.getElementById('root');
if (window.location.pathname === '/') {
  root.innerHTML = beginningnContent;
} else if (window.location.pathname === '/home') {
  root.innerHTML = homeContent;
} else if (window.location.pathname === '/wall') {
  root.innerHTML = wallContent;
} else if (window.location.pathname === '/profile') {
  root.innerHTML = profileContent;
}

const changeRoute = (hash) => {
  if (hash === '#beginning') {
    window.history.replaceState({}, 'beginning', '/');
  } else if (hash === '#home') {
    window.history.replaceState({}, 'home', '/home');
  } else if (hash === '#wall') {
    window.history.replaceState({}, 'wall', '/wall');
  } else if (hash === '#profile') {
    window.history.replaceState({}, 'profile', '/profile');
  }
};

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  root.innerHTML = linkContent[hash];
  changeRoute(hash);
});

window.onpopstate = () => {
  if (window.location.pathname === '/') {
    root.innerHTML = beginningnContent;
  } else if (window.location.pathname === '/home') {
    root.innerHTML = homeContent;
  } else if (window.location.pathname === '/wall') {
    root.innerHTML = wallContent;
  } else if (window.location.pathname === '/profile') {
    root.innerHTML = profileContent;
  }
};
