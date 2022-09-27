import { signGoogle } from '../../firebase/authenticationGoogle.js';

const eventButtonGoogle = () => {
    if (window.location.pathname === '/signIn') {
      const buttonGoogle = document.getElementById('googleButton');
      if (buttonGoogle) {
        buttonGoogle.addEventListener('click', () => {
        // console.log(provider)
        // console.log(signGoogle)
         signGoogle();
        //  const promesaGoogle =
        // console.log('Promesa de google', promesaGoogle);
        window.location.href = '#wall';

    });
    };
    
};
};

export { eventButtonGoogle };