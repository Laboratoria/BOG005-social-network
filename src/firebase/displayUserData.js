import { auth, getUserData } from './authenticationFirebase.js';
//import { eventSignOut } from './signOut.js';

const displayUserData = () => {
  if (window.location.pathname === '/wall') {

   getUserData(auth)
    .then(() => {
       console.log('Resuelta');
      });
    

  // getUserData(auth).then(() => {

  //   const getName = localStorage.getItem('Username');
  //   const email = localStorage.getItem('UserCredentialFb');
  
  //   console.log("Estoy en el muro");
  //   document.querySelector('#wallOffPublication').innerHTML += `<h1 class="ejemplo">Hola ${getName}!</h1>`;
  //   document.querySelector('#wallOffPublication').innerHTML += `<h1 class="ejemplo">Estás registrada con correo: ${email}</h1>`;

  //   if (email) {
  //     eventSignOut();
  //   }
  //   return auth;
  // })
  // .finally(() => {
  //   console.log(auth);
  // })
  // .catch((error) => {
  //   console.log(error)
  // })
  
    // result.then((userCredential) => {
    //   console.log(userCredential);
    // }).catch((error) => {
    //   console.log(error);
    // });
    
    



  }
};

export { displayUserData };

// document.querySelector('#wallOffPublication').innerHTML += `<h1 class="ejemplo">Hola ${userName}!</h1>`;
// document.querySelector('#wallOffPublication').innerHTML += `<h1 class="ejemplo">Estás registrada con correo: ${user.email}</h1>`;