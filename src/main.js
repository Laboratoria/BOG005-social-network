import home from './lib/views/home.js'
import { changeRoute } from './lib/router.js'
import { COMPONENTS } from './index.js';

const init = () =>{
    document.getElementById('content').appendChild(home());
    changeRoute(window.location.hash, COMPONENTS);
    window.addEventListener('hashchange', () =>{
        changeRoute(window.location.hash, COMPONENTS)
    });
};
window.addEventListener('load', init)