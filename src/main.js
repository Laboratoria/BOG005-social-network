import { welcome} from './components/welcome.js';
const divRoot= document.getElementById('root')
const routes = {
    '/': welcome,    
};

const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname,
    );
    divRoot.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
divRoot.appendChild(component());




