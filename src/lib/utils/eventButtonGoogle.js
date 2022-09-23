import {provider, signGoogle, dataUser } from '../../firebase/authenticationGoogle.js';

const eventButtonGoogle = () => {
    if (window.location.pathname === '/signIn') {
      const buttonGoogle = document.getElementById('googleButton');
      if (buttonGoogle) {
        buttonGoogle.addEventListener('click', () => {
        // console.log(provider)
        // console.log(signGoogle)
        signGoogle();
        window.location.href = '#wall';

    });
    };
    
}}

export default eventButtonGoogle;