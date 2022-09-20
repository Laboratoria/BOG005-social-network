
import { welcome } from './components/welcome.js';
import { landing } from './components/landing.js'
import { register } from './components/register.js';

const divRoot = document.getElementById('root');

const routes = {
    '/': welcome,
    '/landing':landing,
    '/register':register,
};

export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname,
    );
    divRoot.removeChild( divRoot.firstChild);
    divRoot.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
divRoot.appendChild(component());





