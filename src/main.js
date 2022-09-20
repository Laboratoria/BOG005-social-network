// Este es el punto de entrada de tu aplicacion
import { initializeApp } from 'firebase/app';
import { myFunction } from './lib/index.js';

// TODO: Replace the following with your app's Firebase project
const firebaseConfig = {
  apiKey: 'AIzaSyAMHapk66tjexHEQWMSbiHoG9Is3McGVxY',
  authDomain: 'loveat-228fb.firebaseapp.com',
  projectId: 'loveat-228fb',
  storageBucket: 'loveat-228fb.appspot.com',
  messagingSenderId: '476677736837',
  appId: '1:476677736837:web:d0d93a733703d9703d1cec',
  measurementId: 'G-GPWP4P5SXR',
};
console.log(firebaseConfig);
export const app = initializeApp(firebaseConfig);

myFunction();
