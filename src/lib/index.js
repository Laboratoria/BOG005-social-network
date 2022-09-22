// aqui exportaras las funciones que necesites

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };


import { signIn } from "./view/signIn.js";
// import { signUp } from "./view/signUp.js";

document.addEventListener("DOMContentLoaded", signIn);

const routes = {
    '/' : signIn,
    '/signUP' : signUp,
  };

  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = routes[window.location.pathname];

  const onNavigate= (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin+ pathname
    )
    rootDiv.innerHTML=routes[pathname]
  }   

//   const componet= routes[window.location.pathname]
// document.getElementById("root").innerHTML = signIn
// console.log(window.location.pathname);
//   rootDiv.innerHTML = routes[window.location.pathname]
