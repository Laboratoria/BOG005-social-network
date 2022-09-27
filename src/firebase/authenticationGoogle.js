import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { auth } from './authenticationFirebase.js'

const provider = new GoogleAuthProvider();
const signGoogle = ()=>{signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // console.log('credential es =>', credential);
    const token = credential.accessToken;
    // console.log('token es =>', token);
    // The signed-in user info.
    const user = result.user;
    // console.log('resultado del usuario es =>', user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    // console.log('errorCode es=>', errorCode)
    const errorMessage = error.message;
    // console.log('errorMessage es=>', errorMessage)
    // The email of the user's account used.
    const email = error.customData.email;
    // console.log('email es=>', email)
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // console.log('credential es =>', credential)
    // ...
  });
} 

// RESOLVER 
// const dataUser = () => {onAuthStateChanged(auth, (user) => {
//     console.log('entra el usuario')
//     if (user) {
//         console.log(user)
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });
// };


export { provider, signGoogle, /*dataUser*/};




