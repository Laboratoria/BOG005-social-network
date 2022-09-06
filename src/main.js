// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';
// myFunction();

const root = document.getElementById('root');
if (window.location.pathname === '/') {
  root.innerHTML = '<h1> beginnig opened </h1>';
} else if (window.location.pathname === '/wall') {
  root.innerHTML = '<h1> wall opened </h1>';
} else if (window.location.pathname === '/profile') {
  root.innerHTML = '<h1> profile opened </h1>';
}

const changeRoute = (hash) => {
  if (hash === '#beginning') {
    window.history.replaceState({}, 'beginning', '/');
  } else if (hash === '#wall') {
    window.history.replaceState({}, 'wall', '/wall');
  } else if (hash === '#profile') {
    window.history.replaceState({}, 'profile', '/profile');
  }
};

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#beginning') {
    root.innerHTML = '<h1> beginnig opened </h1>';
    changeRoute(window.location.hash);
  } else if (window.location.hash === '#wall') {
    root.innerHTML = '<h1> wall opened </h1>';
    changeRoute(window.location.hash);
  } else if (window.location.hash === '#profile') {
    root.innerHTML = '<h1> profile opened </h1>';
    changeRoute(window.location.hash);
  }
});

window.onpopstate = () => {
  if (window.location.pathname === '/') {
    root.innerHTML = '<h1> beginnig opened </h1>';
  } else if (window.location.pathname === '/wall') {
    root.innerHTML = '<h1> wall opened </h1>';
  } else if (window.location.pathname === '/profile') {
    root.innerHTML = '<h1> profile opened </h1>';
  }
};
